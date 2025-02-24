'use-stric';

gsap.registerPlugin(ScrollTrigger);
gsap.set('.visual-introwrap', { autoAlpha: 0, y: 100 });

const tl = gsap.timeline();

tl.to('body', { overflow: 'hidden' })
  .to('.visual-titlewrap', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'power2.out', scale: 1 })
  .to('.visual-titlewrap', { autoAlpha: 0, duration: 1.2 }, '+=2')
  .to('.visual-titlewrap', { display: 'none' }, '+=1')
  .to('.visual-introwrap', { display: 'flex', autoAlpha: 1, y: 0, duration: 1 })
  .to('.visual-list .list-item', { autoAlpha: 1, stagger: 0.3, duration: 1 })
  .to('body', { overflowY: 'scroll' })
  .to('.scrolldown-lottie', { autoAlpha: 1 });

ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  pin: true,
  markers: true,
  pinSpacing: false,
  anticipatePin: 1,
});

lottie.loadAnimation({
  container: document.querySelector('.scrolldown-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/lottie/scrolldown.json',
});
