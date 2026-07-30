const swiperElement = document.querySelector('.swiper');

if (swiperElement) {
  const swiper = new Swiper('.swiper', {
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // 3. Адаптивность (Breakpoints)
    // spaceBetween: 100 для мобилки — это очень много (слайды могут улететь за экран).
    // Лучше задать разные отступы для разных экранов:
    breakpoints: {
      // от 320px (мобильные)
      320: {
        spaceBetween: 20,
      },
      // от 768px (планшеты)
      768: {
        spaceBetween: 40,
      },
      // от 1200px (десктопы)
      1200: {
        spaceBetween: 100,
      },
    },
  });
}
