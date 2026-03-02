// ===== PARTIKEL BULAT KECIL UNTUK BERANDA (PASTI BERFUNGSI) =====

// Fungsi untuk membuat partikel
function createHeroParticles() {
    console.log('Mencoba membuat partikel...');
    
    // Cari hero section
    const hero = document.querySelector('.hero');
    if (!hero) {
        console.log('Hero section tidak ditemukan!');
        return;
    }
    
    console.log('Hero section ditemukan:', hero);
    
    // Hapus partikel dan overlay lama jika ada
    const oldParticles = document.getElementById('hero-particles');
    if (oldParticles) oldParticles.remove();
    
    const oldOverlay = document.querySelector('.hero-dark-overlay');
    if (oldOverlay) oldOverlay.remove();
    
    // Buat overlay gelap
    const overlay = document.createElement('div');
    overlay.className = 'hero-dark-overlay';
    hero.appendChild(overlay);
    
    // Buat container partikel
    const container = document.createElement('div');
    container.id = 'hero-particles';
    hero.appendChild(container);
    
    // Jumlah partikel
    const particleCount = 40;
    
    // Variasi animasi
    const animations = ['floatParticle', 'spinParticle', 'blinkParticle'];
    
    // Buat partikel satu per satu
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        // Ukuran acak (2px - 15px)
        const size = Math.floor(Math.random() * 14) + 2;
        
        // Posisi acak
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Warna acak (variasi putih)
        const colors = [
            'rgba(255, 255, 255, 0.9)',
            'rgba(255, 240, 200, 0.9)',
            'rgba(200, 240, 255, 0.9)',
            'rgba(240, 255, 200, 0.9)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Animasi acak
        const anim = animations[Math.floor(Math.random() * animations.length)];
        
        // Durasi acak (5s - 15s)
        const duration = (Math.random() * 10 + 8).toFixed(1);
        
        // Delay acak
        const delay = (Math.random() * 5).toFixed(1);
        
        // Terapkan style
        particle.style.cssText = `
            width: ${size}px !important;
            height: ${size}px !important;
            left: ${left}% !important;
            top: ${top}% !important;
            background-color: ${color} !important;
            animation: ${anim} ${duration}s ease-in-out ${delay}s infinite !important;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5) !important;
        `;
        
        container.appendChild(particle);
    }
    
    console.log('Partikel berhasil dibuat! Jumlah:', particleCount);
}

// Jalankan saat halaman selesai dimuat
window.onload = function() {
    console.log('Window loaded, membuat partikel...');
    createHeroParticles();
};

// Jalankan juga saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, menyiapkan partikel...');
    // Beri sedikit jeda
    setTimeout(createHeroParticles, 500);
});

// Jalankan ulang saat ukuran window berubah
window.addEventListener('resize', function() {
    console.log('Window resize, membuat ulang partikel...');
    createHeroParticles();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Tambahkan ini di awal script untuk debug
console.log('Script partikel dimuat');
console.log('Hero element:', document.querySelector('.hero'));

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typed.js effect
const typed = new Typed('.typing', {
    strings: ['Teknik Komputer & Jaringan', 'Web Developer', 'IT Support', 'Network Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Here you would typically send the data to a server
        alert('Terima kasih! Pesan Anda telah terkirim.');
        contactForm.reset();
    } else {
        alert('Mohon lengkapi semua field!');
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.2,
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

// Observe elements for animation
document.querySelectorAll('.skill-item, .project-card, .certificate-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('load', () => {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// Counter for statistics (if you add stats section)
// You can add this later if needed

// Dark mode toggle (optional)
// You can add dark mode functionality if desired

// Lazy loading images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
} else {
    // Fallback for browsers that don't support lazy loading
    // You can use a library like lazysizes
}

// Download CV functionality
document.querySelector('.btn-secondary').addEventListener('click', (e) => {
    e.preventDefault();
    // In a real implementation, you would link to an actual PDF file
    alert('CV akan di-download. Pastikan file CV sudah tersedia di server.');
});

// Tooltip for social links (optional)
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.setAttribute('data-tooltip', link.getAttribute('href').slice(1));
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-transition-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-transition-stopper');
    }, 400);
});

   // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    // Particle effect untuk hero
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 8 + 3;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 8 + 4;
            const delay = Math.random() * 3;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                top: ${posY}%;
                background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                pointer-events: none;
                animation: particleAnimation ${duration}s linear ${delay}s infinite;
                z-index: 0;
            `;
            
            hero.appendChild(particle);
        }
    }
    
    createParticles();

    // ===== ANIMASI TAMBAHAN =====

// Animasi halus saat klik pada semua link
document.querySelectorAll('a, .btn, .project-link, .social-links a').forEach(element => {
    element.addEventListener('click', function(e) {
        // Tambahkan class clicked
        this.classList.add('clicked');
        
        // Hapus class setelah animasi selesai
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

// Animasi fade in saat scroll dengan Intersection Observer
const fadeElements = document.querySelectorAll(
    '.section-header, .about-content, .skills-content, .project-card, ' +
    '.certificate-card, .timeline-item, .contact-content, .info-item, ' +
    '.skill-item, .soft-skill, .hero-text, .hero-image'
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan class visible
            entry.target.classList.add('visible');
            
            // Efek khusus untuk hero section
            if (entry.target.classList.contains('hero-text')) {
                entry.target.style.animation = 'fadeInLeft 1s ease forwards';
            } else if (entry.target.classList.contains('hero-image')) {
                entry.target.style.animation = 'fadeInRight 1s ease forwards 0.3s';
            }
            
            // Unobserve setelah animasi
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Beri class fade-in-section pada setiap elemen
fadeElements.forEach(el => {
    if (el) {
        // Tentukan class animasi berdasarkan posisi
        if (el.classList.contains('hero-text')) {
            el.classList.add('fade-in-left');
        } else if (el.classList.contains('hero-image')) {
            el.classList.add('fade-in-right');
        } else if (el.classList.contains('project-card') || el.classList.contains('certificate-card')) {
            el.classList.add('fade-in-scale');
        } else if (el.classList.contains('skill-item') || el.classList.contains('soft-skill')) {
            el.classList.add('fade-in-left');
        } else if (el.classList.contains('timeline-item')) {
            if (el.classList.contains('timeline-item:nth-child(even)')) {
                el.classList.add('fade-in-right');
            } else {
                el.classList.add('fade-in-left');
            }
        } else {
            el.classList.add('fade-in-section');
        }
        
        fadeObserver.observe(el);
    }
});

// Background bergerak untuk setiap section

// 1. Floating particles untuk About section
function createFloatingParticles() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particle';
    aboutSection.appendChild(particleContainer);
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 50 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            background: rgba(37, 99, 235, ${Math.random() * 0.05});
            animation: floatAround ${duration}s linear ${delay}s infinite;
        `;
        
        particleContainer.appendChild(particle);
    }
}

// 2. Grid background untuk Projects section
function createGridBackground() {
    const projectsSection = document.querySelector('.projects');
    if (!projectsSection) return;
    
    const gridBg = document.createElement('div');
    gridBg.className = 'grid-bg';
    projectsSection.appendChild(gridBg);
}

// 3. Rotating circle untuk Certificates section
function createRotatingCircle() {
    const certificatesSection = document.querySelector('.certificates');
    if (!certificatesSection) return;
    
    const circle = document.createElement('div');
    circle.className = 'rotating-circle';
    certificatesSection.appendChild(circle);
}

// 4. Wave effect untuk Contact section
function createWaveEffect() {
    const contactSection = document.querySelector('.contact');
    if (!contactSection) return;
    
    const wave = document.createElement('div');
    wave.className = 'wave-bg';
    contactSection.appendChild(wave);
}

// Panggil semua fungsi background bergerak
document.addEventListener('DOMContentLoaded', function() {
    createFloatingParticles();
    createGridBackground();
    createRotatingCircle();
    createWaveEffect();
    
    // Parallax effect saat scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Hero section parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
        }
        
        // About section parallax
        const aboutImage = document.querySelector('.about-image');
        if (aboutImage) {
            aboutImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });
});

// Stagger animation untuk grid items
function applyStaggerAnimation() {
    // Projects grid
    document.querySelectorAll('.projects-grid .project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Certificates grid
    document.querySelectorAll('.certificates-slider .certificate-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Skills grid
    document.querySelectorAll('.skill-item, .soft-skill').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });
}

applyStaggerAnimation();

// Efek hover dengan ripple untuk semua card
document.querySelectorAll('.project-card, .certificate-card, .soft-skill').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left - 50 + 'px';
        ripple.style.top = e.clientY - rect.top - 50 + 'px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Tambahkan keyframes untuk ripple di CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(10);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efek loading untuk gambar
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
    
    if (!img.complete) {
        img.classList.add('loading');
    }
});

// Smooth scroll dengan easing yang lebih halus
function smoothScrollWithEasing(target, duration = 1000) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function: easeInOutCubic
        const ease = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, start + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Ganti smooth scroll default dengan custom easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            smoothScrollWithEasing(targetPosition, 1000);
        }
    });
});

// Animasi progress bar yang lebih smooth
function animateProgressBarsSmooth() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        let currentWidth = 0;
        
        const interval = setInterval(() => {
            if (currentWidth >= parseInt(targetWidth)) {
                clearInterval(interval);
            } else {
                currentWidth += 1;
                bar.style.width = currentWidth + '%';
            }
        }, 10);
    });
}

// Trigger animasi progress bar saat section skills muncul
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateProgressBarsSmooth, 500);
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===== ANIMASI BACKGROUND BERANDA YANG SUDAH DIPERBAIKI =====

// Fungsi untuk membuat partikel
function createHeroParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Hapus partikel lama jika ada
    const oldParticles = hero.querySelector('.hero-particles');
    if (oldParticles) {
        oldParticles.remove();
    }
    
    // Buat container partikel
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'hero-particles';
    
    // Buat 20 partikel
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random ukuran (5-25px)
        const size = Math.floor(Math.random() * 20) + 5;
        
        // Random posisi
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        
        // Random delay
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2});
            animation: float ${Math.random() * 4 + 4}s ease-in-out ${delay}s infinite;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// Fungsi untuk membuat lingkaran dekoratif
function createHeroCircle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Cek apakah lingkaran sudah ada
    if (hero.querySelector('.hero-circle')) return;
    
    const circle = document.createElement('div');
    circle.className = 'hero-circle';
    hero.appendChild(circle);
}

// Efek parallax sederhana saat mouse bergerak
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const particles = hero.querySelector('.hero-particles');
        if (particles) {
            particles.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        const circle = hero.querySelector('.hero-circle');
        if (circle) {
            circle.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) rotate(${x}deg)`;
        }
    });
    
    // Reset posisi saat mouse keluar
    hero.addEventListener('mouseleave', () => {
        const particles = hero.querySelector('.hero-particles');
        const circle = hero.querySelector('.hero-circle');
        
        if (particles) {
            particles.style.transform = 'translate(0, 0)';
        }
        
        if (circle) {
            circle.style.transform = 'translate(0, 0) rotate(0deg)';
        }
    });
}

// Fungsi untuk memastikan background gradient berfungsi
function ensureHeroGradient() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Pastikan background gradient teraplikasi
    hero.style.background = 'linear-gradient(135deg, #4158D0, #C850C0, #FFCC70)';
    hero.style.backgroundSize = '300% 300%';
    hero.style.animation = 'gradientBG 10s ease infinite';
    
    // Pastikan overlay gelap ada
    if (!hero.querySelector('.hero-overlay')) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 1;
            pointer-events: none;
        `;
        hero.appendChild(overlay);
    }
}

// Jalankan semua fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Beri sedikit jeda agar DOM benar-benar siap
    setTimeout(() => {
        ensureHeroGradient();
        createHeroCircle();
        createHeroParticles();
        initHeroParallax();
        console.log('Background beranda siap!');
    }, 100);
});

// Jalankan ulang saat window di-resize
window.addEventListener('resize', function() {
    // Recreate particles dengan ukuran yang sesuai
    createHeroParticles();
});

// ===== PARTIKEL BULAT KECIL UNTUK BERANDA =====

// Fungsi untuk membuat partikel
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Hapus container lama jika ada
    const oldContainer = hero.querySelector('.particles-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    
    // Buat container baru
    const container = document.createElement('div');
    container.className = 'particles-container';
    
    // Tentukan jumlah partikel (30 partikel)
    const particleCount = 30;
    
    // Variasi animasi
    const animations = ['particleFloat', 'particleRotate', 'particlePulse'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Ukuran acak (3px - 12px)
        const size = Math.floor(Math.random() * 10) + 3;
        
        // Posisi acak
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        
        // Durasi animasi acak (5s - 15s)
        const duration = (Math.random() * 10 + 8).toFixed(1);
        
        // Delay acak
        const delay = (Math.random() * 5).toFixed(1);
        
        // Pilih animasi acak
        const animation = animations[Math.floor(Math.random() * animations.length)];
        
        // Warna acak (putih dengan variasi sedikit warna)
        const colors = [
            'rgba(255, 255, 255, 0.7)',
            'rgba(200, 230, 255, 0.7)',
            'rgba(255, 230, 200, 0.7)',
            'rgba(230, 255, 200, 0.7)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Terapkan style
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            background: ${color};
            animation: ${animation} ${duration}s ease-in-out ${delay}s infinite;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.3);
        `;
        
        container.appendChild(particle);
    }
    
    hero.appendChild(container);
    
    console.log('Partikel berhasil dibuat!');
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Beri sedikit jeda agar DOM benar-benar siap
    setTimeout(function() {
        createParticles();
    }, 200);
});

// Jalankan ulang saat ukuran window berubah (untuk responsif)
window.addEventListener('resize', function() {
    createParticles();
});

