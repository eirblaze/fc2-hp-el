import ContentSelector from './index.vue'
import * as VueReady from "../vue_ready";

( $ => {

  // DOM読み込み後
  $(document).ready( () => {

    // Vueを安全に起動
    VueReady.vue_ready({
      el: '#app-g-nav',
      template: '<ContentSelector/>',
      components: { ContentSelector }
    })

  });

})(jQuery);

