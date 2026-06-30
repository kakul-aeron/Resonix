console.log('Spotify Clone Script Loaded');

let currentSong = new Audio();
let songs;
let currFolder;

function toggleLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = loginModal.style.display === 'block' ? 'none' : 'block';
}

function toggleSignupModal() {
    const signupModal = document.getElementById('signupModal');
    signupModal.style.display = signupModal.style.display === 'block' ? 'none' : 'block';
}

document.querySelector('.loginbtn').addEventListener('click', function (e) {
    e.preventDefault();
    toggleLoginModal();
});

document.querySelector('.signupbtn').addEventListener('click', function (e) {
    e.preventDefault();
    toggleSignupModal();
});

document.querySelector('#signupModal form').addEventListener('submit', function (e) {
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
});


//--------------Song class--------------
function Song(title, artist, views, duration, source) {
    this.title = title;
    this.artist = artist;
    this.views = views;
    this.duration = duration;

    this.play = function() {
        let audioElement = document.querySelector("audio");
        let sourceElement = document.getElementById("currernt_song");
        
        sourceElement.src = source;

        let str = artist + " - " + title;
        document.getElementById("song-title").textContent = str;

        audioElement.load();
        audioElement.play();
    };
}

const Baller = new Song("Baller", "Shubh", "159M", "2:29", "music/Shubh/Shubh - Baller.mp3");
const Elevated = new Song("Elevated", "Shubh", "259M", "3:21", "music/Shubh/Shubh - Elevated.mp3");
const Dior = new Song("Dior", "Shubh", "56M", "2:20", "music/Shubh/Shubh - Dior.mp3");
const King_Shit = new Song("King Shit", "Shubh", "162M", "3:47", "music/Shubh/Shubh - King Shit.mp3");
const No_Love = new Song("No Love", "Shubh", "299M", "2:51", "music/Shubh/Shubh - No Love.mp3");
const Still_Rollin = new Song("Still Rollin", "Shubh", "149M", "2:55", "music/Shubh/Shubh - Still Rollin.mp3");
const We_Rollin = new Song("We Rollin", "Shubh", "422M", "3:20", "music/Shubh/Shubh - Still Rollin.mp3");

const Brown_Rang = new Song("Brown Rang", "Honey Singh", "502M", "3:32", "music/Honey Singh/Honey Singh - Brown Rang.mp3");
const Desi_Kalakaar = new Song("Desi Kalakaar", "Honey Singh", "289M", "4:14", "music/Honey Singh/Honey Singh - Desi Kalakaar.mp3");
const Dheere_Dheere = new Song("Dheere Dheere", "Honey Singh", "695M", "3:33", "music/Honey Singh/Honey Singh - Dheere Dheere.mp3");
const IsseyKehteHainHipHop = new Song("Issey Kehte Hain Hip Hop", "Honey Singh", "116M", "3:15", "music/Honey Singh/Honey Singh - Issey Kehte Hain Hip Hop.mp3");
const Millionaire = new Song("Millionaire", "Honey Singh", "211M", "3:20", "music/Honey Singh/Honey Singh - Millionaire.mp3");
const ONE_BOTTLE_DOWN = new Song("ONE BOTTLE DOWN", "Honey Singh", "231M", "3:17", "music/Honey Singh/Honey Singh - ONE BOTTLE DOWN.mp3");

const Saanson = new Song("Saanson ko", "Arijit Singh", "385M", "4:49", "music/Arijit Singh/Arijit Singh - Saanson Ko.mp3");
const Chaleya = new Song("Chaleya", "Arijit Singh", "618M", "3:21", "music/Arijit Singh/Arijit Singh - Chaleya.mp3");
const Jhoome_Jo_Pathaan = new Song("Jhoome Jo Pathaan", "Arijit Singh", "1.1B", "3:28", "music/Arijit Singh/Arijit Singh- Jhoome Jo Pathaan.mp3");
const Kesariya = new Song("Kesariya", "Arijit Singh", "887M", "4:28", "music/Arijit Singh/Arijit Singh - Kesariya.mp3");
const Tum_Hi_Ho = new Song("Tum Hi Ho", "Arijit Singh", "997M", "4:21", "music/Arijit Singh/Arijit Singh - Tum Hi Ho.mp3");
const Phir_Mohabbat = new Song("Phir Mohabbat", "Arijit Singh", "997M", "4:21", "music/Arijit Singh/Arijit Singh - Phir Mohabbat.mp3");
const Pal = new Song("Pal", "Arijit Singh", "708M", "4:07", "music/Arijit Singh/Arijit Singh - Pal.mp3");

const Born_to_Shine = new Song("Born to Shine", "Diljeet Dosanjh", "320M", "3:33", "music/Diljeet Dosanjh/Diljeet Dosanjh - Born to Shine.mp3");
const Do_You_Know = new Song("Do You Know", "Diljeet Dosanjh", "450M", "3:33", "music/Diljeet Dosanjh/Diljeet Dosanjh - Do You Know.mp3");
const GOAT = new Song("G.O.A.T.", "Diljeet Dosanjh", "328M", "3:43", "music/Diljeet Dosanjh/Diljeet Dosanjh - G.O.A.T..mp3");
const Sauda_Khara_Khara = new Song("Sauda Khara Khara", "Diljeet Dosanjh", "632M", "3:31", "music/Diljeet Dosanjh/Diljeet Dosanjh - Sauda Khara Khara.mp3");

const I_Dont_Care = new Song("I Don't Care", "Ed Sheeran", "1.2B", "3:39", "music/Ed Sheeran/Ed Sheeran - I Don't Care.mp3");
const Perfect = new Song("Perfect", "Ed Sheeran", "5.7B", "4:23", "music/Ed Sheeran/Ed Sheeran - Perfect.mp3");
const Photograph = new Song("Photograph", "Ed Sheeran", "3.3B", "4:18", "music/Ed Sheeran/Ed Sheeran - Photograph.mp3");
const Shape_of_You = new Song("Shape of You", "Ed Sheeran", "8.7B", "3:53", "music/Ed Sheeran/Ed Sheeran - Shape of You.mp3");
const Thinking_out_Loud = new Song("Thinking out Loud", "Ed Sheeran", "4.5B", "4:41", "music/Ed Sheeran/Ed Sheeran - Thinking out Loud.mp3");

//Bollywood songs
const Chammak_Challo = new Song("Chammak Challo", "Akon", "765M", "3:47", "music/Bollywood/Akon - Chammak Challo.mp3");
const Tu_hai_ki_nahi = new Song("Tu hai ki nahi", "Ankit Tiwari", "229M", "5:33", "music/Bollywood/Ankit Tiwari - Tu hai ki nahi.mp3");
const Aaj_Ki_Raat = new Song("Aaj Ki Raat", "Sonu Nigam", "805M", "4:47", "music/Bollywood/Sonu Nigam - Aaj Ki Raat.mp3");
const Tauba = new Song("Tauba Tauba", "Karan Aujla", "399M", "3:41", "music/Bollywood/Karan Aujla - Tauba Tauba.mp3");

//Romance songs 
const Galliyan = new Song("Galliyan", "Ankit Tiwari", "610M", "5:40", "music/Romance/Ankit Tiwari - Galliyan.mp3");
const Dandelions = new Song("Dandelions", "Ruth B", "684M", "5:53", "music/Romance/Ruth B - Dandelions.mp3");

//Pop songs
const Something_Just_Like_This = new Song("Something Just Like This", "Chainsmokers", "3.3B", "4:08", "music/Pop/Chainsmokers - Something Just Like This.mp3");
const We_Dont_Talk_Anymore = new Song("We Don't Talk Anymore", "Charlie Puth", "3.8B", "3:38", "music/Pop/Charlie Puth - We Don't Talk Anymore.mp3");
const I_Aint_Worried = new Song("I Ain't Worried", "OneRepublic", "599M", "2:29", "music/Pop/OneRepublic - I Ain't Worried.mp3");
const Espresso = new Song("Espresso", "Sabrina Carpenter", "790M", "3:21", "music/Pop/Sabrina Carpenter - Espresso.mp3");
const Blinding_Lights = new Song("Blinding Lights", "Weekend", "3.1B", "3:22", "music/Pop/Weekend - Blinding Lights.mp3");
const Starboy = new Song("Starboy", "Weekend", "3.4B", "3:51", "music/Pop/Weeknd  - Starboy.mp3");
const The_Hills= new Song("The Hills", "Weekend", "2.5B", "4:02", "music/Pop/Weeknd - The Hills.mp3");

//All the playlist:-
const Shubh = new Array(We_Rollin, Baller, Elevated, Dior, King_Shit, No_Love, Still_Rollin);
const Arijit_Singh = new Array(Saanson, Pal, Phir_Mohabbat, Tum_Hi_Ho, Kesariya, Jhoome_Jo_Pathaan, Chaleya);
const Diljeet_Dosanjh = new Array(Do_You_Know, Born_to_Shine, GOAT, Sauda_Khara_Khara);
const Ed_Sheeran = new Array(Shape_of_You, Perfect, Photograph, I_Dont_Care, Thinking_out_Loud);
const Honey_Singh = new Array(Brown_Rang, Desi_Kalakaar, Dheere_Dheere, ONE_BOTTLE_DOWN, Millionaire, IsseyKehteHainHipHop);
const Punjabi = new Array(Baller, Desi_Kalakaar, Elevated, Brown_Rang, Do_You_Know, IsseyKehteHainHipHop, Dior, Still_Rollin);
const Pop = new Array(Starboy, We_Dont_Talk_Anymore, Something_Just_Like_This, Blinding_Lights, I_Aint_Worried, Do_You_Know, Millionaire, The_Hills, Espresso, Jhoome_Jo_Pathaan);
const Bollywood = new Array(Tauba, Dheere_Dheere, Aaj_Ki_Raat, Jhoome_Jo_Pathaan, Tum_Hi_Ho, Chammak_Challo, Chaleya, Tu_hai_ki_nahi, Kesariya, Saanson);
const Romance = new Array(Saanson, Tum_Hi_Ho, Perfect, Pal, Galliyan, Dandelions);

//Recording all songs in key value pairs:-
const all_songs = {
    'PUN' : Punjabi,
    'BOL' : Bollywood,
    'POP' : Pop,
    'DDJ' : Diljeet_Dosanjh,
    'AJS' : Arijit_Singh,
    'YHS' : Honey_Singh,
    'SHB' : Shubh,
    'EDS' : Ed_Sheeran,
    'ROM' : Romance
};

function go_back() {
    let back = document.getElementById("back_button");
    back.style.display = "none";

    //Removing every pre-existing data from div -> song-table
    const element = document.getElementById("song-table");
    const list = element.children;
    for(let i=0; i<list.length; i++){
        element.removeChild(list[i]);
    }

    let playlist = document.getElementById("song-table-container");
    playlist.style.display = "none";

    // Block all playlist containers
    let home = document.getElementsByClassName("Playlists");
    for (let i = 0; i < home.length; i++) {
        home[i].style.display = "block";
    }
}
function cross() {
    let back = document.getElementById("exit_button");
    back.style.display = "none";

    //Removing every pre-existing data from div -> song-table
    const element = document.getElementById("song-table");
    const list = element.children;
    for(let i=0; i<list.length; i++){
        element.removeChild(list[i]);
    }

    let playlist = document.getElementById("song-table-container");
    playlist.style.display = "none";

    // Block all playlist containers
    let home = document.getElementsByClassName("Playlists");
    for (let i = 0; i < home.length; i++) {
        home[i].style.display = "block";
    }
}

function show_preview(){
    let ele = document.getElementById("preview");
    ele.style.display = "flex";
    document.querySelector(".fa-backward-step").onclick = play_previous;
    document.querySelector(".fa-forward-step").onclick = play_next;
}

function show_punjabi() {
    show_preview();
    show_songs(Punjabi, "PUN", "Punjabi Songs Playlist", "img/playlist/punjab.jpeg");
}

function show_pop() {
    show_preview();
    show_songs(Pop, "POP", "Pop Songs Playlist", "img/playlist/pop.jpeg");
}

function show_bollywood() {
    show_preview();
    show_songs(Bollywood, "BOL", "Bollywood Songs Playlist", "img/playlist/bollywood.jpg");
}

function show_romance() {
    show_preview();
    show_songs(Romance, "ROM", "Romance Songs Playlist", "img/playlist/romance.webp");
}

function show_shubh() {
    show_preview();
    show_songs(Shubh, "SHB", "Shubh Best Hits", "img/playlist/shubh.jpg");
}

function show_arijit() {
    show_preview();
    show_songs(Arijit_Singh, "AJS", "Arijit Singh Best Hits", "img/playlist/arijit.jpg");
}

function show_diljeet() {
    show_preview();
    show_songs(Diljeet_Dosanjh, "DDJ", "Diljit Dosanjh Best Hits", "img/playlist/diljeet.jpg");
}

function show_ed() {
    show_preview();
    show_songs(Ed_Sheeran, "EDS", "Ed Sheeran Best Hits", "img/playlist/ed.jpg");
}

function show_honey() {
    show_preview();
    show_songs(Honey_Singh, "YHS", "Honey Singh Best Hits", "img/playlist/honey_singh.jpeg");
}

function show_songs(card, str, playlistName, imagePath) {
    let back = document.getElementById("back_button");
    back.style.display = "inline";

    let playlist = document.getElementById("song-table-container");
    playlist.style.display = "block";

    // Hide all playlist
    let home = document.getElementsByClassName("Playlists");
    for (let i = 0; i < home.length; i++) {
        home[i].style.display = "none";
    }

    // Update the preview section with the playlist image and title
    const preview = document.getElementById("preview");
    preview.innerHTML = ""; // Clear existing content

    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = `${playlistName} Playlist`;
    img.className = "preview-img";

    const title = document.createElement("h1");
    title.textContent = playlistName;
    title.className = "preview-img-title";

    preview.appendChild(img);
    preview.appendChild(title);

    // Clear the song table
    const songTable = document.getElementById("song-table");
    songTable.innerHTML = "";

    let song_count = 1; 
    for (let i = 0; i < card.length; i++) {
        const song = card[i];

        const node = document.createElement("div");
        node.className = "song";
        node.onclick = function() {
            play_song(this);
        };
        let div_id = String(str + song_count);
        node.id = div_id;

        const n1 = document.createElement("div");
        n1.className = "s-tag";
        const text1 = document.createTextNode(Number(song_count));
        n1.appendChild(text1);

        const n2 = document.createElement("div");
        n2.className = "s-title";
        const text2 = document.createTextNode(song.title);
        n2.appendChild(text2);

        const n3 = document.createElement("div");
        n3.className = "s-artist";
        const text3 = document.createTextNode(song.artist);
        n3.appendChild(text3);

        const n4 = document.createElement("div");
        n4.className = "s-views";
        const text4 = document.createTextNode(song.views);
        n4.appendChild(text4);

        const n5 = document.createElement("div");
        n5.className = "s-duration";
        const text5 = document.createTextNode(song.duration);
        n5.appendChild(text5);

        node.appendChild(n1);
        node.appendChild(n2);
        node.appendChild(n3);
        node.appendChild(n4);
        node.appendChild(n5);

        songTable.appendChild(node);
        song_count++;
    }
}

// Keeps track of the current playlist and song index.
let current_song = { playlistKey: "", index: -1 }; 
function play_song(div) {
    let string_id = div.id;
    let str = string_id.substr(0, 3);
    let num = Number(string_id.substr(3));
    let list = all_songs[str];
    list[num - 1].play();
    
    current_song.playlistKey = str;
    current_song.index = num - 1; 
}
function play_next() {
    let { playlistKey, index } = current_song;
    if (playlistKey === "" || index === -1) {
        console.error("No song is currently playing.");
        return;
    }

    let list = all_songs[playlistKey];
    if (index + 1 < list.length) {
        current_song.index = index + 1;
        list[current_song.index].play();
    } else {
        console.log("No next song available.");
    }
}
function play_previous() {
    let { playlistKey, index } = current_song;
    if (playlistKey === "" || index === -1) {
        console.error("No song is currently playing.");
        return;
    }

    let list = all_songs[playlistKey];
    if (index - 1 >= 0) {
        current_song.index = index - 1;
        list[current_song.index].play();
    } else {
        console.log("No previous song available.");
    }
}

function play_search_song(div) {
    const song = div.songData;
    if (song) {
        song.play();

        // Update current song to indicate it is playing from a search
        current_song.playlistKey = "search";
        current_song.index = -1; 
    } else {
        console.error("No song data found for this row.");
    }
}

document.getElementById("search-song").addEventListener("submit", function (e) {
    e.preventDefault();

    let back = document.getElementById("back_button");
    back.style.display = "none";
    let ele = document.getElementById("preview");
    ele.style.display = "none";

    const searchText = document.getElementById("search-song").search.value.toLowerCase().trim();
    if (!searchText) return;

    const songTableContainer = document.getElementById("song-table-container");
    songTableContainer.style.display = "block";

    const playlists = document.getElementsByClassName("Playlists");
    for (let i = 0; i < playlists.length; i++) {
        playlists[i].style.display = "none";
    }

    const songTable = document.getElementById("song-table");
    songTable.innerHTML = "";

    // Use a Set to keep track of unique songs
    const uniqueSongs = new Set();

    let songCount = 1;
    for (let key in all_songs) {
        const songs = all_songs[key];

        songs.forEach((song) => {
            const songIdentifier = `${song.title.toLowerCase()}-${song.artist.toLowerCase()}`;

            if (!uniqueSongs.has(songIdentifier)) {
                if (song.title.toLowerCase().includes(searchText) || song.artist.toLowerCase().includes(searchText)) {
                    uniqueSongs.add(songIdentifier);

                    const node = document.createElement("div");
                    node.className = "song";

                    node.songData = song;

                    const n1 = document.createElement("div");
                    n1.className = "s-tag";
                    n1.textContent = songCount;

                    const n2 = document.createElement("div");
                    n2.className = "s-title";
                    n2.textContent = song.title;

                    const n3 = document.createElement("div");
                    n3.className = "s-artist";
                    n3.textContent = song.artist;

                    const n4 = document.createElement("div");
                    n4.className = "s-views";
                    n4.textContent = song.views;

                    const n5 = document.createElement("div");
                    n5.className = "s-duration";
                    n5.textContent = song.duration;

                    node.appendChild(n1);
                    node.appendChild(n2);
                    node.appendChild(n3);
                    node.appendChild(n4);
                    node.appendChild(n5);

                    node.onclick = function () {
                        play_search_song(this);
                    };

                    songTable.appendChild(node);

                    songCount++;
                }
            }
        });
    }
    const crossButton = document.getElementById("exit_button");
    crossButton.style.display = "inline";

    if (songCount === 1) {
        const noMatchMessage = document.createElement("div");
        noMatchMessage.className = "no-match";
        noMatchMessage.textContent = "No matching songs found.";
        songTable.appendChild(noMatchMessage);
    }
});

//----------------Account-----------------
function Account(name, username, number, email, password) {
    this.name = name;
    this.username = username;
    this.number = number;
    this.email = email;
    this.password = password;
    this.playlist_arr = []; // Array to store playlists
    this.playlist_name = []; // Array to store playlist names

    this.add_playlist = function (playlist, name) {
        this.playlist_arr.push(playlist);
        this.playlist_name.push(name);
    };
}

const Users = new Array();
let current_user = null;
const aryan_dubey = new Account("Aryan Dubey", "aryan_dubey", 6266859638, "aryan@gmail.com", "aryan123");
const ansh_aeron = new Account("Ansh Aeron", "ansh_aeron", 9520639106, "ansh@gmail.com", "ansh123");

const aryan1 = new Array(Baller, Elevated, Dior);
const aryan2 = new Array(Blinding_Lights, Starboy, Galliyan, Tauba);
const ansh1 = new Array(Dior, Elevated, IsseyKehteHainHipHop);

aryan_dubey.add_playlist(aryan1, "Shubh Rocks");
aryan_dubey.add_playlist(aryan2, "My favorites");
ansh_aeron.add_playlist(ansh1, "Badass Songs");

Users.push(aryan_dubey);
Users.push(ansh_aeron);

//Login Button click function:-
document.getElementById("login-btn").addEventListener("click", function () {
    console.log("Login button clicked.");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log(`Email: ${email}, Password: ${password}`);

    // Find user by email and password
    const user = Users.find((u) => u.email === email && u.password === password);

    if (user) {
        console.log("User found:", user.name);
        current_user = user;
        loadUserPlaylists(user); 
        toggleLoginState(true);
        document.getElementById("loginModal").style.display = "none";
    } else {
        alert("Invalid email or password.");
    }
});

// Load playlists into the library
function loadUserPlaylists(user) {
    const songList = document.getElementById("songList").querySelector("ul");
    songList.innerHTML = ""; 

    document.querySelector(".fa-circle-plus").style.display = "inline";

    user.playlist_arr.forEach((playlist, index) => {
        const li = document.createElement("li");
        li.textContent = user.playlist_name[index]; 
        li.onclick = () => showPlaylistSongs(playlist, user.playlist_name[index]); // Pass playlist and name
        songList.appendChild(li);
    });
}

let currentPlaylist = null; 
let currentSongIndex = -1;  

function play_playlist_previous() {
    if (!currentPlaylist || currentSongIndex <= 0) {
        alert("No previous song available.");
        return;
    }
    currentSongIndex--; 
    const song = currentPlaylist[currentSongIndex];
    song.play();
    updatePlaybar(song); 
}

function play_playlist_next() {
    if (!currentPlaylist || currentSongIndex >= currentPlaylist.length - 1) {
        alert("No next song available.");
        return;
    }
    currentSongIndex++;
    const song = currentPlaylist[currentSongIndex];
    song.play();
    updatePlaybar(song); 
}

function showPlaylistSongs(playlist, playlistName) {
    
    currentPlaylist = playlist;
    currentSongIndex = -1; 

    document.querySelector(".fa-backward-step").onclick = play_playlist_previous;
    document.querySelector(".fa-forward-step").onclick = play_playlist_next;

    let back = document.getElementById("back_button");
    back.style.display = "inline";

    const playlistsContainer = document.getElementsByClassName("Playlists");
    for (let i = 0; i < playlistsContainer.length; i++) {
        playlistsContainer[i].style.display = "none";
    }

    // Show the song-table-container
    const songTableContainer = document.getElementById("song-table-container");
    songTableContainer.style.display = "block";

    // Show the playlist name in the preview
    const previewDiv = document.getElementById("preview");
    previewDiv.style.display = "block";
    previewDiv.innerHTML = `<h2>${playlistName}</h2>`; // Add playlist name

    // Clear the song table content
    const songTable = document.getElementById("song-table");
    songTable.innerHTML = "";

    // Populate the song table with the selected playlist's songs
    playlist.forEach((song, index) => {
        const row = document.createElement("div");
        row.className = "song";

        // Create song details for the row
        const n1 = document.createElement("div");
        n1.className = "s-tag";
        n1.textContent = index + 1;

        const n2 = document.createElement("div");
        n2.className = "s-title";
        n2.textContent = song.title;

        const n3 = document.createElement("div");
        n3.className = "s-artist";
        n3.textContent = song.artist;

        const n4 = document.createElement("div");
        n4.className = "s-views";
        n4.textContent = song.views;

        const n5 = document.createElement("div");
        n5.className = "s-duration";
        n5.textContent = song.duration;

        row.appendChild(n1);
        row.appendChild(n2);
        row.appendChild(n3);
        row.appendChild(n4);
        row.appendChild(n5);

        
        row.onclick = () => {
            currentSongIndex = index; 
            song.play(); 
            updatePlaybar(song);
        };

        songTable.appendChild(row);
    });
}

// Function to update the playbar with the current song's details
function updatePlaybar(song) {
    const songTitleSpan = document.getElementById("song-title");
    songTitleSpan.textContent = `${song.artist} - ${song.title}`; 
}

// Toggle login/logout state
function toggleLoginState(isLoggedIn) {
    const buttonsDiv = document.getElementById("buttons");

    if (isLoggedIn) {
        buttonsDiv.innerHTML = `<span id="greeting">Hello, ${current_user.name}</span>`;
        document.getElementById("greeting").onclick = showLogoutModal;
    } else {
        buttonsDiv.innerHTML = `
            <button class="signupbtn">Sign up</button>
            <button class="loginbtn">Log in</button>
        `;
    }
}

function showLogoutModal() {
    const modal = document.createElement("div");
    modal.className = "logout-modal"; 
    modal.innerHTML = `
        <div class="logout-content">
            <p>Are you sure you want to log out?</p>
            <button id="logout-yes">Yes</button>
            <button id="logout-no">No</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("logout-yes").onclick = () => {
        current_user = null; 
        toggleLoginState(false); 
        document.getElementById("songList").querySelector("ul").innerHTML = ""; 
        modal.remove(); 
        location.reload(); 
    };

    
    document.getElementById("logout-no").onclick = () => {
        modal.remove(); 
    };
}

// Function to add the current song to a selected playlist
function add_to_playlist() {
    const modal = document.getElementById("playlistModal");
    const dropdown = document.getElementById("existing-playlist-dropdown");
    const newPlaylistForm = document.getElementById("new-playlist-form");

    dropdown.style.display = "none";
    newPlaylistForm.style.display = "none";

    modal.style.display = "block";

    const existingPlaylists = document.getElementById("existing-playlists");
    existingPlaylists.innerHTML = ""; 

    if (current_user && current_user.playlist_name.length > 0) {
        current_user.playlist_name.forEach((name, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = name;
            existingPlaylists.appendChild(option);
        });
    } else {
        alert("No playlists found. Create a playlist first.");
    }
}

// Event listener for the "Add to Existing Playlist" button
document.getElementById("add-to-existing-playlist").onclick = function () {
    document.getElementById("existing-playlist-dropdown").style.display = "block";
    document.getElementById("new-playlist-form").style.display = "none";
};

// Event listener for the "Create New Playlist" button
document.getElementById("create-new-playlist").onclick = function () {
    document.getElementById("new-playlist-form").style.display = "block";
    document.getElementById("existing-playlist-dropdown").style.display = "none";
};

// Event listener for adding the song to a selected playlist
document.getElementById("add-to-selected-playlist").onclick = function () {
    const selectedPlaylistIndex = document.getElementById("existing-playlists").value;

    if (!currentPlaylist || currentSongIndex < 0 || currentSongIndex >= currentPlaylist.length) {
        alert("No song is currently selected to add.");
        return;
    }

    const song = currentPlaylist[currentSongIndex];

    if (selectedPlaylistIndex !== "") {
        current_user.playlist_arr[selectedPlaylistIndex].push(song);

        alert(`"${song.title}" has been added to "${current_user.playlist_name[selectedPlaylistIndex]}"`);
        closeModal();
    } else {
        alert("Please select a playlist.");
    }
};

// Event listener for creating a new playlist
document.getElementById("save-new-playlist").onclick = function () {
    const newPlaylistName = document.getElementById("new-playlist-name").value.trim();

    if (newPlaylistName === "") {
        alert("Playlist name cannot be empty!");
        return;
    }
    current_user.add_playlist([], newPlaylistName);

    const songList = document.getElementById("songList").querySelector("ul");
    const li = document.createElement("li");
    li.textContent = newPlaylistName;

    li.onclick = () => showPlaylistSongs([], newPlaylistName);
    songList.appendChild(li);

    alert(`"${newPlaylistName}" has been created.`);
    closeModal();
};
function select_song_to_add(div) {
    const playlistKey = div.id.substr(0, 3); 
    const songIndex = Number(div.id.substr(3)) - 1; 

    const playlist = all_songs[playlistKey];
    if (playlist && playlist[songIndex]) {
        currentPlaylist = playlist;
        currentSongIndex = songIndex;
        alert(`"${playlist[songIndex].title}" selected for adding to a playlist.`);
    } else {
        alert("Invalid song selection.");
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("playlistModal");
    modal.style.display = "none";
}

// for closing the modal
document.getElementById("close-modal").onclick = closeModal;

// attach click listener to the signup button
document.getElementById("signup-btn").addEventListener("click", function (event) {
    // event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("new-email").value.trim();
    const password = document.getElementById("new-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    console.log("Sign Up button clicked"); 
    console.log("Form data fetched:", { name, username, phone, email });
    console.log("Users array updated:", Users);

    if (!name || !username || !phone || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const existingUser = Users.find(
        (u) => u.email === email || u.username === username
    );

    if (existingUser) {
        alert("An account with this email or username already exists.");
        return;
    }

    const newUser = new Account(name, username, phone, email, password);
    Users.push(newUser);

    current_user = newUser;

    toggleLoginState(true);
    loadUserPlaylists(newUser);

    document.getElementById("signupModal").style.display = "none";

    alert(`Welcome, ${name}! Your account has been created.`);
});

function toggleLoginState(isLoggedIn) {
    const buttonsDiv = document.getElementById("buttons");

    if (isLoggedIn) {
        buttonsDiv.innerHTML = `<span id="greeting">Hello, ${current_user.name}</span>`;
        document.getElementById("greeting").onclick = showLogoutModal; 
    } else {
        buttonsDiv.innerHTML = `
            <button class="signupbtn">Sign up</button>
            <button class="loginbtn">Log in</button>
        `;
    }
}

function showLogoutModal() {
    const modal = document.createElement("div");
    modal.className = "logout-modal";
    modal.innerHTML = `
        <div class="logout-content">
            <p>Are you sure you want to log out?</p>
            <button id="logout-yes">Yes</button>
            <button id="logout-no">No</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Handle 'Yes' click
    document.getElementById("logout-yes").onclick = () => {
        current_user = null; 
        toggleLoginState(false); 
        document.getElementById("songList").querySelector("ul").innerHTML = ""; 
        modal.remove();
        location.reload(); 
    };

    document.getElementById("logout-no").onclick = () => {
        modal.remove(); 
    };
}
