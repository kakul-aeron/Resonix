# Resonix

Resonix is a **Spotify-inspired music streaming app** built with **React + Vite**. Browse genre and artist playlists, search songs, play audio, log in / sign up (localStorage, no backend), and manage your own playlists.

## Features

- **Music Playback** — audio player with next / previous, auto-advance on end, no autoplay until you pick a song
- **Playlists** — Punjabi, Pop, Bollywood, Romance + artist hits (Shubh, Arijit Singh, Diljit Dosanjh, Ed Sheeran, Honey Singh)
- **Search** — filter by title or artist, with empty-state message
- **Auth without PHP** — signup / login stored in `localStorage`, seeded demo users, validation + error messages
- **Your Library** — per-user playlists, create new, add current song (with alerts if nothing selected)
- **Responsive dark UI**

## Tech Stack

- **React 18 + Vite 5**
- **No backend / no PHP** — auth + playlists persist in browser `localStorage`
- Vanilla CSS (`src/index.css`)

## Project Structure

```
Resonix/
├── index.html            # Vite entry
├── package.json
├── vite.config.js
├── .gitignore
├── public/
│   ├── img/              # cover art, icons, playlist images
│   └── music/            # mp3 files by artist (~135 MB)
└── src/
    ├── main.jsx
    ├── App.jsx           # layout, player, search, modals
    ├── index.css
    ├── data/songs.js     # song catalog + playlist definitions
    └── hooks/useAuth.js  # localStorage auth + user playlists
```

## Getting Started

```bash
cd Resonix
npm install
npm run dev
```

Open `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

## Demo Accounts

- `aryan@gmail.com` / `aryan123`
- `ansh@gmail.com` / `ansh123`

Or sign up for a new account — it's stored locally.

## Bug Fixes (React migration)

- Removed PHP (`login.php`, `signup.php`) and legacy `script.js` / `temp.js` / `style.css`.
- Catalog in `src/data/songs.js` only lists mp3s actually present in `public/music` — old build referenced missing tracks (e.g. removed Arijit entries, empty Punjabi folder remapped to existing songs).
- Fixed playlist open autoplaying track 1 before user clicked; now opens paused.
- Fixed audio element keeping old `src` after clearing queue / search; now pauses + unloads when nothing selected.
- Fixed `currentSong` returning `undefined` out of bounds; now normalized to `null`.
- Fixed next/prev with functional state updates (no stale closure on `onEnded`).
- Fixed user-playlist sync wiping selection; now clamps index into range.
- Fixed silent no-op when adding with no playlist selected; now alerts.
- Fixed `loadUsers` crashing when `localStorage` is unavailable/corrupt; now falls back to in-memory seed.
- Added `.gitignore` (`node_modules/`, `dist/`).

## Notes

- Music files live under `public/music` and are committed to git (~135 MB total, each file well under GitHub's 100 MB per-file limit).
- Music content belongs to respective artists/labels, for educational use.

## Author

**Kakul Aeron** - [GitHub](https://github.com/kakul-aeron)
