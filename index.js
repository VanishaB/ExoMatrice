$(document).ready(function(){
    $("div1").click(function(){
        $(".form").addClass('blue');
    });
});

$(document).ready(function(){
    $("div2").click(function(){
        $(".form").removeClass('blue');
    });
});

$( ".rond" ).click(function() {
  $( this ).toggleClass( 'blue' );
});


 $(".carre").click(function(){
      if ($(this).hasClass("row1") ) $(".row1").toggleClass('blue');
      if ($(this).hasClass("row2") ) $(".row2").toggleClass('blue');
      if ($(this).hasClass("row3") ) $(".row3").toggleClass('blue');
      if ($(this).hasClass("row4") ) $(".row4").toggleClass('blue');
      if ($(this).hasClass("row5") ) $(".row5").toggleClass('blue');

    });

    $(".losange").click(function(){
      $(".row3, .col1").toggleClass('blue');
    });
