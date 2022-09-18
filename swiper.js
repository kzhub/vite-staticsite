import Swiper from 'swiper/bundle'

export const Slider = () => {
  const option = {
    // loop: true,
    autoplay: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  const swiper = new Swiper('.swiper', option);
}