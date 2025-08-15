function loaderWithTimeline() {
    const loaderCounter = document.querySelector('.counter-container');
    let counter = { value: 0 };

    const tl = gsap.timeline();

    tl.to(counter, {
        value: 100,
        duration: 3,
        ease: "power1.out",
        onUpdate: () => {
            loaderCounter.textContent = Math.floor(counter.value);
        }
    })
    .to(".counter-container", {
        opacity: 0,
        duration: 0.5
    })
    .to('.block',{
        y : '-100%' ,
        stagger : 0.1 ,
        delay : 0.5
    })
}

window.onload = loaderWithTimeline;
