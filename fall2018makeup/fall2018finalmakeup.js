/*****************Menu Toggle*****************/
$(".menu").click(function(){
    $(this).next(".submenu").slideToggle();
});
/*****************Menu Toggle*****************/

/****************Story Loader*****************/
$("#story").load("story0.txt");
$("#stories li").click(function(){
    $("#story").load(this.id);
})
/****************Story Loader*****************/

/****************Color Changer****************/
$("#colors li").click(function(){
    $("#source").css("background-color", this.id);
})
/****************Color Changer****************/


let clickCounter = 0;
$("#currentcount").html(clickCounter);
$("#increment").click(function(){
    clickCounter += 1;
    $("#currentcount").html(clickCounter);
});