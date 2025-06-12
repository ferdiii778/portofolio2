    // Efek ripple hanya untuk tombol atau elemen yang bukan <a>
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('click', function(e) {
        // Jangan preventDefault kalau ini <a> (biarkan dia navigasi)
        if (this.tagName.toLowerCase() !== 'a') {
          e.preventDefault();
        }
  
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
  
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
  
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  
    // Tambahkan CSS animasi ripple ke head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
  
      .cta-button {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  
    // Animasi muncul saat scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    // Observe semua kartu fitur
    document.querySelectorAll('.card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });