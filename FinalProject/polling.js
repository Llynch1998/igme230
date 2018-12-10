$(".choice").mouseover(function(){
    anime.remove(this);//this removes the previous animation so no error occurs
    anime({//this starts the anime animation 
    targets: this,//targets whichever optinon the person is over
    backgroundColor: "#bfff00",
    scale:{
        value: [1, 1.1],// the way to select the change of scale but only effect the scale duration
        duration: 300// this is the duration of the general animation
    } , //this controls how much bigger the item gets
    elasticity: 400
})});
$(".choice").mouseout(function(event){//repeats the above animation but shrinks when the mouse leaves the item
    e = event.toElement || event.relatedTarget;//found on stack overflow
    if (e.parentNode == this || //checks to see if the element being hovered on is a child, if so it does nothing
                           e == this) {//stops the animation error when hovering over text
        return;//returns nothing so it won't execute the following animation causing a stutter
    }
    anime.remove(this);
    anime({
        targets: this,
        scale: 1,//base input for scale to return to original size
        duration: 300,//if outside sets duration for entire ani
        backgroundColor: "#000000",
        elasticity: 400
      });
});
let changed = false;
$("#burgerbox").click(function(){
    anime.remove("#burgerborder");
    if(changed == false){
        anime({
            targets: "#burgerborder",
            backgroundColor: "#000000"
          }); 
          changed = true; 
    }
    else if(changed == true){
        anime({
            targets: "#burgerborder",
            backgroundColor: "#808080"
          });
          changed = false;
    }
    $("ul").slideToggle();
    
});
$("li").mouseover(function(){
    this.style.backgroundColor = "#808080"
});
$("li").mouseout(function(){
    this.style.backgroundColor = "darkgray"
})