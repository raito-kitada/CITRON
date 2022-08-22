$(document).ready(function(){
    $(window).resize( () => {
        var ref_width=$('.brand').find('.box-item').width();
        console.log(ref_width);
        $('.ranking').find('.box-item').css("width",ref_width);
        var ref_width=$('.brand').find('.box-row').width();
        $('.ranking').find('.box-row').css("width",ref_width*2.5);
    });
});