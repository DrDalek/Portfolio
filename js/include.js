$(function(){
    $('[id$="-include"]').each(function(e){
        var htmlFile = $(this).attr("id").split('-')[0] + '.html';
        $(this).load("..\\includes\\" + htmlFile);
    });
});