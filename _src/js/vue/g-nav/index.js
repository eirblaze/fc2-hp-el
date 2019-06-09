import * as VueReady from "../vue_ready";
import VueNavIndex from './nav.vue';

( $ => {

  // DOM読み込み後
  $(document).ready( () => {

    // Vueを安全に起動
    VueReady.vue_ready(
      '#app-g-nav',
      new VueNavIndex
    );

  });

})(jQuery);

