import Common from "../common"

export default () => {
  // コンフリクト回避
  jQmain(jQuery)
}

function jQmain($) {

  $(document).ready( () => {

    // DOM
    const $sidebar = $('.g-nav-wrap, #global-navigation, site-wraper')
    if ( !Common.jq_alive($sidebar) ) return

    const $switch = $('.sidebar-toggle-switch')
    if ( !Common.jq_alive($switch) ) return

    // 着脱するクラス名
    const toggle_class_name = 'sidebar-js-active'


    // 初期の動作
    /*
    $.when( () => {
      $sidebar.css({"transitionDuration" : "0s"});
    }).done( () => {
      $sidebar.toggleClass(toggle_class_name);
    });
    */

    // イベント登録
    let is_first = true
    $switch.on("click", () => {
      if (is_first) {
        $sidebar.css({"transitionDuration" : ".4s"})
        is_first = false
      }
      $sidebar.toggleClass(toggle_class_name)
    })

  })

}