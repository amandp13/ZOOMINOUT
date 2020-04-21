(function () {
    var dv, im;
  
    dv = $('<div></div>');
  
    im = $('<img>');
  
    $('body').eq(0).prepend(dv);
  
    $('div').eq(0).append('<div>', im);
  
    $(dv).eq(0).attr('class', 'zoom');
  
    $('body div.zoom div').attr('class', 'lge');
  
    $(im).eq(0).attr({
      'src': 'https://images.unsplash.com/photo-1493511084624-eff3041c25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80',
      'class': 'sml',
      'width': '400' });
  
  
    $('.zoom').css({
      'width': '400px',
      'margin': '0 auto',
      'top': '40px',
      'position': 'relative' });
  
  
    $('.lge').css({
      'width': '200px',
      'height': '200px',
      'background': '#fff',
      'position': 'absolute',
      'border-radius': '100%',
      'cursor': 'none',
      'box-shadow': '0 0 0 7px rgba(255,255,255,0.85), 0 0 7px 7px rgba(0,0,0,0.25), inset 0 0 40px 2px rgba(0,0,0,0.25)',
      'background': 'url(\'https://images.unsplash.com/photo-1493511084624-eff3041c25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80\')',
      'background-repeat': 'no-repeat' });
  
  
    $(im).css({
      'box-shadow': '0 0 30px' });
  
  
    $(document).ready(function () {
      var native_height, native_width;
      native_width = 0;
      native_height = 0;
      $('.zoom').mousemove(function (e) {
        var bgp, image_object, magnify_offset, mx, my, px, py, rx, ry;
        if (!native_width && !native_height) {
          image_object = new Image();
          image_object.src = $('.sml').attr('src');
          native_width = image_object.width;
          native_height = image_object.height;
        } else {
          magnify_offset = $(this).offset();
          mx = e.pageX - magnify_offset.left;
          my = e.pageY - magnify_offset.top;
          if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
            $('.lge').fadeIn(500);
          } else {
            $('.lge').fadeOut(800);
          }
          if ($('.lge').is(':visible')) {
            rx = Math.round(mx / $('.sml').width() * native_width - $('.lge').width() / 2) * -1;
            ry = Math.round(my / $('.sml').height() * native_height - $('.lge').height() / 2) * -1;
            bgp = rx + 'px ' + ry + 'px';
            px = mx - $('.lge').width() / 2;
            py = my - $('.lge').height() / 2;
            $('.lge').css({
              left: px,
              top: py,
              backgroundPosition: bgp });
  
          }
        }
      });
    });
  
  }).call(this);
  
  
  //# sourceURL=coffeescript
