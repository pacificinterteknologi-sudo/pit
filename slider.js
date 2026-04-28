// Slider functionality dengan peningkatan untuk halaman landing
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.getElementById('slides');
  if (!slides) return; // Pastikan elemen ada sebelum melanjutkan
  
  const total = slides.children.length;
  let idx = 0;
  let auto = true;
  let timer = null;
  let isTransitioning = false;
  
  // Render current slide dengan efek fade
  const render = () => {
    if (isTransitioning) return;
    
    isTransitioning = true;
    slides.style.transform = `translateX(-${idx * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    
    // Reset animasi konten
    const currentSlide = slides.children[idx];
    currentSlide.style.animation = 'none';
    setTimeout(() => {
      currentSlide.style.animation = 'fadeInContent 0.8s ease-out forwards';
    }, 50);
    
    // Reset flag setelah transisi selesai
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  };
  
  // Create dots
  const dotsWrap = document.getElementById('dots');
  if (dotsWrap) {
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'dot';
      d.setAttribute('aria-label', `Slide ${i + 1}`);
      d.addEventListener('click', () => {
        if (!isTransitioning) {
          idx = i;
          render();
          resetTimer();
        }
      });
      dotsWrap.appendChild(d);
    }
  }
  
  // Navigation buttons dengan efek halus
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (!isTransitioning) {
        idx = (idx - 1 + total) % total;
        render();
        resetTimer();
      }
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (!isTransitioning) {
        idx = (idx + 1) % total;
        render();
        resetTimer();
      }
    });
  }
  
  // Auto-play functionality dengan interval lebih lama
  const resetTimer = () => {
    if (timer) clearInterval(timer);
    if (auto) {
      timer = setInterval(() => {
        if (!isTransitioning) {
          idx = (idx + 1) % total;
          render();
        }
      }, 6000); // Interval lebih lama untuk pengalaman yang lebih santai
    }
  };
  
  // Pause/Play button
  const pauseButton = document.getElementById('pause');
  if (pauseButton) {
    pauseButton.addEventListener('click', () => {
      auto = !auto;
      pauseButton.textContent = auto ? 'Pause' : 'Play';
      resetTimer();
    });
  }
  
  // Touch support untuk mobile dengan threshold lebih tinggi
  let startX = 0;
  slides.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  
  slides.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 70) { // Threshold lebih tinggi untuk menghindari swipe tidak sengaja
      if (!isTransitioning) {
        if (dx < 0) {
          idx = (idx + 1) % total;
        } else {
          idx = (idx - 1 + total) % total;
        }
        render();
        resetTimer();
      }
    }
  });
  
  // Form submission
  const rsvpForm = document.getElementById('rsvp');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      const successMsg = document.getElementById('successMessage');
      if (successMsg) {
        successMsg.classList.add('show');
        
        // Reset form
        this.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 3000);
        
        // Move to first slide
        idx = 0;
        render();
      }
    });
  }
  
  // Initialize
  render();
  resetTimer();
  
  // Tambahkan animasi CSS untuk fadeInContent jika belum ada
  if (!document.querySelector('#fadeInContentStyle')) {
    const style = document.createElement('style');
    style.id = 'fadeInContentStyle';
    style.textContent = `
      @keyframes fadeInContent {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
});