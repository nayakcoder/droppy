document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Hero Section Reveal
    tl.fromTo(".hero-logo", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1 })
        .fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-subtitle", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-section .cta-button", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".app-preview-container", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
        .fromTo(".app-background", { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 0.7, duration: 1.5, ease: "power2.out" }, "-=1");

    // Scroll Reveal for Features
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // when top of card hits 85% of viewport
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Sub-elements Reveal
    gsap.utils.toArray('.section-heading, .roadmap-card, .features-cta, .pricing-desc').forEach((el, i) => {
        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                }
            }
        );
    });

    // Scroll Reveal for Pricing Section (Mystery Solution)
    gsap.fromTo(".pricing-section",
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pricing-section",
                start: "top 80%",
            }
        }
    );
});
