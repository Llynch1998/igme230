$(".menu").next(".items").hide(0);
$(".menu").click(function()
        {
            $(this).next(".items").slideToggle("fast");// can use keywords slow and fast to direct timing
        });

        //couldn't figure out AJAX but broke menus when left in
        //let content = ("article0.txt");  // sets default content
        //$("aside h2").val(content + " #h2"); // changes menu option to default
        //$("h2").load(content);   // retrieves only default element
       // $("input[name=article]").change(function() {//sets up on change event
           // content = $(this).val();//grabs current value
            //$("aside h2").load(content); //loads current menu val
        