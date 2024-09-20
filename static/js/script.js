async function fetchWallpapers(query) {
    const response = await fetch(`/api/wallpapers?query=${query}`);
    const data = await response.json();
    displayWallpapers(data);
}

function displayWallpapers(wallpapers) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    wallpapers.forEach(wallpaper => {
        gallery.innerHTML += `
            <div class="wallpaper-card">
                <img src="${wallpaper.image_url}" alt="${wallpaper.description}">
            </div>`;
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) fetchWallpapers(query);
});
