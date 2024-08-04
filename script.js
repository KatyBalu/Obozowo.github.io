document.querySelectorAll('nav a').forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        document.querySelectorAll('.song-detail').forEach(songDetail => {
            songDetail.style.display = 'none';
        });
        const targetTab = this.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
    });
});

function showSong(songId) {
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    document.querySelectorAll('.song-detail').forEach(songDetail => {
        songDetail.style.display = 'none';
    });
    document.getElementById(songId).style.display = 'block';
}

function changeKey(steps) {
    // Implement function to change the key of the song
}
