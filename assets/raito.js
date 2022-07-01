window.addEventListener("DOMContentLoaded",function(){
  //topbackボタンも大きさ取得
  const topbackimg_height=$("#topback").height();
  //footerまでの高さを取得
  const footer_offset = $(".citron_footer").offset();
  //footer要素のちょうど上にtopbackボタンを設置するための高さを取得
  const topback_pos=footer_offset.top-topbackimg_height;
  $("#topback").css({"top":topback_pos.toString()+"px"});
  //console.log(PageTopBtn);
  //PageTopBtnがクリックされると以下のイベント発動
  const PageTopBtn = document.getElementById("topback");
  PageTopBtn.addEventListener('click', () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });


});
