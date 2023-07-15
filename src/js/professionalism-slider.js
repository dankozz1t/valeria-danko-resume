import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.professionalism-slider', {
  loop: true,

  modules: [Navigation],

  navigation: {
    nextEl: '.professionalism-slider__btn--next',
    prevEl: '.professionalism-slider__btn--prev',
  },
});
