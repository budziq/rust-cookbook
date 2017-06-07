$( document ).ready(function() {

    // Add an edit button between the sidebar toggle and theme selector
    $("<i id=\"edit-button\" class=\"fa fa-edit\">Edit</i>").insertAfter("#sidebar-toggle")

    // the edit button will forward to GitHub inline edit page
    $("#edit-button").click(function(){
        var fname = window.location.pathname;
        // find out original fileneme from which the page was generated
        fname = fname.substring(fname.lastIndexOf('/')+1).replace(/\.[^\.]+$/,".md");
        // assume the landing page if none other can be guessed
        fname = fname ? fname : "intro.md"
        var editWindow = window.open("https://github.com/brson/rust-cookbook/edit/master/src/" + fname);
    });
});
