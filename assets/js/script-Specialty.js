// ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

  //footer
$(function () {
  const now = new Date();
  console.log(now);

  const year = now.getFullYear();
  console.log(year);

  $("footer small").html("Copyright &copy;" + year + " .inc");
});