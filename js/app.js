// Main JS for Lumora static site
// Elements
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const cinema = document.getElementById('cinema');
const orb = document.getElementById('orb');
const trail = document.getElementById('trail');
const mainSite = document.getElementById('mainSite');
const logoUploader = document.getElementById('logoUploader');
const logoPlaceholder = document.getElementById('logoPlaceholder');

// Handle start button click
startButton?.addEventListener('click', () => {
  // Get button position for animation
  const buttonRect = startButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;
  
  // Position orb at button location
  orb.style.left = (buttonCenterX - 14) + 'px';
  orb.style.top = (buttonCenterY - 14) + 'px';
  
  // Show cinema container
  cinema.classList.remove('hidden');
  
  // Start transform animation
  gsap.to(startButton, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      // move orb to center first
      const centerX = window.innerWidth * 0.5 - 14;
      const centerY = window.innerHeight * 0.5 - 14;
  gsap.to({ox: parseFloat(orb.style.left || 0), oy: parseFloat(orb.style.top || 0)}, {
    ox: centerX,
    oy: centerY,
    duration: 0.9,
    ease: 'power2.out',
    onUpdate: function(){ const ox = this.targets()[0].ox; const oy = this.targets()[0].oy; orb.style.left = ox + 'px'; orb.style.top = oy + 'px'; },
    onComplete: ()=>{ startScreen.style.display = 'none'; startCinematicWave(); }
  });
    }
  });
});

// Also wire the hero Start Training button to the same flow
document.getElementById('startTrainingBtn')?.addEventListener('click', () => {
  // hide mainSite content and trigger the same start sequence
  const rect = document.getElementById('startTrainingBtn').getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  orb.style.left = (centerX - 14) + 'px'; orb.style.top = (centerY - 14) + 'px';
  cinema.classList.remove('hidden');
  gsap.to('#startScreen', { opacity: 0, duration: 0.2, onComplete: ()=>{ document.getElementById('startScreen').style.display='none'; } });
  gsap.to({ox: parseFloat(orb.style.left||0), oy: parseFloat(orb.style.top||0)}, { ox: window.innerWidth*0.5-14, oy: window.innerHeight*0.5-14, duration:0.9, ease:'power2.out', onUpdate:function(){ const ox=this.targets()[0].ox; const oy=this.targets()[0].oy; orb.style.left=ox+'px'; orb.style.top=oy+'px'; }, onComplete: ()=>{ startCinematicWave(); } });
});

// Trail functionality removed - orb animation is now self-contained

// New cinematic animation - orb appears from top-left, loops, zig-zags, then centers
function startCinematicWave() {
  const centerX = window.innerWidth * 0.5;
  const centerY = window.innerHeight * 0.5;
  
  // Create a timeline for the new animation
  const tl = gsap.timeline();
  
  // Initial setup - orb starts from top-left corner
  gsap.set(orb, {
    left: '-50px',
    top: '-50px',
    scale: 0.5, 
    opacity: 0,
    filter: "blur(0px)",
    boxShadow: "0 0 40px rgba(108,63,207,0.9), 0 0 120px rgba(108,63,207,0.25)"
  });
  
  // Phase 1: Orb appears and moves to center area
  tl.to(orb, {
    left: '200px',
    top: '200px',
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out"
  });
  
  // Phase 2: Create loops and zig-zag patterns
  const loopDuration = 2.5;
  const loopPoints = 60;
  
  for(let i = 0; i < loopPoints; i++) {
    const progress = i / loopPoints;
    const angle = progress * Math.PI * 4; // Two full rotations
    const radius = 80 + Math.sin(progress * Math.PI * 4) * 40; // Varying radius
    
    // Create zig-zag pattern by alternating the direction
    const zigZag = Math.sin(progress * Math.PI * 8) * 30;
    
    const x = 200 + Math.cos(angle) * radius + zigZag;
    const y = 200 + Math.sin(angle) * radius * 0.7;
    
    tl.to(orb, {
      left: x + 'px',
      top: y + 'px',
      duration: loopDuration / loopPoints,
      ease: "none",
      onUpdate: function() {
        // Add subtle pulsing during movement
        const pulseScale = 1 + Math.sin(progress * Math.PI * 6) * 0.05;
        orb.style.transform = `scale(${pulseScale})`;
      }
    });
  }
  
  // Phase 3: Move to center with spiral motion
  tl.to(orb, {
    left: (centerX - 16) + 'px',
    top: (centerY - 16) + 'px',
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: function() {
      // Add rotation during center movement
      const rotation = (this.progress() * 360) % 360;
      orb.style.transform = `scale(1) rotate(${rotation}deg)`;
    }
  });
  
  // Phase 4: Pause at center and pulse
  tl.to(orb, {
    scale: 1.2,
    duration: 0.5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: 2
  });
  
  // Phase 5: Final expansion and transition
  tl.to(orb, {
    scale: 8,
    opacity: 0,
    filter: "blur(30px)",
    boxShadow: "0 0 300px rgba(108,63,207,0.9), 0 0 600px rgba(108,63,207,0.5)",
    duration: 2,
    ease: "power2.out",
    onComplete: revealSite
  });
}

function revealSite(){
  // Fade out cinema
  gsap.to('#cinema', {
    opacity: 0,
    duration: 1.2,
    ease: 'power2.inOut',
    onComplete: () => {
      cinema.style.display = 'none';
    }
  });
  
  // Reveal main site
  mainSite.classList.remove('hidden');
  gsap.from('#mainSite', {
    opacity: 0,
    scale: 0.95,
    duration: 1.5,
    ease: 'power2.out'
  });
  // ensure start screen gone
  const ss = document.getElementById('startScreen'); if(ss) ss.style.display = 'none';
  // clear trail
  positions = [];
  if(path) try{ path.setAttribute('d',''); }catch(e){}
}



// New cinematic flow: orb spawns at center then roams randomly and returns to center to expand
function startCinematicRoam(watchOnly=false){
  if(!orb){ console.error('[Lumora] startCinematicRoam aborted: orb missing'); revealSite(); return; }
  const centerX = window.innerWidth*0.5 - 14;
  const centerY = window.innerHeight*0.5 - 14;
  
  // Hide trail
  if(trail) trail.style.display = 'none';
  
  // Place orb at center visible
  gsap.set(orb, {scale:0.95, opacity:1, rotation:0});

  // Create interesting waypoints
  const tl = gsap.timeline();
  const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
  const points = 6;
  const angleStep = (Math.PI * 2) / points;
  
  // Initial movement from button to first point
  const firstX = centerX + Math.cos(0) * radius;
  const firstY = centerY + Math.sin(0) * radius;
  
  tl.to(orb, {
    left: firstX + 'px',
    top: firstY + 'px',
    duration: 1,
    ease: 'power2.inOut'
  });
  
  // Create a circular pattern
  for(let i = 1; i <= points; i++) {
    const angle = angleStep * i;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    
    tl.to(orb, {
      left: x + 'px',
      top: y + 'px',
      duration: 0.8,
      ease: 'power1.inOut'
    });
  }
  // Return to center with a more dramatic animation
  tl.to(orb, {
    left: centerX + 'px',
    top: centerY + 'px',
    duration: 1.2,
    ease: 'power2.inOut'
  });
  
  // Add a pulse effect before expansion
  tl.to(orb, {
    scale: 0.8,
    duration: 0.3,
    ease: 'power2.in'
  });
  
  // Final expansion
  tl.to(orb, {
    scale: 4,
    opacity: 0,
    duration: 1.6,
    ease: 'power2.out',
    onComplete: () => { revealSite(); }
  });
}

// On load: initialize particles, interactions and wire pre-start controls (cinematic starts after user action)
window.addEventListener('load', ()=>{
  // Show loading state
  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.5s ease;
  `;
  
  const loadingSpinner = document.createElement('div');
  loadingSpinner.style.cssText = `
    width: 50px;
    height: 50px;
    border: 3px solid rgba(108,63,207,0.3);
    border-top: 3px solid var(--accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  loadingOverlay.appendChild(loadingSpinner);
  document.body.appendChild(loadingOverlay);
  
  // Add spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Initialize everything
  initParticles();
  initInteractions();
  
  // observe sections to toggle visibility
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('visible'); } else { en.target.classList.remove('visible'); }
    });
  },{threshold:0.2});
  document.querySelectorAll('.section').forEach(s=>obs.observe(s));
  
  setTimeout(() => {
    setupScrollReveals();
    // Hide loading overlay
    loadingOverlay.style.opacity = '0';
    setTimeout(() => loadingOverlay.remove(), 500);
  }, 200);
});

// Simple particle background using canvas
function initParticles(){
  const el = document.getElementById('bgParticles');
  const canvas = document.createElement('canvas');
  el.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  function resize(){
    canvas.width = el.offsetWidth || window.innerWidth;
    canvas.height = el.offsetHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const particles = [];
  for(let i=0;i<80;i++){
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.8+0.4, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, hue: Math.random()*60+250});
  }
  function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x += p.vx;
      p.y += p.vy;
      if(p.x<0)p.x=canvas.width;if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;
      const g = ctx.createRadialGradient(p.x,p.y,p.r*0.2,p.x,p.y,p.r*5);
      g.addColorStop(0, `rgba(108,63,207,0.9)`);
      g.addColorStop(1, `rgba(30,36,115,0)`);
      ctx.fillStyle = g;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// interactions
function initInteractions(){
  // Enhanced card hover effects with magnetic attraction
  document.querySelectorAll('.card, .scenario, .guideCard, .stat, .member').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
      
      // Enhanced tilt effect with magnetic attraction
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = (e.clientY - centerY) * 0.08;
      const rotateY = -(e.clientX - centerX) * 0.08;
      
      // Magnetic effect - card follows cursor slightly
      const magneticX = (e.clientX - centerX) * 0.1;
      const magneticY = (e.clientY - centerY) * 0.1;
      
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translate(${magneticX}px, ${magneticY}px)
        translateY(-8px)
        scale(1.02)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
    });
  });
  
  // Section parallax effects
  document.querySelectorAll('.section').forEach(section => {
    const content = section.querySelector('.section-content');
    if(!content) return;
    
    window.addEventListener('scroll', () => {
      const speed = 0.5;
      const rect = section.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if(visible) {
        const yPos = (rect.top - window.innerHeight / 2) * speed;
        content.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
  
  // Video player functionality
  const videoWrapper = document.getElementById('videoWrapper');
  const demoVideo = document.getElementById('demoVideo');
  const watchDemoBtn = document.getElementById('watchDemoBtn');

  function playVideo() {
    if (videoWrapper && demoVideo) {
      videoWrapper.classList.add('playing');
      demoVideo.play();
      // Smooth scroll to video if not in view
      videoWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  if (videoWrapper) {
    videoWrapper.addEventListener('click', playVideo);
  }

  if (watchDemoBtn) {
    watchDemoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playVideo();
    });
  }

  // Handle video end
  if (demoVideo) {
    demoVideo.addEventListener('ended', () => {
      videoWrapper.classList.remove('playing');
    });
  }
  
  // logo upload
  logoUploader.addEventListener('change', (e)=>{
    const f = e.target.files[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    // apply to all `.logo` elements so the placeholder updates everywhere
    document.querySelectorAll('.logo').forEach(el=>{
      el.style.backgroundImage = `url(${url})`;
      el.textContent = '';
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    });
  });

  // Handle hero buttons
  document.getElementById('startTrainingBtn')?.addEventListener('click', () => {
    const cinemaEl = document.getElementById('cinema');
    const mainSiteEl = document.getElementById('mainSite');
    if (cinemaEl) {
      // Hide main site first
      mainSiteEl.classList.add('hidden');
      // Show cinema
      cinemaEl.classList.remove('hidden');
      cinemaEl.style.display = 'flex';
      try {
        // startCinematic may be an older name; call whichever cinematic flow exists
        if(typeof startCinematic === 'function') startCinematic();
        else if(typeof startCinematicRoam === 'function') startCinematicRoam();
        else if(typeof startCinematicWave === 'function') startCinematicWave();
        else throw new Error('No cinematic function available');
      } catch(err) {
        console.error('[Lumora] startCinematic error:', err);
        revealSite();
      }
    }
  });

  document.getElementById('watchDemoBtn')?.addEventListener('click', () => {
    window.open('about:blank', '_blank');
  });

  // Enhanced smooth scroll for nav
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      // Use GSAP ScrollToPlugin
      gsap.to(window, { duration: 1, scrollTo: targetPosition - 80, ease: 'power2.inOut' });
      // update active link
      document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
      a.classList.add('active');
      moveNavIndicator();
      
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.mobile-menu-toggle');
      const nav = document.querySelector('.nav');
      if (mobileMenu && nav) {
        mobileMenu.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }
  
  // Parallax scroll effects
  gsap.utils.toArray('.card, .scenario, .guideCard').forEach(element => {
    gsap.to(element, {
      y: 20,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Enhanced carousel
  const track = document.querySelector('.carouselTrack');
  const prev = document.querySelector('.carouselPrev');
  const next = document.querySelector('.carouselNext');
  let idx = 0;
  
  function update(){
    if(!track) return;
    const cardWidth = 320; // Updated width for new cards
    const maxIdx = Math.max(0, track.children.length - 3); // Show 3 cards at once
    idx = Math.max(0, Math.min(idx, maxIdx));
    track.style.transform = `translateX(${-idx * cardWidth}px)`;
  }
  
  if(prev) prev.addEventListener('click', ()=>{ 
    idx = Math.max(0, idx-1); 
    update(); 
  });
  
  if(next) next.addEventListener('click', ()=>{ 
    const maxIdx = Math.max(0, track.children.length - 3);
    idx = Math.min(maxIdx, idx+1); 
    update(); 
  });

  // keyboard controls
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') { 
      idx = Math.max(0, idx-1); 
      update(); 
    }
    if(e.key === 'ArrowRight') { 
      const maxIdx = Math.max(0, track.children.length - 3);
      idx = Math.min(maxIdx, idx+1); 
      update(); 
    }
  });

  // autoplay carousel
  let autoplay = true;
  let autoTimer = setInterval(()=>{ 
    if(!autoplay || !track) return; 
    const maxIdx = Math.max(0, track.children.length - 3);
    idx = (idx+1) % (maxIdx + 1); 
    update(); 
  }, 4200);
  const carouselEl = document.getElementById('reviewsCarousel');
  if(carouselEl){
    carouselEl.addEventListener('mouseenter', ()=>{ autoplay=false; });
    carouselEl.addEventListener('mouseleave', ()=>{ autoplay=true; });
  }

  document.querySelectorAll('.teamPhoto').forEach(img=>{
    img.style.cursor = 'pointer';
  });

  // tilt effect on team members
  document.querySelectorAll('.member').forEach(m=>{
    m.addEventListener('mousemove', (ev)=>{
      const r = m.getBoundingClientRect();
      const cx = r.left + r.width/2; const cy = r.top + r.height/2;
      const dx = ev.clientX - cx; const dy = ev.clientY - cy;
      const rx = (-dy / r.height) * 6; const ry = (dx / r.width) * 6;
      m.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
    m.addEventListener('mouseleave', ()=>{ m.style.transform = ''; });
  });



  // nav highlight on scroll
  const sections = document.querySelectorAll('main section');
  function highlightNav(){
    let found = null;
    sections.forEach(s=>{
      const r = s.getBoundingClientRect();
      if(r.top <= window.innerHeight*0.35 && r.bottom >= window.innerHeight*0.25){ found = s.id; }
    });
    document.querySelectorAll('.nav a').forEach(a=>{ a.classList.toggle('active', a.getAttribute('href') === `#${found}`); });
  }
  window.addEventListener('scroll', throttle(highlightNav,120));

  // Enhanced hover effects with GSAP
  document.querySelectorAll('.guideCard').forEach(gc=>{
    gc.addEventListener('mouseenter', ()=> {
      gsap.to(gc, {
        scale:1.05, 
        boxShadow:'0 20px 60px rgba(108,63,207,0.2)', 
        duration:0.4,
        ease: "power2.out"
      });
    });
    gc.addEventListener('mouseleave', ()=> {
      gsap.to(gc, {
        scale:1, 
        boxShadow:'var(--shadow-card)', 
        duration:0.4,
        ease: "power2.out"
      });
    });
  });

  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
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
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      
      // Add haptic feedback for mobile
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    });
  });

  // Add success feedback for form interactions
  const showSuccessFeedback = (element) => {
    const originalText = element.textContent;
    element.textContent = '✓ Success!';
    element.style.color = '#4ade80';
    
    setTimeout(() => {
      element.textContent = originalText;
      element.style.color = '';
    }, 2000);
  };

  // Add hover sound effects (optional)
  document.querySelectorAll('.card, .scenario, .guideCard, .stat, .member').forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Subtle scale animation
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Add floating animation to hero elements
  const heroElements = document.querySelectorAll('.heroLeft h1, .heroLeft p, .heroCtas');
  heroElements.forEach((el, index) => {
    gsap.to(el, {
      y: Math.sin(Date.now() * 0.001 + index) * 2,
      duration: 2 + index * 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  // Initialize analytics dashboard
  initAnalyticsDashboard();

  // Add typing animation to hero title
  const heroTitle = document.querySelector('.heroLeft h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    gsap.to(heroTitle, {
      duration: 0.1,
      onComplete: () => {
        let i = 0;
        const typeInterval = setInterval(() => {
          heroTitle.textContent += text[i];
          i++;
          if (i >= text.length) clearInterval(typeInterval);
        }, 50);
      }
    });
  }

  // Add enhanced micro-animations
  addMicroAnimations();
}

// small live-feed simulation
setInterval(()=>{
  const f = document.getElementById('liveFeed');
  if(!f) return;
  const items = ['A user completed Wildfire Module','New org subscribed','AI snapshot processed','Team executed replay'];
  const li = document.createElement('li');
  li.textContent = items[Math.floor(Math.random()*items.length)] + ' — just now';
  f.insertBefore(li, f.firstChild);
  if(f.children.length>6) f.removeChild(f.lastChild);
},7000);

// Utility: throttle
function throttle(fn, wait){ let t=0; return (...args)=>{ const now=Date.now(); if(now-t>wait){ t=now; fn(...args); } }; }

// GSAP ScrollTrigger animations and counters
function setupScrollReveals(){
  if(!gsap || !gsap.registerPlugin) return;
  try{ 
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }catch(e){}
  
  // Add scroll progress indicator
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  
  gsap.to(progress, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { 
      scrub: 0.3,
      start: 'top top',
      end: 'bottom bottom',
      trigger: document.documentElement
    }
  });

  // Track active section for nav
  document.querySelectorAll('.section').forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if(self.isActive) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + section.id) {
              link.classList.add('active');
            }
          });
          moveNavIndicator();
        }
      }
    });
  });

  // Move nav indicator under active link
  function moveNavIndicator(){
    const indicator = document.querySelector('.nav-indicator');
    const active = document.querySelector('.nav-link.active');
    if(!indicator || !active) return;
    const rect = active.getBoundingClientRect();
    const navRect = active.closest('.nav').getBoundingClientRect();
    const offset = rect.left - navRect.left;
    indicator.style.width = rect.width + 'px';
    indicator.style.transform = `translateX(${offset}px)`;
  }

  // reposition on resize
  window.addEventListener('resize', ()=>{ setTimeout(moveNavIndicator, 120); });
  // initial placement
  setTimeout(moveNavIndicator, 300);

  // Smooth section reveals
  document.querySelectorAll('.section').forEach(s=>{
    const items = s.querySelectorAll('.card, .scenario, .guideCard, .stat, .member, .review, .featured');
    
    // Fade in section titles with a subtle slide
    gsap.from(s.querySelectorAll('.sectionTitle, .lead'),{
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: s,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 1
      }
    });

    // Staggered reveal of items
    if(items.length){
      items.forEach((item, i) => {
        gsap.from(item, {
          y: 20,
          opacity: 0.8,
          scale: 0.98,
          duration: 0.4,
          delay: i * 0.05,
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 70%',
            scrub: false,
            toggleActions: "play none none reverse"
          }
        });
      });
    }

    // Parallax background effect for sections
    if(s.querySelector('.bgParticles')){
      gsap.to(s.querySelector('.bgParticles'), {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: s,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  });

  // counters animation for statVal
  document.querySelectorAll('.statVal').forEach(el=>{
    const value = parseFloat(el.textContent) || 0;
    const isPct = String(el.textContent).includes('%') || String(el.textContent).includes('/');
    gsap.fromTo(el, {innerText:0}, {innerText: value, duration:1.6, ease:'power1.out', snap:{innerText:1}, onUpdate:function(){ el.textContent = formatNumber(Math.round(this.targets()[0].innerText), isPct); }, scrollTrigger:{trigger:el, start:'top 90%'}});
  });
}

function formatNumber(n,isPct){ if(isPct) return (n/10) + '%'; return n.toLocaleString(); }

// Analytics Dashboard Functions
function initAnalyticsDashboard() {
  // Animate metric values
  animateMetricValues();
  
  // Initialize progress bars
  animateProgressBars();
  
  // Setup chart controls
  setupChartControls();
  
  // Initialize live activity feed
  initLiveActivityFeed();
}

function animateMetricValues() {
  document.querySelectorAll('.metric-value').forEach(element => {
    const target = parseFloat(element.getAttribute('data-target'));
    const isPercentage = element.textContent.includes('%');
    const isDecimal = element.textContent.includes('.');
    
    gsap.fromTo(element, 
      { innerText: 0 }, 
      { 
        innerText: target, 
        duration: 2, 
        ease: "power2.out",
        onUpdate: function() {
          const value = Math.round(this.targets()[0].innerText * 10) / 10;
          if (isPercentage) {
            element.textContent = value + '%';
          } else if (isDecimal) {
            element.textContent = value.toFixed(1);
          } else {
            element.textContent = Math.round(value).toLocaleString();
          }
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        }
      }
    );
  });
}

function animateProgressBars() {
  document.querySelectorAll('.progress-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.fromTo(bar, 
      { width: '0%' }, 
      { 
        width: width + '%', 
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%'
        }
      }
    );
  });
}

function setupChartControls() {
  const chartBtns = document.querySelectorAll('.chart-btn');
  chartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      chartBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Simulate chart data change
      const period = btn.getAttribute('data-period');
      updateChartData(period);
    });
  });
}

function updateChartData(period) {
  // This would typically update a real chart
  // For now, we'll just show a loading state
  const chart = document.getElementById('progressChart');
  if (chart) {
    chart.style.opacity = '0.5';
    setTimeout(() => {
      chart.style.opacity = '1';
    }, 500);
  }
}

function initLiveActivityFeed() {
  const activityItems = [
    { icon: '🎓', text: 'Asfiya completed Earthquake Module', time: '2 minutes ago' },
    { icon: '🌊', text: 'Koel started Flood Management training', time: '5 minutes ago' },
    { icon: '📊', text: 'Utkarsh reviewed analytics snapshot', time: '9 minutes ago' },
    { icon: '🔥', text: 'New user completed Fire Safety basics', time: '12 minutes ago' },
    { icon: '🏥', text: 'Medical Emergency module completed', time: '15 minutes ago' },
    { icon: '⚡', text: 'System performance optimized', time: '18 minutes ago' },
    { icon: '🎯', text: 'Training session started', time: '21 minutes ago' },
    { icon: '📈', text: 'Analytics data updated', time: '24 minutes ago' }
  ];

  let currentIndex = 0;
  
  setInterval(() => {
    const feed = document.getElementById('liveFeed');
    if (!feed) return;
    
    // Remove oldest item
    if (feed.children.length >= 4) {
      feed.removeChild(feed.lastChild);
    }
    
    // Add new item at the top
    const newItem = document.createElement('div');
    newItem.className = 'activity-item';
    newItem.innerHTML = `
      <div class="activity-icon">${activityItems[currentIndex].icon}</div>
      <div class="activity-content">
        <div class="activity-text">${activityItems[currentIndex].text}</div>
        <div class="activity-time">${activityItems[currentIndex].time}</div>
      </div>
    `;
    
    // Add with animation
    newItem.style.opacity = '0';
    newItem.style.transform = 'translateY(-20px)';
    feed.insertBefore(newItem, feed.firstChild);
    
    gsap.to(newItem, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
    
    currentIndex = (currentIndex + 1) % activityItems.length;
  }, 8000);
}

// Enhanced Micro-animations
function addMicroAnimations() {
  // Add subtle pulse to section titles
  document.querySelectorAll('.sectionTitle').forEach(title => {
    gsap.to(title, {
      scale: 1.02,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  // Add breathing effect to cards
  document.querySelectorAll('.card, .scenario, .guideCard, .metric-card').forEach(card => {
    gsap.to(card, {
      y: -2,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 2
    });
  });

  // Add shimmer effect to progress bars
  document.querySelectorAll('.progress-fill').forEach(bar => {
    gsap.to(bar, {
      backgroundPosition: '200% 0',
      duration: 2,
      ease: "none",
      repeat: -1,
      yoyo: true
    });
  });

  // Add floating effect to metric icons
  document.querySelectorAll('.metric-icon').forEach(icon => {
    gsap.to(icon, {
      y: -3,
      rotation: 5,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 1.5
    });
  });

  // Add pulse effect to activity indicator
  const pulseDot = document.querySelector('.pulse-dot');
  if (pulseDot) {
    gsap.to(pulseDot, {
      scale: 1.3,
      opacity: 0.7,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }

  // Add subtle rotation to team member photos
  document.querySelectorAll('.teamPhoto').forEach(photo => {
    photo.addEventListener('mouseenter', () => {
      gsap.to(photo, {
        rotation: 5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    photo.addEventListener('mouseleave', () => {
      gsap.to(photo, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Add magnetic effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Add parallax effect to section backgrounds
  document.querySelectorAll('.section').forEach(section => {
    const bg = section.querySelector('.bgParticles');
    if (bg) {
      gsap.to(bg, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  });
}

// init scroll reveals after load
window.addEventListener('load', ()=>{ setTimeout(setupScrollReveals, 200); });

// accessibility: reduce motion
if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  // stop animations
  gsap.globalTimeline.pause();
  document.getElementById('cinema').style.display='none';
  mainSite.classList.remove('hidden');
}
