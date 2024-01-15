/*Scroll thumbler*/
const thumb = document.querySelector('.thumb');
const scrollbar = document.querySelector('.scrollbar');
const scrollContent = document.querySelector('.scroll-content');

thumb.addEventListener('mousedown', function(event) {
  event.preventDefault();
  const startY = event.clientY;
  const startHeight = thumb.clientHeight;

  document.addEventListener('mousemove', resizeScrollbar);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', resizeScrollbar);
  });

  function resizeScrollbar(event) {
    const deltaY = event.clientY - startY;
    const newHeight = startHeight + deltaY;

    if (newHeight > 10 && newHeight < scrollbar.clientHeight) {
      thumb.style.height = `${newHeight}px`;
      const contentHeight = scrollContent.scrollHeight;
      const visibleRatio = scrollContent.clientHeight / contentHeight;
      const scrollDistance = contentHeight - scrollContent.clientHeight;
      scrollContent.scrollTop = (newHeight - thumb.clientHeight) * (scrollDistance / (scrollbar.clientHeight - thumb.clientHeight)) * (1 / visibleRatio);
    }
  }
});
