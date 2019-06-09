import * as VueReady from "../vue_ready";
import VueNavIndex from './top.vue';

( $ => {

  // DOM読み込み後
  $(document).ready( () => {

    // Vueを安全に起動
    VueReady.vue_ready(
      '#app-contents-index-menu',
      new VueNavIndex
    );

  });

})(jQuery);

