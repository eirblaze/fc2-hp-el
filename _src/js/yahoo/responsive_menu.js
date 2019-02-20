( $ => {

  $(document).ready( () => {

    // 着脱するクラス名
    var toggle_class_name = 'sidebar-js-active';

    // DOM
    var $sidebar = $('.g-nav-wrap, #global-navigation, site-wraper');
    var $switch = $('.sidebar-toggle-switch');

    // 初期の動作
    /*
    $.when( () => {
      $sidebar.css({"transitionDuration" : "0s"});
    }).done( () => {
      $sidebar.toggleClass(toggle_class_name);
    });
    */

    // イベント登録
    var is_first = true;
    $switch.on("click", () => {
      if (is_first) {
        $sidebar.css({"transitionDuration" : ".4s"});
        is_first = false;
      }
      $sidebar.toggleClass(toggle_class_name);
    });

});

})(jQuery);