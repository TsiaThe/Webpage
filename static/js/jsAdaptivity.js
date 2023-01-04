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
    var testSurface = windowCurrentWidth*windowCurrentHeight/1000;

    // If vertical menu is displayed and the user resizes, hide it
    if (windowCurrentWidth >= responsivewidth) {
        hideElements();
    }


    // jQuery function
    $(document).ready(function(){

    // Adjust the size of the emblym
    /* TBD var $photo = $('#torusImgID');
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
    */
    
    // Adjust the title height
        $titleHeight = $('.wrapperTitle');
        var wrapperTitleHeight= windowCurrentHeight/20;

        var wrapperTitleWidth= windowCurrentWidth/30;
        var tv = windowCurrentWidth/18;
        var tvtop = 0.2*tv;
        var tvbottom = 0.2*tv;
        var ta = tv/1.61803;
        var tabottom = 0.2*ta;
        var tot = (tv+ta+tvtop+tvbottom+tabottom);
       // $titleHeight.css("height", "7em");
   
    // Adjust the horizontal div-elements which represent the menu
    //if (wrapperTitleWidth>40) {wrapperTitleWidth=40;}
    $menuDivs = $('.dropdownDIVS');
    //$menuDivs.css("display", "none");

    var t = windowCurrentWidth/13;
    $menuDivs.css("width", t);
    $menuDivs.css("height", tv/7);
    $menuDivs.css("margin", tv/7);
   // $menuDivs.css("margin", t*1.61803/7);
    //$menuDivs.css("margin", 1.61803*t/10);
    //$menuDivs.css("border-width", wrapperTitleHeight/10);
    //$menuDivs.css("border-radius", wrapperTitleWidth);
 
    // Adjust the div of the torus image when menu is hidden
    $('#torusImageDIV').css("height", Math.max(wrapperTitleHeight, minimumheight));

     
    if (windowCurrentWidth<responsivewidth){   

    // Adjust the size of my name
    $('#myName').css("font-size", tv/1.2);
    $('#myName').css("padding-top", tvtop);
    $('#myName').css("padding-bottom", tvbottom);

    // $('#myName').css("padding-top", tvtop);
    // $('#myName').css("padding-bottom", tvbottom);
    
    // Adjust the size of my Profession
    $('#myProfession').css("font-size", ta/1.2); // windowCurrentWidth/40);
    //$('#myName').css("padding-top", 0);
    $('#myProfession').css("padding-bottom", tabottom);


    }
   else{ 
      }


    // Adjust the size of the LinkedIn and GitHub icons
    var $specialIcons = $('.specialIcons');
    //$specialIcons.css("display", "none");
    var fontSspecialIconsH = windowCurrentHeight/20;

    //if (fontSspecialIconsH>40){fontSspecialIconsH=40}
    //$specialIcons.css("height", Math.max(fontSspecialIconsH, minimumheight/3));
    //$specialIcons.css("height", $titleHeight.height());

    var titleHeight = $titleHeight.height();

    $specialIcons.css("height", titleHeight/2.5);
    $specialIcons.css("padding-top", titleHeight/20);
    //$specialIcons.css("margin", fontSspecialIconsH/10);
    //$specialIcons.css("padding", fontSspecialIconsH/10);

    // Group (image+text) of page
    // $('.Group').css("height",windowCurrentHeight/1.4);

    // Image size based on window dimensions
    // var img = document.getElementById("groupImageID");
    var elements = document.getElementsByClassName("groupImage");
    for (var i=0;i<elements.length;i++){
            var img = elements.item(i);
            img.width = windowCurrentHeight/1.5;
            img.height = windowCurrentHeight/1.5;
            if (img.width>windowCurrentWidth){
                img.width = windowCurrentWidth/1.01;  // The +1% needed to hide the horizontal slide-bar
                img.height = windowCurrentWidth/1.01; // 
            }
    }
    //}
    /*
    var img = document.getElementsByClassName("groupImage").item(0);
    img.width = windowCurrentHeight/1.5;
    img.height = windowCurrentHeight/1.5;
    if (img.width>windowCurrentWidth){
        img.width = windowCurrentWidth/1.01;  // The +1% needed to hide the horizontal slide-bar
        img.height = windowCurrentWidth/1.01; // 
    }
    */


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
