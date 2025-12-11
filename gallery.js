document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

    function showLightbox(index) {
        if (index < 0 || index >= images.length) {
            return;
        }
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Preventing of background scrolling
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showNext() {
        showLightbox((currentIndex + 1) % images.length);
    }

    function showPrev() {
        showLightbox((currentIndex - 1 + images.length) % images.length);
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', hideLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    ///hamburger

const end = document.querySelector(".close");
const nav = document.querySelector('.nav');
const burg = document.querySelector('.hamburger');

burg.onclick =()=>{
    nav.style.display = 'block';
    end.style.display = 'block';
    burg.style.display = 'none';

}

end.onclick =()=>{
    nav.style.display = 'none';
    end.style.display = 'none';
    burg.style.display = 'flex';
}

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') hideLightbox();
        }
    });
});
