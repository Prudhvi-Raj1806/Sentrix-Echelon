document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const startScreen = document.getElementById('startScreen');
    const startButton = document.getElementById('startButton');
    const cinema = document.getElementById('cinema');
    const orb = document.getElementById('orb');
    const mainSite = document.getElementById('mainSite');
    const topbar = document.querySelector('.topbar');
    const techBackground = document.getElementById('techBackground');

    // --- Intro Animation ---
    startButton?.addEventListener('click', () => {
        const buttonRect = startButton.getBoundingClientRect();
        const orbSize = 32;

        gsap.to(startButton, {
            opacity: 0, scale: 0.5, duration: 0.4, ease: 'power2.in',
            onComplete: () => {
                startScreen.classList.add('hidden');
                cinema.classList.remove('hidden');
                const tl = gsap.timeline();
                tl.set(orb, { left: buttonRect.left + buttonRect.width / 2, top: buttonRect.top + buttonRect.height / 2, width: orbSize, height: orbSize })
                .to(orb, { x: (Math.random() - 0.5) * window.innerWidth * 0.8, y: (Math.random() - 0.5) * window.innerHeight * 0.8, duration: 1.5, ease: 'power2.out' })
                .to(orb, { x: 0, y: 0, left: '50%', top: '50%', duration: 1, ease: 'power2.in' })
                .to(orb, { scale: 100, duration: 1.2, ease: 'power2.inOut', onComplete: revealSite });
            }
        });
    });

    function revealSite() {
        gsap.to(cinema, { opacity: 0, duration: 0.5, onComplete: () => cinema.classList.add('hidden') });
        mainSite.classList.remove('hidden');
        gsap.to(topbar, { y: 0, duration: 0.8, ease: 'power2.out', delay: 0.5, onComplete: setupScrollAnimations });
    }
    
    // --- Initializations ---
    initTechBackground();
    initInteractions();

    // --- Helper Functions ---
    function initTechBackground() {
        if (!techBackground) return;
        const ctx = techBackground.getContext('2d');
        let width = techBackground.width = window.innerWidth;
        let height = techBackground.height = window.innerHeight;
        let columns = Math.floor(width / 20);
        const drops = Array.from({ length: columns }).fill(1);
        const characters = "01";

        function draw() {
            ctx.fillStyle = "rgba(10, 15, 30, 0.05)";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "#FF9933"; // Saffron accent
            ctx.font = "15px monospace";
            drops.forEach((y, i) => {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * 20, y * 20);
                if (y * 20 > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }
        const intervalId = setInterval(draw, 50);
        window.addEventListener('resize', () => {
            width = techBackground.width = window.innerWidth;
            height = techBackground.height = window.innerHeight;
            columns = Math.floor(width / 20);
            drops.length = 0;
            for(let i=0; i<columns; i++) drops.push(1);
        });
    }

    function initInteractions() {
        // Nav link scroll
        document.querySelectorAll('.nav a').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(a.getAttribute('href'));
                if (target) {
                    document.querySelector('.main-scroll-container').scrollTo({ top: target.offsetTop, behavior: 'smooth' });
                }
            });
        });
        
        addMicroAnimations();
    }
    
    function addMicroAnimations() {
        // Magnetic Buttons & Ripple
        document.querySelectorAll('.btn, .start-button').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.4, duration: 0.8, ease: 'power3.out' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
            });
        });
    }

    function setupScrollAnimations() {
        const mainScroller = '.main-scroll-container';
        
        // Scroll Progress Bar
        gsap.to('.scroll-progress', {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: { trigger: mainScroller, scroller: mainScroller, start: 'top top', end: 'bottom bottom', scrub: true }
        });

        // Staggered content reveals
        gsap.utils.toArray('.section').forEach(section => {
            const animatedElements = section.querySelectorAll('.reveal-text, .card, .about-card, .member');
            gsap.set(animatedElements, { y: 50, opacity: 0 });
            ScrollTrigger.create({
                trigger: section, scroller: mainScroller, start: 'top 70%',
                onEnter: () => gsap.to(animatedElements, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }),
                onLeaveBack: () => gsap.to(animatedElements, { y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.in' }),
            });
        });

        // Active nav link highlighting
        gsap.utils.toArray('.section').forEach(section => {
            ScrollTrigger.create({
                trigger: section, scroller: mainScroller, start: 'top center', end: 'bottom center',
                onToggle: self => {
                    if (self.isActive) {
                        const targetLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                        targetLink?.classList.add('active');
                        document.title = `Project Kavach — ${section.dataset.title || 'Welcome'}`;
                    }
                }
            });
        });
    }
});

