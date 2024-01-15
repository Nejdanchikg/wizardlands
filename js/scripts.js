$(document).ready(
  function() {
    console.log('welcome to %cWizard %cLands %c',
      'color: rgb(760,70,80); font-size: 38pt; font-weight: bold;',
      'color: purple; font-size: 38pt;',
      'color: #e1e1e1; font-size: 10pt;');

    $('.DownloadType').hide()


    /*
        let p = $( ".center-content" ).first();
    
        let bordT = p.outerWidth() - p.innerWidth();
        let paddT = p.innerWidth() - p.width();
        let margT = p.outerWidth(true) - p.outerWidth();
        let margT2 = p.outerWidth(true)
    
    
        let bordTH = p.outerHeight() - p.innerHeight();
        let paddTH = p.innerHeight() - p.height();
        let margTH = p.outerHeight(true) - p.outerHeight();
        let margTH2 = p.outerHeight(true);
    
        console.log( "innerWidth: " + p.innerWidth()+"px");
        console.log("borderWidth: "+bordT+"px")
        console.log("paddingWidth: "+paddT+"px")
        console.log("marginWidth: "+margT+"px")
        console.log("outerWidth: "+margT2+"px")
    
        console.log("==============================")
    
        console.log("innerHeight: " + p.innerHeight() );
        console.log("borderHeight: "+bordTH+"px")
        console.log("paddingHeight: "+paddTH+"px")
        console.log("marginHeight: "+margTH+"px")
        console.log("outerHeight: "+margTH2+"px")
    
    
    
        $("#jucerBox").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            });
    
    */

    /*$('div').hide(10000)
    $('.CardBox:nth-child(2)').show(5000)

    let text = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
    $('div').prepend(text)

    let box = $('p').css('background-color')
    */
    // Получаем нужный элемент

  })

let hidetObjects = document.getElementsByClassName("HideMeEesy");

let Visible = function(target, ibox) {
  // Все позиции элемента
  let targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    target.classList.remove("HideMeEesy")
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  for (var i = hidetObjects.length - 1; i >= 0; i--) {
    Visible(hidetObjects[i], i);
  }

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
for (var i = hidetObjects.length - 1; i >= 0; i--) {
  Visible(hidetObjects[i], i);
}



/*
let ButtonActive = false;

$('#Main-DownloadButton').click(
  function () {
    if(ButtonActive){
      $(this).css({"background-color":'#200'});
      $('.DownloadType').hide(500)
    }
    else{
      $(this).css({"background-color":'#4E1402'});
      $('.DownloadType').show(500)
    }
    ButtonActive=!ButtonActive

})
/*
$('h1').click(
  function () {
    $(this).delay(1000)
    $(this).animate({
      opacity:0.1,
    })
    $(this).delay(1000)
    $(this).text("Пиши меньше_")
    $(this).delay(1000)
    $(this).text("Пиши меньш_")
    $(this).delay(1000)
    $(this).text("Пиши мень_")
    $(this).delay(1000)
    $(this).text("Пиши мень_")
    $(this).delay(1000)
    $(this).text("Пиши мен_")
    $(this).delay(1000)
    $(this).text("Пиши ме_")
    $(this).delay(1000)
    $(this).text("Пиши м_")
    $(this).delay(1000)
    $(this).text("Пиши _")
    $(this).delay(1000)
    $(this).text("Пиши_")
    $(this).delay(1000)
    $(this).text("Пиш_")
    $(this).delay(1000)
    $(this).text("Пи_")
    $(this).delay(1000)
    $(this).text("П_")
    $(this).delay(1000)
    $(this).text("_")
    $(this).delay(1000)
    $(this).text("ДЕЛАЙ БОЛЬШОЕ_")
    $(this).delay(1000)
    $(this).text("ДЕЛАЙ БОЛЬШОЕ")
  })


$('p').click(
  function () {
    $(this).hide(1000)
  })



/*
$('h1').click(
  function () {
    $(this).hide(1000)
    $('center > h2').hide(1500)
    $(this).hide(1000)
    $('center > h2').hide(1000)
    $(this).text("ИДИ РАБОТАЙ   ")
    $('center > h2').text("ДЕЛАЙ БОЛЬШЕ    ")
    $('center > h2').show(1000)
    $(this).show(1000)
  })*/
/*
$('h2').click(
function () {
  $(this).hide(1000)
})


$('img').click(
function () {
  $(this).hide(1000)
})

$('.CardBox').click(
function () {
  $(this).hide(1000)
})
$('span').click(
function () {
  $(this).hide(1000)
})
*/