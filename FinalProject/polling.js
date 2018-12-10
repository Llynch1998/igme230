$(".choice").mouseover(function(){
    var A1 = anime({//this starts the anime animation 
    targets: this,//targets whichever optinon the person is over
    duration: 300,// this is the duration of the general animation
    scale: 1.1, //this controls how much bigger the item gets
    easing: "easeOutQuad" //makes the ani start at it's fastes point and slow down to a stop
})});
$(".choice").mouseout(function(event){//repeats the above animation but shrinks when the mouse leaves the item
    e = event.toElement || event.relatedTarget;//found on stack overflow
    if (e.parentNode == this || //checks to see if the element being hovered on is a child, if so it does nothing
                           e == this) {//stops the animation error when hovering over text
        return;//returns nothing so it won't execute the following animation causing a stutter
    }
    var A1 = anime({
    targets: this,
    duration: 300,
    delay: 200,
    scale: 1,
    easing: "easeOutQuad"
})});