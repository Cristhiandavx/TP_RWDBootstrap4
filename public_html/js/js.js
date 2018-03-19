/*archivo con las funciones en JavaScript
 * @author Cristhiandavx*/
/*Utilizando JQuery*/
$(document).ready(function(){
    $("#configMenu-V").click(function(){
        console.log("cambiar al menu vertical");
        $("#vertical-nav, #horizontal-group").toggleClass("d-lg-none");
        $("#content").toggleClass("col-lg-10");
        $("#horizontal-group").toggleClass("d-lg-flex", "d-none");
    });
    $("#configMenu-H").click(function(){
        console.log("cambiar al menu horizontal");
        $("#vertical-nav, #horizontal-group").toggleClass("d-lg-none");
        $("#content").toggleClass("col-lg-10");
        $("#horizontal-group").toggleClass("d-lg-flex", "d-none");
    });
    $("#configIcon-E").click(function(){
        console.log("expandir menu");
        $(".etiqueta").toggleClass("d-lg-block");
        $("#content").toggleClass("col-lg-7");
        $("#vertical-nav").toggleClass("text-center");
        $("#configIcon-E").toggleClass("d-none");
        $("#configIcon-C").toggleClass("d-none");
    });
    $("#configIcon-C").click(function(){
        console.log("expandir menu");
        $(".etiqueta").toggleClass("d-lg-block");
        $("#content").toggleClass("col-lg-7");
        $("#vertical-nav").toggleClass("text-center");
        $("#configIcon-C").toggleClass("d-none");
        $("#configIcon-E").toggleClass("d-none");
    });
});