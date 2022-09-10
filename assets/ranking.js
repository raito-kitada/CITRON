$(window).on('load',function(){
    var ref_width=$('.recommend').find('.box-item').width();
    $('.ranking').find('.box-item').css("width",ref_width);
    console.log(ref_width);
    var ref_width=$('.recommend').find('.box-row').width();
    $('.ranking').find('.box-row').css({'justify-content':"normal",
    'border-radius':'0'});
});
$(window).resize( () => {
    var ref_width=$('.recommend').find('.box-item').width();
    console.log(ref_width);
    $('.ranking').find('.box-item').css("width",ref_width);
    var ref_width=$('.recommend').find('.box-row').width();
    $('.ranking').find('.box-row').css({'justify-content':"normal",
    'border-radius':'0'});
});