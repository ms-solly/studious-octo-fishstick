function displayHardcodedWallpapers() {
    const gallery = document.getElementById('gallery');
    const wallpapers = [
        "https://i.pinimg.com/originals/5e/46/22/5e46227086e7568e51f452957eefb87b.jpg",
        "https://i.pinimg.com/originals/9d/0c/87/9d0c875ea9266504b8acb8083a235fae.jpg",
        "https://i.pinimg.com/originals/27/31/b3/2731b3e89a89ff924ea02f84252f9f5f.jpg",
        "https://i.pinimg.com/originals/a4/cf/36/a4cf36bb885a4f4f515849b4a40684d0.jpg",
        "https://i.pinimg.com/originals/91/c0/18/91c018a1ba67f1db96e3bc54418d5e09.jpg",
        "https://i.pinimg.com/originals/a8/8c/30/a88c3071eb9e2c31c14b9f7f38b21c87.jpg",
        "https://i.pinimg.com/originals/23/95/d8/2395d85597a0c9e74205b2033c09e678.jpg",
        "https://i.pinimg.com/originals/ef/ef/ba/efefba19c59e82e773af706daeed1a0d.jpg",
        "https://i.pinimg.com/originals/8c/39/8e/8c398e25a7a812fcf961fd6d2620d7d7.jpg",
        "https://i.pinimg.com/originals/d3/f1/28/d3f128f46c55c491e627881888682a43.jpg",
        "https://i.pinimg.com/originals/4c/d3/0d/4cd30db6e1be854be224208a22368f91.jpg",
        "https://i.pinimg.com/originals/f4/28/d5/f428d5af9d45b9c4e458be59b5fb7d89.jpg"
    ];

    gallery.innerHTML = '';
    wallpapers.forEach(url => {
        gallery.innerHTML += `
            <div class="wallpaper-card">
                <img src="${url}" alt="Cute Wallpaper">
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', displayHardcodedWallpapers);
