$(".top").click(function()
        {
            $(this).next(".list").slideToggle("fast");// can use keywords slow and fast to direct timing
});

/*first load the default article*/

$("article").load("article0.txt");


  /*get the radio button value*/

  /*v is the type being accessed. IE the radio button with a name 'story' */
$("input[name='story']").click(function(){
    $("article").load(this.value);/*loads the value into article from the radio button */
})
let clickCounter = 0;
$("#clickcount").html(clickCounter);//.html() sets the innerHTML to whatever value is in the parenthesis
$("#click").click(function(){
    clickCounter++;
    $("#clickcount").html(clickCounter);
})

//drop down menus will be links thursday or look like links
//also have hover and click
//extra credit probably have attribute value