import { useCallback, useEffect, useState } from 'react'

const USERS_KEY = 'resonix_users'
const SESSION_KEY = 'resonix_session'

const seedUsers = [
  {
    name: 'Aryan Dubey',
    username: 'aryan_dubey',
    phone: '6266859638',
    email: 'aryan@gmail.com',
    password: 'aryan123',
    playlists: [
      { name: 'Shubh Rocks', songIds: ['baller', 'elevated', 'dior'] },
      { name: 'My favorites', songIds: ['blindingLights', 'starboy', 'galliyan', 'tauba'] },
    ],
  },
  {
    name: 'Ansh Aeron',
    username: 'ansh_aeron',
    phone: '9520639106',
    email: 'ansh@gmail.com',
    password: 'ansh123',
    playlists: [{ name: 'Badass Songs', songIds: ['dior', 'elevated', 'hipHop'] }],
  },
]

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {
    // corrupted storage — fall through and reseed
  }
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers))
  } catch {
    // storage unavailable (private mode) — keep in-memory seed
  }
  return seedUsers
}

export function useAuth() {
  const [users, setUsers] = useState(() => loadUsers())
  const [currentUserEmail, setCurrentUserEmail] = useState(() => {
    try {
      return localStorage.getItem(SESSION_KEY)
    } catch {
      return null
    }
  })

  const currentUser = users.find((u) => u.email === currentUserEmail) || null

  const persistUsers = (next) => {
    setUsers(next)
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(next))
    } catch {
      // storage full / unavailable — keep in-memory state
    }
  }

  useEffect(() => {
    try {
      if (currentUserEmail) localStorage.setItem(SESSION_KEY, currentUserEmail)
      else localStorage.removeItem(SESSION_KEY)
    } catch {
      // ignore
    }
  }, [currentUserEmail])

  const login = useCallback(
    (email, password) => {
      const user = users.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
      )
      if (!user) return { ok: false, error: 'Invalid email or password.' }
      setCurrentUserEmail(user.email)
      return { ok: true }
    },
    [users],
  )

  const signup = useCallback(
    ({ name, username, phone, email, password }) => {
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase() || u.username.toLowerCase() === username.toLowerCase())) {
        return { ok: false, error: 'An account with this email or username already exists.' }
      }
      const newUser = { name, username, phone, email, password, playlists: [] }
      persistUsers([...users, newUser])
      setCurrentUserEmail(email)
      return { ok: true }
    },
    [users],
  )

  const logout = useCallback(() => {
    setCurrentUserEmail(null)
  }, [])

  const createPlaylist = useCallback(
    (name) => {
      if (!currentUser) return { ok: false, error: 'Log in first.' }
      const trimmed = name.trim()
      if (!trimmed) return { ok: false, error: 'Playlist name cannot be empty.' }
      if (currentUser.playlists.some((p) => p.name.toLowerCase() === trimmed.toLowerCase())) {
        return { ok: false, error: 'Playlist already exists.' }
      }
      const next = users.map((u) =>
        u.email === currentUser.email
          ? { ...u, playlists: [...u.playlists, { name: trimmed, songIds: [] }] }
          : u,
      )
      persistUsers(next)
      return { ok: true }
    },
    [currentUser, users],
  )

  const addSongToPlaylist = useCallback(
    (playlistName, songId) => {
      if (!currentUser) return { ok: false, error: 'Log in first.' }
      const next = users.map((u) => {
        if (u.email !== currentUser.email) return u
        return {
          ...u,
          playlists: u.playlists.map((p) =>
            p.name === playlistName && !p.songIds.includes(songId)
              ? { ...p, songIds: [...p.songIds, songId] }
              : p,
          ),
        }
      })
      persistUsers(next)
      return { ok: true }
    },
    [currentUser, users],
  )

  return { currentUser, login, signup, logout, createPlaylist, addSongToPlaylist }
}
