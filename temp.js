// Function to add the current song to a selected playlist
function add_to_playlist() {
    const modal = document.getElementById("playlistModal");
    const dropdown = document.getElementById("existing-playlist-dropdown");
    const newPlaylistForm = document.getElementById("new-playlist-form");

    // Reset the modal visibility
    dropdown.style.display = "none";
    newPlaylistForm.style.display = "none";

    // Show the modal
    modal.style.display = "block";

    // Populate the dropdown with existing playlists
    const existingPlaylists = document.getElementById("existing-playlists");
    existingPlaylists.innerHTML = ""; // Clear previous options

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
        // Add song to the selected playlist
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

    // Create and add the new playlist
    current_user.add_playlist([], newPlaylistName);

    // Update the playlist display in the UI
    const songList = document.getElementById("songList").querySelector("ul");
    const li = document.createElement("li");
    li.textContent = newPlaylistName;

    // Handle displaying songs for this new playlist
    li.onclick = () => showPlaylistSongs([], newPlaylistName);
    songList.appendChild(li);

    alert(`"${newPlaylistName}" has been created.`);
    closeModal();
};

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("playlistModal");
    modal.style.display = "none";
}

// Event listener for closing the modal
document.getElementById("close-modal").onclick = closeModal;

// New function to select a song and prepare for adding it to a playlist
function select_song_to_add(div) {
    const playlistKey = div.id.substr(0, 3); // Extract key
    const songIndex = Number(div.id.substr(3)) - 1; // Extract index

    const playlist = all_songs[playlistKey];
    if (playlist && playlist[songIndex]) {
        currentPlaylist = playlist;
        currentSongIndex = songIndex;
        alert(`"${playlist[songIndex].title}" selected for adding to a playlist.`);
    } else {
        alert("Invalid song selection.");
    }
}