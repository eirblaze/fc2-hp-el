// 戻れるスムーズスクロール
( ($) => {

  // DOM読み込み後
  $(document).ready( () => {

    $('a').click(function(event) {
      // ページ内リンクかどうかを判別。ページ内ではないときは、リンクを通常動作にする。
      console.log(`link: ${event.target.href}`)
      console.log(location.href)
      //return

      // ここからコピー @see https://qiita.com/Takuya_Kouyama/items/b815eb5e1f85d819b4d8
      const speed = 400
      const href= $(this).attr("href")

      const target = $(href == "#" || href == "" ? 'html' : href)

      const position = target.offset().top
      $('body,html').animate({scrollTop:position}, speed, 'swing')

      return
    })

  })

})(jQuery)
