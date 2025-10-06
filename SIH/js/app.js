// Matrix digital rain effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
let fontSize = 16, columns = Math.floor(w / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 10, 20, 0.1)";
  ctx.fillRect(0, 0, w, h);
  
  for (let i = 0; i < drops.length; i++) {
    // Create depth effect with varying sizes and speeds
    const depth = Math.random();
    const size = Math.floor(fontSize * (0.8 + depth * 0.4));
    const speed = 1 + depth;
    
    // Vary the color based on depth
    const alpha = 0.3 + depth * 0.7;
    ctx.fillStyle = `rgba(0, 255, 151, ${alpha})`;
    ctx.font = `${size}px monospace`;
    
    // Add some variation to the characters
    const chars = [
      String.fromCharCode(0x30A0 + Math.random() * 96),
      String.fromCharCode(0x0030 + Math.random() * 10),
      String.fromCharCode(0x0041 + Math.random() * 26)
    ];
    const text = chars[Math.floor(Math.random() * chars.length)];
    
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Random chance to reset drop with depth-based probability
    if (Math.random() > 0.975 - depth * 0.02) drops[i] = 0;
    drops[i] += speed;
    
    if (drops[i] * fontSize > h) drops[i] = 0;
    
    // Occasional bright highlight
    if (Math.random() > 0.99) {
      ctx.fillStyle = "#fff";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    }
  }
}
let matrixInterval = setInterval(drawMatrix, 50);

window.addEventListener('resize', function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  columns = Math.floor(w/fontSize);
  drops = Array(columns).fill(1);
});

// Start screen and loader logic
const startScreen = document.getElementById('startScreen');
const mainSite = document.getElementById('mainSite');
const startButton = document.getElementById('startButton');
const scrollContainer = document.querySelector('.main-scroll-container');
const orbLoader = document.getElementById('orb-loader');

// Add not-loaded class initially
mainSite.classList.add('not-loaded');

startButton.onclick = function() {
  this.disabled = true;
  const progress = document.querySelector('.loading-progress');
  
  // Start progress animation
  setTimeout(() => {
    progress.classList.add('complete');
  }, 100);

  // After progress completes, start the transition
  setTimeout(() => {
    startScreen.classList.add('fading-out');
    
    // Start orb animation
    setTimeout(() => {
      orbLoader.classList.remove('hidden');
      setTimeout(() => {
        orbLoader.classList.add('active');
      }, 50);
    }, 500);
  }, 1000); // Wait for progress animation

  // After the orb animation is complete, show the main site
  setTimeout(() => {
    mainSite.classList.remove('not-loaded');
    scrollContainer.style.overflowY = 'auto'; // Re-enable scrolling
    
    // Add fade-in class to sections
    sections.forEach(section => section.classList.add('fade-in'));
    
    // Initialize GSAP animations
    animateOnReveal();

    // Clean up start screen and orb
    setTimeout(() => {
        startScreen.style.display = 'none';
        orbLoader.style.display = 'none';
        
        // Trigger initial section visibility check
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('visible');
            }
        });
    }, 1000) // wait for site to fade in
  }, 2000); // 500ms fade + 1500ms orb grow
};

// Navigation highlighting and section animations with Intersection Observer
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Handle nav highlighting
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === id);
      });
    }
    
    // Handle section animations
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, {
  threshold: 0.2,
  rootMargin: '-100px 0px -100px 0px'
});

sections.forEach(section => sectionObserver.observe(section));

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const topbar = document.querySelector('.topbar');

let topbarHeight = 70; // Fallback
document.addEventListener('DOMContentLoaded', () => {
    topbarHeight = topbar.offsetHeight;
});

const observerOptions = {
  root: scrollContainer,
  rootMargin: `-${topbarHeight}px 0px 0px 0px`,
  threshold: 0.4, // Adjusted for better accuracy with top-aligned content
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            navLinks.forEach(link => link.classList.remove('active'));
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Create particle effect for sections
function createParticleEffect(section) {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  section.insertBefore(canvas, section.firstChild);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationFrame;
  
  function resize() {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create particles
  for(let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if(p.x < 0) p.x = canvas.width;
      if(p.x > canvas.width) p.x = 0;
      if(p.y < 0) p.y = canvas.height;
      if(p.y > canvas.height) p.y = 0;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 151, ${p.opacity})`;
      ctx.fill();
    });
    
    animationFrame = requestAnimationFrame(animate);
  }

  // Start/stop animation based on visibility
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animationFrame);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(section);
}

// GSAP animations
function animateOnReveal() {
  // Add particle effects to sections
  document.querySelectorAll('.section').forEach(section => {
    createParticleEffect(section);
  });
  // Animate headings and text blocks individually
  gsap.utils.toArray('.reveal-heading, .reveal-text').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: { 
          trigger: el, 
          scroller: scrollContainer,
          start: 'top 90%', 
          toggleActions: 'play none none reverse' 
      }
    });
  });

  // Animate cards within each section with a stagger
  gsap.utils.toArray('.about-grid, .cards-3-col, .tech-grid, .teamGrid').forEach(grid => {
    const cards = grid.querySelectorAll('.reveal-card');
    if (cards.length > 0) {
      // Entrance animation
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: grid,
          scroller: scrollContainer,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Add 3D tilt effect
      cards.forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          
          const tiltX = (y - 0.5) * 20;
          const tiltY = (x - 0.5) * -20;
          
          gsap.to(card, {
            duration: 0.5,
            rotationX: tiltX,
            rotationY: tiltY,
            ease: 'power2.out',
            transformPerspective: 1000,
            transformOrigin: 'center'
          });
          
          // Add highlight effect
          const glare = `linear-gradient(${Math.atan2(y - 0.5, x - 0.5) * 180 / Math.PI + 90}deg, 
                        rgba(0, 255, 151, ${0.1 + Math.hypot(x - 0.5, y - 0.5) * 0.1}) 0%, 
                        transparent 80%)`;
          card.style.backgroundImage = glare;
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            duration: 0.5,
            rotationX: 0,
            rotationY: 0,
            ease: 'power2.out'
          });
          card.style.backgroundImage = 'none';
        });
      });
    }
  });
}


// Parallax effect on Hero section
const heroSection = document.querySelector('#hero');
heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

    gsap.to('.parallax-item', {
        x: -x * 20,
        y: -y * 10,
        stagger: 0.05,
        ease: 'power2.out'
    });
});

