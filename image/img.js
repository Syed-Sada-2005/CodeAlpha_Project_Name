document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const imgSrc = item.querySelector('img').src;
        
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('lightbox')) {
        document.getElementById('lightbox').style.display = 'none';
    }
});