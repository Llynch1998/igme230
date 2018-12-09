$(".menu").next(".items").hide(0);
$(".menu").click(function()
        {
            $(this).next(".items").slideToggle("fast");// can use keywords slow and fast to direct timing
        });

        
        let content = ("content1.txt");  // sets default content
        $("#choose-content").val(content); // changes menu option to default
        $("#content").load(content);   // retrieves only default element
        $("#choose-content").change(function() {//sets up on change event
            content = $(this).val();//grabs current value
            $("#content").load(content); //loads current menu val
        });