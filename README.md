# Resonix

Resonix is a **Spotify-inspired music streaming platform** built with vanilla HTML, CSS, and JavaScript. It replicates core Spotify features including music playback, playlist browsing, search, user authentication, and playlist management.

## Features

- **Music Playback** - Full-featured audio player with play/pause, next/previous, progress bar
- **Playlist Browsing** - Curated playlists by genre (Punjabi, Pop, Bollywood, Romance) and artist (Shubh, Arijit Singh, Diljit Dosanjh, Ed Sheeran, Honey Singh)
- **Search** - Real-time song search functionality
- **User Authentication** - Login and signup modals with form validation
- **Library Management** - Personal library with "Your Library" section
- **Playlist Management** - Create new playlists, add songs to existing playlists
- **Responsive Design** - Works on desktop and mobile

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: PHP (login.php, signup.php)
- **Icons**: Font Awesome 6
- **Fonts**: Custom fonts via CSS

## Project Structure

```
Resonix/
├── index.html          # Main application entry point
├── style.css           # All styling
├── script.js           # Core application logic (856 lines)
├── login.php           # Login authentication endpoint
├── signup.php          # User registration endpoint
├── temp.js             # Additional utilities
├── music/              # Audio files organized by artist
│   ├── Shubh/
│   ├── Honey Singh/
│   ├── Arijit Singh/
│   ├── Diljeet Dosanjh/
│   ├── Ed Sheeran/
│   ├── Bollywood/
│   └── Romance/
└── img/                # Images and icons
    ├── playlist/       # Playlist cover art
    └── *.svg           # UI icons
```

## Getting Started

### Prerequisites
- A local web server (PHP support required for auth)
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kakul-aeron/Resonix.git
cd Resonix
```

2. Start a local server with PHP support:
```bash
# Using PHP built-in server
php -S localhost:8000

# Or use any other server (Apache, Nginx, etc.)
```

3. Open `http://localhost:8000` in your browser

## Key Components

### Song Class (`script.js:39-57`)
Represents a track with title, artist, views, duration, and source path. Includes a `play()` method that loads the audio into the player.

### Playlists
- **Genre-based**: Punjabi, Pop, Bollywood, Romance
- **Artist-based**: Shubh, Arijit Singh, Diljit Dosanjh, Ed Sheeran, Honey Singh

### Authentication Flow
- Click "Log in" or "Sign up" in header → Opens modal
- Forms submit to `login.php` / `signup.php`
- Client-side validation for password matching (signup)

### Playlist Management
- Click "+" icon on playing song → Opens playlist modal
- Choose "Add to Existing Playlist" or "Create New Playlist"
- Playlists persist in localStorage

## Screenshots

*(Add screenshots here if available)*

## Future Improvements

- [ ] Backend database integration (MySQL/PostgreSQL)
- [ ] User sessions & persistent login
- [ ] Liked songs / favorites
- [ ] Playlist sharing
- [ ] Mobile app version
- [ ] Recommendation engine

## License

This project is for educational purposes. Music content belongs to respective artists and labels.

## Author

**Kakul Aeron** - [GitHub](https://github.com/kakul-aeron)