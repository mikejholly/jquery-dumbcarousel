(function($) {
  $.fn.dumbCarousel = function(opts) {
    var $that = $(this);

    // Default options
    opts = $.extend({
      $slides: $that.find('.slides'),
      $next: $that.find('.next'),
      $prev: $that.find('.prev, .previous'),
      $nav: null,
      duration: 500,
      interval: 5000,
    }, opts);

    opts.$slides = opts.$slides.length > 1 ? opts.$slides : opts.$slides.children();


console.log(opts.$slides);

    var t, $first = opts.$slides.eq(0), $current = $first, $next;
    if (!opts.$nav) {
      $.each(['nav a', 'ul li', '.nav a', '.nav li'], function(i) {
        var $nav = $that.find('' + this);
        if ($nav.length) {
          opts.$nav = $nav;
          return false;
        }
      });
    }

    // Hide all but first
    opts.$slides.not(':eq(0)').hide();

    opts.$nav.click(function() {
      var i = opts.$nav.index(this);
      $(this).addClass('active');
      opts.$nav.not(':eq(' + i + ')').removeClass('active');
      $next = opts.$slides.eq(i);
      crossFade($current, $next);
      $current = $next;
      stop();
      return false;
    });

    function crossFade($c, $n) {
      $c.fadeOut(opts.duration);
      $n.fadeIn(opts.duration);
      if (opts.$nav.length) {
        var i = opts.$slides.index($n);
        opts.$nav.not(':eq(' + i + ')').removeClass('active');
        opts.$nav.eq(i).addClass('active');
      };
    };

    // Set up fade interval
    function start() {
      t = setInterval(function() {
        $current = $current.length ? $current : $first;
        $next = $current.next().length ? $current.next() : $first;
        crossFade($current, $next);
        $current = $next;
      }, opts.interval);
    };
    function stop() {
      clearInterval(t);
    };
    start();

    // Slide interaction
    opts.$slides.mouseenter(stop).mouseleave(start);
  };
})(jQuery);