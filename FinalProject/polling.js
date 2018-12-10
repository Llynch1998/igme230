let question = "q1.txt";
$("#Question").load(question);
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
$(".choice").mouseout(function(){//repeats the above animation but shrinks when the mouse leaves the item
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
$("#burgerbox").click(function(){//when hamburger menu clicked changes color and makes the drop down display
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
$("li").mouseover(function(){//changes menu option color on hover
    this.style.backgroundColor = "#808080"
});
$("li").mouseout(function(){//changes when no longer hovering
    this.style.backgroundColor = "darkgray"
})

$("#A1").click(function (){
    anime.remove("#A2");
    anime({
        targets:"#A2",
        rotate: "1turn",
        scale:2,
        duration: 500,
        easing: "easeInSine",
        complete:function(){
            anime({
                targets: "#A2",
                duration:300,
                scale: 0,
                rotate:{
                    value: -1080,
                    duration: 3000,
                    
                },
                easing: "easeInQuad"
                
            })
        }
    })
    
});
$("#A2").click(function (){
    anime.remove("#A1");
    anime({
        targets:"#A1",
        rotate: "1turn",
        scale:2,
        duration: 500,
        easing: "easeInSine",
        complete:function(){
            anime({
                targets: "#A1",
                duration:300,
                scale: 0,
                rotate:{
                    value: -1080,
                    duration: 3000,
                    
                },
                easing: "easeInQuad"
                
            })
        }
    })
    
});
question = "q1.txt";
$("#Question").load(question);
$("li").click(function(){
    if($(this).attr("id") == "q1"){
        $("#Question").load("q1.txt");
        anime.remove("#A1");
        anime.remove("#A2");
        anime({ 
            targets: ["#A1", "#A2"],
            duration:0,
            scale:1
        })
    }
    else if($(this).attr("id") == "q2"){
        $("#Question").load("q2.txt");
        anime.remove("#A1");
        anime.remove("#A2");
        anime({ 
            targets: ["#A1", "#A2"],
            duration:0,
            scale:1
        })
    }
    else if($(this).attr("id") == "q3"){
        $("#Question").load("q3.txt");
        anime.remove("#A1");
        anime.remove("#A2");
        anime({ 
            targets: ["#A1", "#A2"],
            duration:0,
            scale:1
        })
    }
    
    
});