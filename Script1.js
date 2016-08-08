$(document).ready(function() {
        $('.sub').hide(); // hide sub-navigation on pageload
        $dir1 = "/home/";                 // set main home directory
        $myCurrentDir = getCurDirr();     // set the current user directory
        $userVar = $get_username();      // current user's username
        /** check for a click event on an anchor inside .itm div
              prevent the default link action so the page doesn't change on click
              access the parent element of .itm followed by the next .sub list to toggle open/close
        **/
      
        $('.itm a').live('click', function(e){
        e.preventDefault();
        $(this).parent().next('.sub').slideToggle('fast');
       });
});