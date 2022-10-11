// ------------------------------------------------------------------
// Author: Theofanis Tsiantas
// Description:
// ?????
// ------------------------------------------------------------------
var responsivewidth = 1000; // Measured in pixels, must be the same as  in the base.settings.scss
var minimumheight = 100;    // Measured in pixels
// ------------------------------------------------------------------

// ==================================================================
//                       Funcction: addaptiveResponse
//                       -----------------------
// This function will make adjustments to the various page elements 
// based on their id and/or class, whenever the window is resized.
// It uses jQuery, too.
// ==================================================================
// Set both event handlers to same function.
window.onload = window.onresize = window.ondeviceorientation = addaptiveResponse;
function addaptiveResponse() {

    // General size variables
    var windowCurrentWidth = window.innerWidth;
    var windowCurrentHeight = window.innerHeight;

    // If vertical menu is displayed and the user resizes, hide it
    if (windowCurrentWidth >= responsivewidth) {
        hideElements();
    }

    // jQuery function
    $(document).ready(function(){

        // Adjust the size of the emblym
        var $photo = $('#torusImgID');
        var photoWidth = windowCurrentWidth/3;
        if (photoWidth>500){
            photoWidth=500;
        }

        // Make it square
        $photo.css("width", photoWidth);
        $photo.css("height", photoWidth);

        // Add some padding
        var photoPadding = 0.5*(windowCurrentWidth-photoWidth);
        $photo.css("padding-left", photoPadding);

        // Adjust the title height
        $titleHeight = $('.wrapperTitle');
        var wrapperTitleHeight= windowCurrentHeight/8;
        var wrapperTitleWidth= windowCurrentWidth/10;
        $titleHeight.css("height", Math.max(wrapperTitleHeight, minimumheight));
        
        // Adjust the horizontal div-elements which represent the menu
        if (wrapperTitleWidth>40) {wrapperTitleWidth=40;}
        $menuDivs = $('.dropdownDIVS');
        $menuDivs.css("width", wrapperTitleWidth);
        $menuDivs.css("margin", wrapperTitleHeight/10);
        $menuDivs.css("border-width", wrapperTitleWidth/7);
        $menuDivs.css("border-radius", wrapperTitleWidth/7);

        // Adjust the div of the torus image when menu is hidden
        $('#torusImageDIV').css("height", Math.max(wrapperTitleHeight, minimumheight));

        // Adjust the size of my name
        $('#myName').css("font-size", windowCurrentWidth/15);
        $('#myName').height(); // This command update the height of h1 when resizing

        // Adjust the size of my Profession
        $('#myProfession').css("font-size", windowCurrentWidth/30);
        $('#myProfession').height(); // This command update the height of h1 when resizing

        
        // Adjust the size of the LinkedIn and GitHub icons
        var $specialIcons = $('.specialIcons');
        var fontSspecialIconsH = windowCurrentHeight/20;
        if (fontSspecialIconsH>40){fontSspecialIconsH=40}
        $specialIcons.css("height", Math.max(fontSspecialIconsH, minimumheight/3));
        $specialIcons.css("margin", fontSspecialIconsH/10);
        $specialIcons.css("padding", fontSspecialIconsH/10);

        // Group (image+text) of page
        $('.Group').css("height",windowCurrentHeight/1.4);

        // Image size based on window dimensions
        var img = document.getElementById("groupImage");
        img.width = windowCurrentHeight/1.5;
        img.height = windowCurrentHeight/1.5;
        if (img.width>windowCurrentWidth){
            img.width = windowCurrentWidth/1.01;  // The +1% needed to hide the horizontal slide-bar
            img.height = windowCurrentWidth/1.01; // 
        }

        // Text in relation to image
        var $groupText = $('.groupText');
        $groupText.css("top", 0);

        // Making the header distances inside the group a bit smaller
        var $h5 = $("h5");
        $h5.css("margin-top", windowCurrentHeight/40);
        $h5.css("margin-bottom", windowCurrentHeight/40);

        // Horizontal line separator - make long enough
        $("#hid").css("width", windowCurrentWidth);
        
    });



}