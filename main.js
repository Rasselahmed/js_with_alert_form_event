//focus
//blur
//change
//select
//submit


$(document).ready(function () {
    $('#fname, #lname').focus(function () {
        $(this).css('background', 'salmon');
    });
    $('#fname, #lname').blur(function () {
        $(this).css('background', '');
    });
    $('#language').change(function () {
        $(this).css('background', 'lime');
    });
    $('#testform').submit(function () {
        alert('Thank you');
    });
})