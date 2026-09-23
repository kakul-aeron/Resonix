import { useEffect, useMemo, useRef, useState } from 'react'
import { ALL_SONGS_LIST, PLAYLISTS, SONGS, resolveSongs } from './data/songs.js'
import { useAuth } from './hooks/useAuth.js'

function SongTable({ songs, currentSongId, onPlay }) {
  if (songs.length === 0) return <div className="no-match">No songs in this playlist yet.</div>
  return (
    <div id="song-table">
      {songs.map((song, i) => (
        <div
          key={song.id}
          className={`song ${song.id === currentSongId ? 'active' : ''}`}
          onClick={() => onPlay(i)}
        >
          <div className="s-tag">{i + 1}</div>
          <div className="s-title">{song.title}</div>
          <div className="s-artist">{song.artist}</div>
          <div className="s-views">{song.views}</div>
          <div className="s-duration">{song.duration}</div>
        </div>
      ))}
    </div>
  )
}

function AuthModal({ mode, onClose, onLogin, onSignup }) {
  const [form, setForm] = useState({ name: '', username: '', phone: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if (mode === 'login') {
      if (!form.email || !form.password) return setError('Email and password are required.')
      const res = onLogin(form.email, form.password)
      if (!res.ok) return setError(res.error)
      onClose()
    } else {
      const { name, username, phone, email, password, confirm } = form
      if (!name || !username || !phone || !email || !password || !confirm) return setError('All fields are required.')
      if (!/^\d{10}$/.test(phone)) return setError('Phone must be 10 digits.')
      if (password !== confirm) return setError('Passwords do not match.')
      const res = onSignup({ name, username, phone, email, password })
      if (!res.ok) return setError(res.error)
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h2>{mode === 'login' ? 'Log in' : 'Sign up'}</h2>
        {mode === 'signup' && (
          <>
            <label>Name</label>
            <input value={form.name} onChange={set('name')} required />
            <label>Username</label>
            <input value={form.username} onChange={set('username')} required />
            <label>Phone Number</label>
            <input value={form.phone} onChange={set('phone')} pattern="[0-9]{10}" maxLength={10} required />
          </>
        )}
        <label>Email</label>
        <input type="email" value={form.email} onChange={set('email')} required />
        <label>Password</label>
        <input type="password" value={form.password} onChange={set('password')} required />
        {mode === 'signup' && (
          <>
            <label>Confirm Password</label>
            <input type="password" value={form.confirm} onChange={set('confirm')} required />
          </>
        )}
        {error && <p className="form-error">{error}</p>}
        <button className="primary" type="submit">{mode === 'login' ? 'Log in' : 'Sign Up'}</button>
        <div className="row">
          <button className="secondary" type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default function App() {
  const { currentUser, login, signup, logout, createPlaylist, addSongToPlaylist } = useAuth()
  const [view, setView] = useState({ type: 'home' }) // home | playlist | userPlaylist | search
  const [searchInput, setSearchInput] = useState('')
  const [queue, setQueue] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [authMode, setAuthMode] = useState(null)
  const [showPlaylistModal, setShowPlaylistModal] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [confirmLogout, setConfirmLogout] = useState(false)
  const audioRef = useRef(null)

  const currentSong = (currentIndex >= 0 ? queue[currentIndex] : null) ?? null

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (currentSong) {
      if (audio.getAttribute('data-song-id') !== currentSong.id) {
        audio.setAttribute('data-song-id', currentSong.id)
        audio.src = currentSong.src
      }
      audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.removeAttribute('src')
      audio.removeAttribute('data-song-id')
      audio.load()
    }
  }, [currentSong])

  const playQueue = (songs, index) => {
    setQueue(songs)
    setCurrentIndex(index)
  }

  const playNext = () => {
    setCurrentIndex((i) => (i + 1 < queue.length ? i + 1 : i))
  }
  const playPrev = () => {
    setCurrentIndex((i) => (i - 1 >= 0 ? i - 1 : i))
  }

  const openPlaylist = (playlist) => {
    const songs = resolveSongs(playlist.songIds)
    setView({ type: 'playlist', key: playlist.key })
    // Don't autoplay — wait until user clicks a row
    setQueue(songs)
    setCurrentIndex(-1)
  }

  const openUserPlaylist = (name) => {
    const pl = currentUser?.playlists.find((p) => p.name === name)
    const songs = (pl?.songIds || []).map((id) => SONGS[id]).filter(Boolean)
    setView({ type: 'userPlaylist', name })
    setQueue(songs)
    setCurrentIndex(-1)
  }

  const activeSongs = useMemo(() => {
    if (view.type === 'playlist') {
      const pl = PLAYLISTS.find((p) => p.key === view.key)
      return pl ? resolveSongs(pl.songIds) : []
    }
    if (view.type === 'userPlaylist') {
      const pl = currentUser?.playlists.find((p) => p.name === view.name)
      return (pl?.songIds || []).map((id) => SONGS[id]).filter(Boolean)
    }
    if (view.type === 'search') {
      const q = view.query.toLowerCase()
      const seen = new Set()
      return ALL_SONGS_LIST.filter((song) => {
        const key = `${song.title}-${song.artist}`.toLowerCase()
        if (seen.has(key)) return false
        if (song.title.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q)) {
          seen.add(key)
          return true
        }
        return false
      })
    }
    return []
  }, [view, currentUser])

  // keep queue in sync when user playlist changes (add song)
  useEffect(() => {
    if (view.type === 'userPlaylist') {
      const pl = currentUser?.playlists.find((p) => p.name === view.name)
      const songs = (pl?.songIds || []).map((id) => SONGS[id]).filter(Boolean)
      setQueue(songs)
      // clamp selection so we never point past the end after edits
      setCurrentIndex((i) => (i >= songs.length ? -1 : i))
    }
  }, [currentUser, view])

  const onSearch = (e) => {
    e.preventDefault()
    const q = searchInput.trim()
    if (!q) return
    setView({ type: 'search', query: q })
    setQueue([])
    setCurrentIndex(-1)
  }

  const genrePlaylists = PLAYLISTS.filter((p) => !p.section)
  const artistPlaylists = PLAYLISTS.filter((p) => p.section === 'artist')
  const activePlaylistMeta =
    view.type === 'playlist' ? PLAYLISTS.find((p) => p.key === view.key) : null

  const handleAddToPlaylist = () => {
    if (!currentSong) {
      alert('Play a song first, then add it to a playlist.')
      return
    }
    if (!selectedPlaylist) {
      alert('Please select a playlist first.')
      return
    }
    const res = addSongToPlaylist(selectedPlaylist, currentSong.id)
    if (!res.ok) alert(res.error)
    else {
      alert(`"${currentSong.title}" added to "${selectedPlaylist}"`)
      setShowPlaylistModal(false)
    }
  }

  const handleCreatePlaylist = () => {
    const res = createPlaylist(newPlaylistName)
    if (!res.ok) alert(res.error)
    else {
      setNewPlaylistName('')
      setSelectedPlaylist(newPlaylistName.trim())
      alert('Playlist created.')
    }
  }

  return (
    <div className="app">
      <div className="container flex bg-black">
        <div className="left">
          <div className="home bg-grey rounded m-1 p-1">
            <div id="header-title">♫ Resonix</div>
            <form id="search-song" onSubmit={onSearch}>
              <input
                type="text"
                placeholder="Search songs or artists"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" id="search-btn" aria-label="Search">⌕</button>
            </form>
          </div>

          <div className="library bg-grey rounded m-1 p-1">
            <div className="heading"><h2>Your Library</h2></div>
            {!currentUser && <p className="hint">Log in to see your playlists.</p>}
            <div id="songList">
              <ul>
                {(currentUser?.playlists || []).map((p) => (
                  <li key={p.name} onClick={() => openUserPlaylist(p.name)}>
                    {p.name} ({p.songIds.length})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="right bg-grey rounded">
          <div className="header">
            <div className="nav">
              {view.type !== 'home' && (
                <button onClick={() => setView({ type: 'home' })} aria-label="Back">←</button>
              )}
            </div>
            <div id="buttons">
              {currentUser ? (
                <span id="greeting" onClick={() => setConfirmLogout(true)}>Hello, {currentUser.name}</span>
              ) : (
                <>
                  <button className="signupbtn" onClick={() => setAuthMode('signup')}>Sign up</button>
                  <button className="loginbtn" onClick={() => setAuthMode('login')}>Log in</button>
                </>
              )}
            </div>
          </div>

          {view.type === 'home' && (
            <div className="Playlists">
              <h1>Resonix Playlists</h1>
              <div className="cardContainer">
                {genrePlaylists.map((p) => (
                  <div className="card" key={p.key} onClick={() => openPlaylist(p)}>
                    <img src={p.image} alt={p.name} />
                    <h2>{p.name}</h2>
                  </div>
                ))}
              </div>
              <h1>Artist Playlists</h1>
              <div className="cardContainer">
                {artistPlaylists.map((p) => (
                  <div className="card" key={p.key} onClick={() => openPlaylist(p)}>
                    <img src={p.image} alt={p.name} />
                    <h2>{p.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view.type !== 'home' && (
            <div id="song-table-container">
              <div id="preview">
                {activePlaylistMeta && <img className="preview-img" src={activePlaylistMeta.image} alt={activePlaylistMeta.name} />}
                <h1 className="preview-title">
                  {view.type === 'playlist' && activePlaylistMeta?.name}
                  {view.type === 'userPlaylist' && view.name}
                  {view.type === 'search' && `Results for "${view.query}"`}
                </h1>
              </div>
              <div id="song-table-header">
                <div className="s-tag">#</div>
                <div className="s-title">Title</div>
                <div className="s-artist">Artist</div>
                <div className="s-views">Views</div>
                <div className="s-duration">Duration</div>
              </div>
              <hr style={{ margin: '10px' }} />
              {view.type === 'search' && activeSongs.length === 0 ? (
                <div className="no-match">No matching songs found.</div>
              ) : (
                <SongTable songs={activeSongs} currentSongId={currentSong?.id} onPlay={(i) => playQueue(activeSongs, i)} />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="playbar">
        <div id="song-info">
          <button onClick={playPrev} aria-label="Previous">⏮</button>
          <span id="song-title">{currentSong ? `${currentSong.artist} - ${currentSong.title}` : 'Pick a song'}</span>
          <button onClick={playNext} aria-label="Next">⏭</button>
          {currentUser && currentSong && (
            <button onClick={() => { setSelectedPlaylist(currentUser.playlists[0]?.name || ''); setShowPlaylistModal(true) }} aria-label="Add to playlist">＋</button>
          )}
        </div>
        <audio ref={audioRef} controls onEnded={playNext} />
      </div>

      {authMode && (
        <AuthModal key={authMode} mode={authMode} onClose={() => setAuthMode(null)} onLogin={login} onSignup={signup} />
      )}

      {confirmLogout && (
        <div className="modal-backdrop" onClick={() => setConfirmLogout(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to log out?</p>
            <div className="row">
              <button className="primary" onClick={() => { logout(); setConfirmLogout(false); setView({ type: 'home' }) }}>Yes</button>
              <button className="secondary" onClick={() => setConfirmLogout(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {showPlaylistModal && (
        <div className="modal-backdrop" onClick={() => setShowPlaylistModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Manage Playlists</h2>
            <div className="playlist-actions">
              <label>Select Playlist</label>
              <select value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)}>
                <option value="">-- choose --</option>
                {(currentUser?.playlists || []).map((p) => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
              </select>
              <button className="primary" onClick={handleAddToPlaylist}>Add current song</button>
              <label>Or create new</label>
              <input value={newPlaylistName} onChange={(e) => setNewPlaylistName(e.target.value)} placeholder="Playlist name" />
              <button className="secondary" onClick={handleCreatePlaylist}>Create</button>
              <button className="secondary" onClick={() => setShowPlaylistModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
