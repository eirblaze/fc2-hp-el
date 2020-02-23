// 戻れるスムーズスクロール
export default () => {
  // コンフリクト回避
  jQmain(jQuery)
}

function jQmain($) {
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

      $('body,html').animate({
        scrollTop : target.offset().top
      }, speed, 'swing')

      return
    })

  })

}
