////////////////////////////////////////
// JavaScript for posts page
////////////////////////////////////////

$(function() {
    //Executed When
    $('.js-menu-icon').click(function() {
        // This Self element
        // Next to div.js-menu-icon
        //toggle switches
        $(this).next().toggle();
    })
})