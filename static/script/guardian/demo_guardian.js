    // Demo data - in real app this would come from your Flask template
    const demoData = [
      { 
        id: 1, 
        title: "Login", 
        description: "Masuk ke akun pengguna melalui halaman login.",
        image: "demo1.jpg"
      },
      { 
        id: 2, 
        title: "Registrasi", 
        description: "Daftarkan akun baru untuk mulai menggunakan aplikasi.",
        image: "demo2.jpg"
      },
      { 
        id: 3, 
        title: "Dashboard Utama", 
        description: "Pantau seluruh sistem keamanan dalam satu tampilan terpusat.",
        image: "demo3.jpg"
      },
      { 
        id: 4, 
        title: "Navigasi Pintas", 
        description: "Akses cepat ke fitur utama tanpa kebingungan.",
        image: "demo4.jpg"
      },
      { 
        id: 5, 
        title: "Aksi Cepat", 
        description: "Fitur ringkas untuk mempercepat akses fungsi penting.",
        image: "demo5.jpg"
      },
      { 
        id: 6, 
        title: "Profil Pengguna", 
        description: "Lihat informasi dan foto profil pengguna.",
        image: "demo6.jpg"
      },
      { 
        id: 7, 
        title: "Daftar Wajah", 
        description: "Kelola dan pantau wajah yang terdaftar dalam sistem.",
        image: "demo7.jpg"
      },
      { 
        id: 8, 
        title: "Edit Profil", 
        description: "Ubah informasi dan foto profil pengguna.",
        image: "demo8.jpg"
      },
      { 
        id: 9, 
        title: "Tambah Kamera CCTV", 
        description: "Tambahkan perangkat CCTV baru ke sistem.",
        image: "demo9.jpg"
      },
      { 
        id: 10, 
        title: "Berita Keamanan", 
        description: "Pantau berita terkini terkait keamanan di sekitar rumah.",
        image: "demo10.jpg"
      }
    ];

    // Load gallery items
    function loadGallery() {
      const gallery = document.getElementById('gallery');
    
      demoData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${0.1 * index}s`;
        galleryItem.onclick = () => openModal(item.image, item.title);
    
        galleryItem.innerHTML = `
          <img src="/static/image/guardiansmarthome/${item.image}" 
               alt="${item.title}" 
               loading="lazy">
          <div class="gallery-overlay">
            <div class="gallery-title">${item.title}</div>
            <div class="gallery-description">${item.description}</div>
          </div>
        `;
    
        gallery.appendChild(galleryItem);
      });
    }
    

    // Modal functions
    function openModal(imageSrc, title) {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImg.src = `/static/image/guardiansmarthome/${imageSrc}`;
      modalImg.alt = title;
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target == modal) {
        closeModal();
      }
    }

    // Back button function
    function goBack() {
      // In your Flask app, this should be: window.location.href = "{{ url_for('index') }}";
      window.history.back();
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });

    // Initialize gallery on page load
    document.addEventListener('DOMContentLoaded', loadGallery);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';