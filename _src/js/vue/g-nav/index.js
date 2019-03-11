import ContentSelector from './content-selector.vue'
import Vue from 'vue'

( $ => {

  // DOM読み込み後
  $(document).ready( () => {

    // Vue対象を取得
    var $app_g_nav = $('#app-g-nav')

    // 存在しなければ終了
    if ( $app_g_nav.length <= 0 ) return
    console.log($app_g_nav);


    // eslint-disable no-new -- ESLint は JavaScript のための静的検証ツールです。 https://qiita.com/mysticatea/items/f523dab04a25f617c87d
    new Vue({
      el: $app_g_nav,
      template: '<ContentSelector/>',
      components: { ContentSelector }
    })


  });

})(jQuery);

