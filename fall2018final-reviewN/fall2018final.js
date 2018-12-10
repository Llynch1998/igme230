$(".top").click(function(){ //click on .top (menu)
    $(this).next(".list").slideToggle(); //only effects the next set of submenus
    });

//load default article into article element
$("article").load("article0.txt");

//get value of clicked radio button and load in article element
//attribute name = "story"
//atribute selectors: https://www.w3schools.com/css/css_attribute_selectors.asp
$("input[name='story']").click(function(){ //should select only the radio buttons
    //this always refers to what triggered the function
    let article = $(this).val();
    $("article").load(article);
});

//when you click on the button, increases the counter
let count = 0; //defining it inside the function would reset it every time the function ran, this way, it will incriment and stay incrimented
 $("#clickcount").html(count); //puts a zero there on page load
$("#click").click(function(){
    count++;
    $("#clickcount").html(count);
});

// styling links: https://www.w3schools.com/css/css_link.asp