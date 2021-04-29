$(document).ready(function(){
    var parrafos=$(".pa3");
    var fotos=$(".foto1");
    var boton1=$(".boton1");
    var boton2=$(".foto2");

    parrafos.mouseenter(function(){
        $(this).fadeTo("fast",0.5);


});
    parrafos.mouseleave(function(){
        $(this).fadeTo("fast",1);
    });


    boton1.click(function(){
        $(fotos).hide();
    });

    boton2.mouseenter(function(){
        $(".foto2").css("background-color", "red");
    });

});