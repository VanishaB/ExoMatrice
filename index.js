$(document).ready(function(){
    $("div1").click(function(){
        $(".form").addClass("important blue");
    });
});

$(document).ready(function(){
    $("div2").click(function(){
        $(".form").removeClass("blue");
    });
});

$( ".rond" ).click(function() {
  $( this ).toggleClass( "blue" );
});

           
