/* Don't use <script> tags in a linked js file! */
$(".menuitem").next().hide(0);
$(".menuitem").click(function()
        {
            $(".menuitem").next().toggle("fast");// can use keywords slow and fast to direct timing
        });

        