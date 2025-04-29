document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    const cursorFollower = document.querySelector('.cursor-follower');
    const githubUsername = 'prathameshvattamwar';
    const body = document.body;
    const header = document.querySelector('.site-header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const delay = 0.3;

    if (cursorFollower) {
        gsap.ticker.add(() => {
            cursorX += (mouseX - cursorX) * delay;
            cursorY += (mouseY - cursorY) * delay;
            gsap.set(cursorFollower, { x: cursorX, y: cursorY });
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.querySelectorAll('a, button, .game-card, .intro-box, .tech-icon').forEach(el => {
            el.addEventListener('mouseenter', () => cursorFollower.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hover-active'));
        });
    }

     if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }

     window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    function initPageAnimations() {

        gsap.utils.toArray('.anim-fade-up').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: "top 90%" } }
            );
        });

         gsap.utils.toArray('.anim-chars').forEach(el => {
             const chars = el.querySelectorAll('span');
              gsap.fromTo(chars,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'back.out(1.7)', scrollTrigger: { trigger: el, start: "top 85%" } }
             );
         });


        gsap.utils.toArray('.anim-scroll-fade').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: "top 85%", stagger: 0.15 } }
            );
        });


        gsap.utils.toArray('.anim-scroll-scale').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)', scrollTrigger: { trigger: el, start: "top 85%" } }
            );
        });


        if (document.querySelector('.horizontal-scroll-section')) {
            const horizontalSection = document.querySelector('.horizontal-scroll-section');
            const track = document.querySelector('.horizontal-track');
            const items = gsap.utils.toArray('.h-scroll-item');
   
            if (window.innerWidth >= 768) {
               let scrollTween = gsap.to(track, {
                   // Replace xPercent with a precise x calculation
                   x: () => -(track.scrollWidth - window.innerWidth),
                   ease: "none",
                   scrollTrigger: {
                       trigger: horizontalSection,
                       pin: true,
                       scrub: 1,
                       start: "top top",
                       // The end calculation remains the same, defining the scroll duration
                       end: () => "+=" + (track.scrollWidth - window.innerWidth),
                       // Add invalidateOnRefresh for robustness on resize/layout changes
                       invalidateOnRefresh: true
                   }
               });
   
               // The item animation logic can remain the same
               items.forEach(item => {
                    gsap.from(item, {
                        scale: 0.9,
                        opacity: 0.7,
                        scrollTrigger: {
                            trigger: item,
                            containerAnimation: scrollTween, // Ensures items animate relative to the horizontal scroll
                            start: "left center",
                            end: "center center",
                            scrub: true,
                        }
                    });
                });
   
            } else {
                 // Keep the mobile/vertical animation logic as is
                 gsap.utils.toArray('.h-scroll-item').forEach(item => {
                    gsap.from(item, {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%"
                        }
                    });
                });
            }
       }
    }


    const gameListContainer = document.getElementById('game-list-container');
    if (gameListContainer) {
        fetch('games.json')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(games => displayGames(games))
            .catch(error => {
                console.error("Error loading game data:", error);
                gameListContainer.innerHTML = `<p class="error-message">Could not load game list. Please try again later.</p>`;
            });

        function displayGames(games) {
            gameListContainer.innerHTML = '';
            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');
                const gameLink = `https://${githubUsername}.github.io/${game.repoName}/`;
                gameCard.innerHTML = `
                    <i class="${game.icon}"></i>
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <a href="${gameLink}" target="_blank" rel="noopener noreferrer" class="play-button">Play Now</a>
                `;
                gameListContainer.appendChild(gameCard);
            });

            gsap.fromTo(".game-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: { trigger: gameListContainer, start: "top 80%" }
                }
            );
             document.querySelectorAll('.game-card').forEach(el => {
                el.addEventListener('mouseenter', () => cursorFollower && cursorFollower.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => cursorFollower && cursorFollower.classList.remove('hover-active'));
             });
        }
    }

    initPageAnimations();

});
