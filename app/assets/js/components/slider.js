// import Glide, { Controls, Breakpoints, Autoplay, Swipe} from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide',{
    autoplay: 3500,
    type: 'carousel',
    perView: 3,
    gap: 30,
    hoverpause: true,
  breakpoints: {
    992: {
      autoplay: 3500,
      type: 'carousel',
      perView: 2,
      gap: 20,
      hoverpause: true,
    },
    670: {
      autoplay: 3500,
      type: 'carousel',
      perView: 1,
      gap: 0,
      hoverpause: true,
    }
  }
}).mount();

import GLightbox from 'glightbox';

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  onOpen: () => {
    console.log('Lightbox opened')
  }
});
