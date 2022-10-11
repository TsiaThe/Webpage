// ------------------------------------------------------------------
// Author: Theofanis Tsiantas
// Description:
// ???
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