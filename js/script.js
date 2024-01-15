var audio = document.getElementById('audioPlayer');
var image = document.getElementById('imageToClick');
var bgElements = document.querySelectorAll('.bg, .bg3');

function playAudioAndChangeStyle() {
  audio.play();

  // Добавляем новые стили фонового изображения к каждому элементу с классами .bg и .bg3
  bgElements.forEach(function(element) {
    element.classList.toggle('newBg');
  });

  // Слушаем событие окончания воспроизведения аудио
  audio.addEventListener('ended', function() {
    // Удаляем новые стили фонового изображения после окончания
    bgElements.forEach(function(element) {
      element.classList.remove('newBg');
    });
  });
}

image.addEventListener('click', playAudioAndChangeStyle);
