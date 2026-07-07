// Inline video modal — keeps visitors on the site instead of jumping to YouTube
const videoBtn = document.getElementById('openVideoModal');
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');

if (videoBtn && videoModal && videoIframe) {
  const embedSrc = videoIframe.dataset.src;

  const openVideoModal = () => {
    videoIframe.src = `${embedSrc}?autoplay=1&rel=0`;
    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    videoModal.classList.remove('open');
    videoModal.setAttribute('aria-hidden', 'true');
    videoIframe.src = '';
    document.body.style.overflow = '';
  };

  videoBtn.addEventListener('click', openVideoModal);
  videoModal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeVideoModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
  });
}

// Image carousel — arrows scroll one slide at a time
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.carousel-arrow.prev');
  const nextBtn = carousel.querySelector('.carousel-arrow.next');
  if (!track || !prevBtn || !nextBtn) return;

  const slideDistance = () => {
    const slide = track.querySelector('.carousel-slide');
    return slide ? slide.getBoundingClientRect().width + 20 : track.clientWidth;
  };

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -slideDistance(), behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: slideDistance(), behavior: 'smooth' }));
});
