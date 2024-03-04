baguetteBox.run('.gallery');
//const search = new Filter('search', 'data-caption');

const search = document.getElementById('search');

//Event Listener for Search
search.addEventListener('keyup', (e) => {
    let currentValue= e.target.value.toLowerCase();
    
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    
    galleryPhotos.forEach(photo => {
        const caption = photo.getAttribute('data-caption');
        
        if (caption.toLowerCase().includes(currentValue)) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
});






