$(document).ready(function(){
    const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
    var flag = 'close';
    var ham_flag = 'close';
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
        //display:noneではなく、visibility:hidden を使うことによってスライドして出てくるようになる
        nav.css('visibility','');
        //toggleClsssでactiveクラスを付け外し:addClassとremoveClassの切り替えを行う
        ham.toggleClass('active');
        nav.toggleClass('active');
        if(flag == 'close'){
            ham.html('Menu ×');
            flag = 'open';
        }else{
            ham.html('Menu +');
            flag = 'close';
        }
        ham_flag = 'open';
    });
    //スクロールしたときにハンバーガーメニューを畳む
        //$(window).scroll( function ()  {　と同じ
        $(window).scroll( () => {
            if(ham_flag == 'open'){
                ham.toggleClass('active');
                nav.toggleClass('active');
                if (flag == 'close') {
                    ham.html('Menu ×');
                    flag = 'open';
                } else {
                    ham.html('Menu +');
                    flag = 'close';
                }
                ham_flag = 'close';
            }
        });
});