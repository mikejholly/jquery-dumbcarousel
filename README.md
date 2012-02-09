A friend of mine needed an extremely simple jQuery plug-in for cross-fading elements (carousel). I couldn't find anything suitable online so I decided to write my own. The result is *Dumb Carousel*. It's a dead simple carousel plug-in.

Just call the code below and the script will automatically look for sub-elements with ```.prev``` and/or ```.next``` classes and use them as pagers. If there is a ```nav``` child, the script will use those as selection indicators.

### Usage

```
<script type="text/javascript" charset="utf-8">
  $(function(){
    $('#slideshow').dumbCarousel();
  });
</script>
```

### Custom Options

```
<script type="text/javascript" charset="utf-8">
  $(function(){
    $('#slideshow').dumbCarousel({
      duration: 1000,
      interval: 7000,
      $slides: $('#slides'), // custom slides container
      $next: $('#next'), // Custom next button (will look for .next by default)
      $prev: $('#prev'), // Custom prev button (will look for .prev by default)
      $nav: $('#nav'), // Custom indicator element
    });
  });
</script>
```