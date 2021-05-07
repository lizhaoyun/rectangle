
/*global $:true*/
/* global Rectangle: true */
$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#length'),
        $area = $('#area');
      $forkMeGH.show("https://github.com/lizhaoyun/rectangle");
      $bszPageFooter.show("body");

    $btnCal.click(function(){
        var w = $width.val(),
            h = $height.val();
  
        // var r = new Rectangle(w, h);
        
        $perimeter.val(w * h);
        $area.val( 2 * (w + h));
    });
});