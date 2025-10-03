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

        // Animate button out
        gsap.to(startButton, {
            opacity: 0,
            scale: 0.5,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                startScreen.classList.add('hidden');
                cinema.classList.remove('hidden');

                // Cinematic Orb Animation
                const tl = gsap.timeline();
                tl.set(orb, {
                    left: buttonRect.left + buttonRect.width / 2,
                    top: buttonRect.top + buttonRect.height / 2,
                    width: orbSize,
                    height: orbSize
                })
                .to(orb, {
                    x: (Math.random() - 0.5) * window.innerWidth * 0.8,
                    y: (Math.random() - 0.5) * window.innerHeight * 0.8,
                    duration: 1.5,
                    ease: 'power2.out'
                })
                .to(orb, {
                    x: 0,
                    y: 0,
                    left: '50%',
                    top: '50%',
                    duration: 1,
                    ease: 'power2.in'
                })
                .to(orb, {
                    scale: 100,
                    duration: 1.2,
                    ease: 'power2.inOut',
                    onComplete: revealSite
                });
            }
        });
    });

    function revealSite() {
        gsap.to(cinema, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => cinema.classList.add('hidden')
        });
        
        mainSite.classList.remove('hidden');
        
        gsap.to(topbar, { 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out', 
            delay: 0.5,
            onComplete: setupScrollAnimations
        });
    }
    
    // --- General Site Interactivity ---
    initTechBackground();
    initInteractions();
    initAnalyticsChart();

    // --- Helper Functions ---
    function initTechBackground() {
        if (!techBackground) return;
        const ctx = techBackground.getContext('2d');
        let width = techBackground.width = window.innerWidth;
        let height = techBackground.height = window.innerHeight;
        let columns = Math.floor(width / 20);
        const drops = [];

        for(let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const characters = "01";

        function draw() {
            ctx.fillStyle = "rgba(10, 15, 30, 0.05)";
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = "#33C1FF"; // Blue accent color
            ctx.font = "15px monospace";

            for(let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * 20, drops[i] * 20);
                
                if(drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 33);
        window.addEventListener('resize', () => {
            width = techBackground.width = window.innerWidth;
            height = techBackground.height = window.innerHeight;
            columns = Math.floor(width / 20);
            for(let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        });
    }

    function initInteractions() {
        // Nav link scroll
        document.querySelectorAll('.nav a').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = a.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    document.querySelector('.main-scroll-container').scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Carousel logic
        const track = document.querySelector('.carouselTrack');
        if(track) {
            const prev = document.querySelector('.carouselPrev');
            const next = document.querySelector('.carouselNext');
            let idx = 0;

            function updateCarousel(){
                if(!track || !track.children.length) return;
                const card = track.querySelector('.review-card');
                const gap = parseFloat(window.getComputedStyle(track).gap);
                const stepWidth = card.offsetWidth + gap;
                const maxIdx = track.children.length - Math.floor(track.parentElement.offsetWidth / stepWidth);
                idx = Math.max(0, Math.min(idx, maxIdx));
                track.style.transform = `translateX(${-idx * stepWidth}px)`;
            }

            prev?.addEventListener('click', () => { idx--; updateCarousel(); });
            next?.addEventListener('click', () => { idx++; updateCarousel(); });
            
            // Autoplay
            setInterval(() => {
                const maxIdx = track.children.length - Math.floor(track.parentElement.offsetWidth / track.querySelector('.review-card').offsetWidth);
                idx = (idx + 1) > maxIdx ? 0 : idx + 1;
                updateCarousel();
            }, 5000);

            window.addEventListener('resize', updateCarousel);
            setTimeout(updateCarousel, 100); // Initial call
        }

        // Live activity feed
        const feed = document.getElementById('liveFeed');
        if (feed) {
            const activityItems = [
                { icon: '🎓', text: 'Asfiya completed Earthquake Module' },
                { icon: '🌊', text: 'Koel started Flood Management training' },
                { icon: '📊', text: 'Utkarsh reviewed analytics snapshot' },
                { icon: '🔥', text: 'New user completed Fire Safety basics' },
            ];
            let currentIndex = 0;
            setInterval(() => {
                const item = activityItems[currentIndex];
                const newItem = document.createElement('div');
                newItem.className = 'activity-item';
                newItem.innerHTML = `<div class="activity-icon">${item.icon}</div>
                                   <div class="activity-content">
                                       <div class="activity-text">${item.text}</div>
                                       <div class="activity-time">${Math.floor(Math.random() * 10) + 1} minutes ago</div>
                                   </div>`;
                feed.prepend(newItem);
                if (feed.children.length > 4) {
                    feed.lastChild.remove();
                }
                currentIndex = (currentIndex + 1) % activityItems.length;
            }, 4000);
        }

        addMicroAnimations();
    }
    
    function addMicroAnimations() {
        // Magnetic Buttons & Ripple
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, {
                    x: x * 0.2,
                    y: y * 0.4,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
            btn.addEventListener('click', (e) => {
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Card shimmer on hover
        document.querySelectorAll('.card, .scenario, .guideCard, .review-card').forEach(card => {
            const shimmer = document.createElement('div');
            shimmer.className = 'shimmer-effect';
            card.appendChild(shimmer);

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                gsap.to(shimmer, {
                    x: x,
                    y: y,
                    duration: 0.2,
                    ease: 'power1.out'
                });
            });
        });

        // Subtle floating animation for guide portraits
        gsap.utils.toArray('.guidePortrait').forEach(el => {
            gsap.to(el, {
                y: -10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            });
        });
    }

    function initAnalyticsChart() {
        const ctx = document.getElementById('progressChart')?.getContext('2d');
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(51, 193, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(51, 193, 255, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Training Sessions',
                    data: [65, 59, 80, 81, 56, 55, 60],
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: 'rgb(51, 193, 255)',
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgb(51, 193, 255)',
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#c5cde8' } },
                    x: { grid: { display: false }, ticks: { color: '#c5cde8' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    function setupScrollAnimations() {
        const mainScroller = '.main-scroll-container';
        
        // Scroll Progress Bar
        gsap.to('.scroll-progress', {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: {
                trigger: mainScroller,
                scroller: mainScroller,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });

        // Staggered content reveals for each section
        gsap.utils.toArray('.section').forEach(section => {
            const animatedElements = section.querySelectorAll('.reveal-text, .card, .scenario, .guideCard, .member, .review-card, .analyticsDashboard, .carousel');
            
            // Set initial state for all elements to be animated
            gsap.set(animatedElements, { y: 50, opacity: 0 });

            ScrollTrigger.create({
                trigger: section,
                scroller: mainScroller,
                start: 'top 70%',
                onEnter: () => gsap.to(animatedElements, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                }),
                onLeaveBack: () => gsap.to(animatedElements, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.in',
                }),
            });
        });

        // Active nav link highlighting
        gsap.utils.toArray('.section').forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                scroller: mainScroller,
                start: 'top center',
                end: 'bottom center',
                onToggle: self => {
                    if (self.isActive) {
                        const targetLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                        targetLink?.classList.add('active');
                        document.title = `Project Lumora — ${section.dataset.title || 'Welcome'}`;
                    }
                }
            });
        });
    }
});

