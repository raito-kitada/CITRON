$(document).ready(function(){
    const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
    console.log(ham); //コンソール画面でokというメッセージが出る
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    console.log("ok!"); //コンソール画面でokというメッセージが出る
    });
});