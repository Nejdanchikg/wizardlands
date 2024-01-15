let isUp = false; // флаг для определения направления движения

function moveImage() {
  const image = document.getElementById('moving-image');
  const moveAmount = 150; // количество пикселей для движения
  const audio = document.getElementById('audioPlayer');

  // Воспроизведение аудио при клике
  audio.play();

  // Получаем текущую позицию изображения
  const currentPosition = parseInt(image.style.top) || 0;

  // Проверка направления и изменение положения изображения
  if (isUp) {
    image.style.top = '0px'; // Возвращаем изображение обратно в исходное положение
    isUp = false;
  } else {
    image.style.top = `${currentPosition + moveAmount}px`; // Перемещаем изображение вниз
    isUp = true;
  }
}
