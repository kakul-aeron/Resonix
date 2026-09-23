// Central song catalog — only includes audio files that actually exist in public/music
// IDs are stable so playlist add / search / next-prev all work.

const s = (id, title, artist, views, duration, src) => ({
  id,
  title,
  artist,
  views,
  duration,
  src,
})

export const SONGS = {
  // Shubh
  baller: s('baller', 'Baller', 'Shubh', '159M', '2:29', '/music/Shubh/Shubh - Baller.mp3'),
  elevated: s('elevated', 'Elevated', 'Shubh', '259M', '3:21', '/music/Shubh/Shubh - Elevated.mp3'),
  dior: s('dior', 'Dior', 'Shubh', '56M', '2:20', '/music/Shubh/Shubh - Dior.mp3'),
  kingShit: s('kingShit', 'King Shit', 'Shubh', '162M', '3:47', '/music/Shubh/Shubh - King Shit.mp3'),
  noLove: s('noLove', 'No Love', 'Shubh', '299M', '2:51', '/music/Shubh/Shubh - No Love.mp3'),
  stillRollin: s('stillRollin', 'Still Rollin', 'Shubh', '149M', '2:55', '/music/Shubh/Shubh - Still Rollin.mp3'),
  weRollin: s('weRollin', 'We Rollin', 'Shubh', '422M', '3:20', '/music/Shubh/Shubh - We Rollin.mp3'),

  // Honey Singh
  brownRang: s('brownRang', 'Brown Rang', 'Honey Singh', '502M', '3:32', '/music/Honey Singh/Honey Singh - Brown Rang.mp3'),
  desiKalakaar: s('desiKalakaar', 'Desi Kalakaar', 'Honey Singh', '289M', '4:14', '/music/Honey Singh/Honey Singh - Desi Kalakaar.mp3'),
  dheereDheere: s('dheereDheere', 'Dheere Dheere', 'Honey Singh', '695M', '3:33', '/music/Honey Singh/Honey Singh - Dheere Dheere.mp3'),
  hipHop: s('hipHop', 'Issey Kehte Hain Hip Hop', 'Honey Singh', '116M', '3:15', '/music/Honey Singh/Honey Singh - Issey Kehte Hain Hip Hop.mp3'),
  millionaire: s('millionaire', 'Millionaire', 'Honey Singh', '211M', '3:20', '/music/Honey Singh/Honey Singh - Millionaire.mp3'),
  oneBottleDown: s('oneBottleDown', 'ONE BOTTLE DOWN', 'Honey Singh', '231M', '3:17', '/music/Honey Singh/Honey Singh - ONE BOTTLE DOWN.mp3'),

  // Arijit Singh (only tracks present on disk)
  saanson: s('saanson', 'Saanson Ko', 'Arijit Singh', '385M', '4:49', '/music/Arijit Singh/Arijit Singh - Saanson Ko.mp3'),
  chaleya: s('chaleya', 'Chaleya', 'Arijit Singh', '618M', '3:21', '/music/Arijit Singh/Arijit Singh - Chaleya.mp3'),
  kesariya: s('kesariya', 'Kesariya', 'Arijit Singh', '887M', '4:28', '/music/Arijit Singh/Arijit Singh - Kesariya.mp3'),
  tumHiHo: s('tumHiHo', 'Tum Hi Ho', 'Arijit Singh', '997M', '4:21', '/music/Arijit Singh/Arijit Singh - Tum Hi Ho.mp3'),
  pal: s('pal', 'Pal', 'Arijit Singh', '708M', '4:07', '/music/Arijit Singh/Arijit Singh - Pal.mp3'),

  // Diljit Dosanjh
  bornToShine: s('bornToShine', 'Born to Shine', 'Diljit Dosanjh', '320M', '3:33', '/music/Diljeet Dosanjh/Diljeet Dosanjh - Born to Shine.mp3'),
  doYouKnow: s('doYouKnow', 'Do You Know', 'Diljit Dosanjh', '450M', '3:33', '/music/Diljeet Dosanjh/Diljeet Dosanjh - Do You Know.mp3'),
  goat: s('goat', 'G.O.A.T.', 'Diljit Dosanjh', '328M', '3:43', '/music/Diljeet Dosanjh/Diljeet Dosanjh - G.O.A.T..mp3'),
  sauda: s('sauda', 'Sauda Khara Khara', 'Diljit Dosanjh', '632M', '3:31', '/music/Diljeet Dosanjh/Diljeet Dosanjh - Sauda Khara Khara.mp3'),

  // Ed Sheeran
  iDontCare: s('iDontCare', "I Don't Care", 'Ed Sheeran', '1.2B', '3:39', "/music/Ed Sheeran/Ed Sheeran - I Don't Care.mp3"),
  perfect: s('perfect', 'Perfect', 'Ed Sheeran', '5.7B', '4:23', '/music/Ed Sheeran/Ed Sheeran - Perfect.mp3'),
  photograph: s('photograph', 'Photograph', 'Ed Sheeran', '3.3B', '4:18', '/music/Ed Sheeran/Ed Sheeran - Photograph.mp3'),
  shapeOfYou: s('shapeOfYou', 'Shape of You', 'Ed Sheeran', '8.7B', '3:53', '/music/Ed Sheeran/Ed Sheeran - Shape of You.mp3'),
  thinkingOutLoud: s('thinkingOutLoud', 'Thinking out Loud', 'Ed Sheeran', '4.5B', '4:41', '/music/Ed Sheeran/Ed Sheeran - Thinking out Loud.mp3'),

  // Bollywood
  chammakChallo: s('chammakChallo', 'Chammak Challo', 'Akon', '765M', '3:47', '/music/Bollywood/Akon - Chammak Challo.mp3'),
  tuHaiKiNahi: s('tuHaiKiNahi', 'Tu Hai Ki Nahi', 'Ankit Tiwari', '229M', '5:33', '/music/Bollywood/Ankit Tiwari - Tu hai ki nahi.mp3'),
  aajKiRaat: s('aajKiRaat', 'Aaj Ki Raat', 'Madhubanti Bagchi', '805M', '4:47', '/music/Bollywood/Sonu Nigam - Aaj Ki Raat.mp3'),
  tauba: s('tauba', 'Tauba Tauba', 'Karan Aujla', '399M', '3:41', '/music/Bollywood/Karan Aujla - Tauba Tauba.mp3'),

  // Romance
  galliyan: s('galliyan', 'Galliyan', 'Ankit Tiwari', '610M', '5:40', '/music/Romance/Ankit Tiwari - Galliyan.mp3'),
  dandelions: s('dandelions', 'Dandelions', 'Ruth B', '684M', '5:53', '/music/Romance/Ruth B - Dandelions.mp3'),

  // Pop
  somethingJustLikeThis: s('somethingJustLikeThis', 'Something Just Like This', 'Chainsmokers', '3.3B', '4:08', '/music/Pop/Chainsmokers - Something Just Like This.mp3'),
  weDontTalk: s('weDontTalk', "We Don't Talk Anymore", 'Charlie Puth', '3.8B', '3:38', "/music/Pop/Charlie Puth - We Don't Talk Anymore.mp3"),
  iAintWorried: s('iAintWorried', "I Ain't Worried", 'OneRepublic', '599M', '2:29', "/music/Pop/OneRepublic - I Ain't Worried.mp3"),
  espresso: s('espresso', 'Espresso', 'Sabrina Carpenter', '790M', '3:21', '/music/Pop/Sabrina Carpenter - Espresso.mp3'),
  blindingLights: s('blindingLights', 'Blinding Lights', 'The Weeknd', '3.1B', '3:22', '/music/Pop/Weekend - Blinding Lights.mp3'),
  starboy: s('starboy', 'Starboy', 'The Weeknd', '3.4B', '3:51', '/music/Pop/Weeknd  - Starboy.mp3'),
  theHills: s('theHills', 'The Hills', 'The Weeknd', '2.5B', '4:02', '/music/Pop/Weeknd - The Hills.mp3'),
}

export const PLAYLISTS = [
  {
    key: 'punjabi',
    name: 'Punjabi Songs Playlist',
    image: '/img/playlist/punjab.jpeg',
    songIds: ['baller', 'desiKalakaar', 'elevated', 'brownRang', 'doYouKnow', 'hipHop', 'dior', 'stillRollin'],
  },
  {
    key: 'pop',
    name: 'Pop Songs Playlist',
    image: '/img/playlist/pop.jpeg',
    songIds: ['starboy', 'weDontTalk', 'somethingJustLikeThis', 'blindingLights', 'iAintWorried', 'millionaire', 'theHills', 'espresso'],
  },
  {
    key: 'bollywood',
    name: 'Bollywood Songs Playlist',
    image: '/img/playlist/bollywood.jpg',
    songIds: ['tauba', 'dheereDheere', 'aajKiRaat', 'tumHiHo', 'chammakChallo', 'chaleya', 'tuHaiKiNahi', 'kesariya', 'saanson'],
  },
  {
    key: 'romance',
    name: 'Romance Songs Playlist',
    image: '/img/playlist/romance.webp',
    songIds: ['saanson', 'tumHiHo', 'perfect', 'pal', 'galliyan', 'dandelions'],
  },
  {
    key: 'shubh',
    name: 'Shubh Best Hits',
    image: '/img/playlist/shubh.jpg',
    section: 'artist',
    songIds: ['weRollin', 'baller', 'elevated', 'dior', 'kingShit', 'noLove', 'stillRollin'],
  },
  {
    key: 'arijit',
    name: 'Arijit Singh Best Hits',
    image: '/img/playlist/arijit.jpg',
    section: 'artist',
    songIds: ['saanson', 'pal', 'tumHiHo', 'kesariya', 'chaleya'],
  },
  {
    key: 'diljit',
    name: 'Diljit Dosanjh Best Hits',
    image: '/img/playlist/diljeet.jpg',
    section: 'artist',
    songIds: ['doYouKnow', 'bornToShine', 'goat', 'sauda'],
  },
  {
    key: 'ed',
    name: 'Ed Sheeran Best Hits',
    image: '/img/playlist/ed.jpg',
    section: 'artist',
    songIds: ['shapeOfYou', 'perfect', 'photograph', 'iDontCare', 'thinkingOutLoud'],
  },
  {
    key: 'honey',
    name: 'Honey Singh Best Hits',
    image: '/img/playlist/honey_singh.jpeg',
    section: 'artist',
    songIds: ['brownRang', 'desiKalakaar', 'dheereDheere', 'oneBottleDown', 'millionaire', 'hipHop'],
  },
]

export const ALL_SONGS_LIST = Object.values(SONGS)

export function resolveSongs(songIds) {
  return songIds.map((id) => SONGS[id]).filter(Boolean)
}
