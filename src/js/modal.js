document.addEventListener('DOMContentLoaded', () => {
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  /* Открытие модального окна */
  modalButtons.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      const modalId = e.currentTarget.getAttribute('data-modal');
      const modalElem = document.querySelector(
        `.modal[data-modal="${modalId}"]`
      );

      if (modalElem) {
        modalElem.classList.add('active');
        overlay.classList.add('active');
      }
    });
  });

  /* Закрытие по кнопке "крестик" */
  closeButtons.forEach(item => {
    item.addEventListener('click', e => {
      const parentModal = e.currentTarget.closest('.modal');

      // Используем опциональную цепочку (?.) для защиты от ошибок
      parentModal?.classList.remove('active');
      overlay?.classList.remove('active');
    });
  });

  /* Закрытие по клавише ESC */
  document.addEventListener('keyup', e => {
    // e.keyCode устарел, современный стандарт — e.key
    if (e.key === 'Escape') {
      document.querySelector('.modal.active')?.classList.remove('active');
      overlay?.classList.remove('active');
    }
  });

  /* Закрытие по клику на подложку (overlay) */
  overlay?.addEventListener('click', () => {
    document.querySelector('.modal.active')?.classList.remove('active');
    overlay.classList.remove('active');
  });
});
