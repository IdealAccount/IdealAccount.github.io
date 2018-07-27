(function($) {
  $.fn.bgscroll = function(options) {

    var x = $.extend({
      bgpositionx: 50,
      direction: "bottom",
      debug: !1,
      min: 0,
      max: 100
    }, options);

    var a = $(document).height() - $(window).height(),
        b = a - (this.offset().top + this.height());

    this.offset().top < a && (b = 0);

    var c = (this.offset().top + this.height());

    if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
      var d = ($(window).scrollTop() - b) / (c - b) * 100;

      "top" == x.direction && (d = 100 - d),
          d > x.max && (d = x.max),
          d < x.min && (d = x.min);

      if (x.debug){
        console.log('Element background position: ' + d + ' %');
      }
    }

    return this.css({
      backgroundPosition: x.bgpositionx + '% ' + d + '%'
    });
  };
}(jQuery));

$(window).scroll(function(){
  $('.wave').bgscroll({
    direction: 'top', // направление bottom или top
    bgpositionx: 10, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min: 0, // минимальное положение (в %) на которое может смещаться фон
    max: -50 // максимальное положение (в %) на которое может смещаться фон
  });
})