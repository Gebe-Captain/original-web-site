//ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//スライドショー
const img_src = ["./assets/img/ブルーメの丘.jpeg", "./assets/img/グリム コテージ.jpg", "./assets/img/近江日野商人館 外装.jpg", "./assets/img/綿向山.jpeg", "./assets/img/はま田 外装.jpg", "./assets/img/向町cafe 外装.jpg", "./assets/img/守貞cafe 外装.jpg", "./assets/img/日野祭 本祭1.jpg", "./assets/img/家紋.png", "./assets/img/日野菜漬け2.jpeg"];
        let num = -1;

        function slide_time() {
            if (num === 9) {
                num = 0;
            } else {
                num++;
            }
            document.getElementById("slide_img").src = img_src[num];
        }
        setInterval(slide_time, 1500);

//footer
$(function () {
    const now = new Date();
    console.log(now);

    const year = now.getFullYear();
    console.log(year);

    $("footer small").html("Copyright &copy;" + year + " .inc");
});