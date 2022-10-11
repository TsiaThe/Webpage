// ------------------------------------------------------------------
// Author: Theofanis Tsiantas
// Developemt span: 27.12.2021 - 05.01.2022
// Description:
// The following js-functions were used at the HTML_Mockup webpages
// of the same name during testing of the backend and the communication.
// ------------------------------------------------------------------
var responsivewidth = 1000; // Measured in pixels, must be the same as  in the base.settings.scss
var minimumheight = 100;    // Measured in pixels
// ------------------------------------------------------------------

// ==================================================================
//                    Funcction: verticalMenuShow
//                    ---------------------------
// This function shows or hides the vertical menu when the user clicks 
// on the 3 divs. It uses jQuery, too.
// ==================================================================
function verticalMenuShow() {

    // jquery funciton
    $(document).ready(function(){
        
        var $dropDownContentID = $('#dropdownContent_id');
        var topMenuDIVWdth = $('#menuDIV1').width();

        // Show content, if hidden
        if ($dropDownContentID.css("display")=="none"){
            $dropDownContentID.css("display","block");
            var listElements = document.getElementsByClassName("listElementV");
            for (i = 0; i < listElements.length; i++) {
                var currentElement = listElements[i];
                currentElement.style.display ="block";
            }
            // Change the width of the last two div-elements by clicking
            $('#menuDIV2').css("width",2*topMenuDIVWdth/3);
            $('#menuDIV3').css("width",1*topMenuDIVWdth/3);
        } // Hide content, if shown
        else{
            // Reset the width of the last two div-elements by clicking
            $('#menuDIV2').css("width",topMenuDIVWdth);
            $('#menuDIV3').css("width",topMenuDIVWdth);
            hideElements();
        }
    }
)
}

// ==================================================================
//                       Funcction: hideElements
//                       -----------------------
// This function hides all vertical menu items. It is used when the 
// menu button is re-clicked or if the window width>responsive width.
// ==================================================================
function hideElements(){
    //document.getElementById("dropdownContent_id").style.display="none";
    $('#dropdownContent_id').css("display","none");

    var listElements = document.getElementsByClassName("listElementV");
    for (i = 0; i < listElements.length; i++) {
        var currentElement = listElements[i];
        if (currentElement.style.display ="block") {
            currentElement.style.display ="none";
        }
    }
}

// ==================================================================
//                       Funcction: addaptiveResponse
//                       -----------------------
// This function will make adjustments to the various page elements 
// based on their id and/or class, whenever the window is resized.
// It uses jQuery, too.
// ==================================================================
// Set both event handlers to same function.
window.onload = window.onresize = addaptiveResponse;
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

        // Adjust the title height
        var $photo = $('#torusImgID');
        var photoWidth = windowCurrentWidth/3;
        if (photoWidth>500){
            photoWidth=500;
        }

        $photo.css("width", photoWidth);
        $photo.css("height", photoWidth);

        var photoPadding = 0.5*(windowCurrentWidth-photoWidth);
        $photo.css("padding-left", photoPadding);
        // ----- CHECK -----



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


        // --------------------------------------------
        // TEMP
        // --------------------------------------------

        var $temp = $('.temp');
        var img = document.getElementById("groupImage");


        img.width = windowCurrentHeight/1.5;
        img.height = windowCurrentHeight/1.5;
        if (img.width>windowCurrentWidth){
            img.width = windowCurrentWidth/1.01;  // The +1% needed to hide the horizontal slide-bar
            img.height = windowCurrentWidth/1.01; // 
        }


        $('.Group').css("height",windowCurrentHeight/1.4);
        

        var $firstBlock = $('.groupText');
        $firstBlock.css("top", 0);

        var $h5 = $("h5");
        $h5.css("margin-top", windowCurrentHeight/40);
        $h5.css("margin-bottom", windowCurrentHeight/40);
    
        var $p = $("p");
        $p.css("margin-top", 0);
        
        $("#hid").css("width", windowCurrentWidth);
        // TEMP
    });



}