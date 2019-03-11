import ContentSelector from './content-selector.vue'

( $ => {

  $(document).ready( () => {

    // DOM読み込み後の処理

    // eslint-disable no-new -- ESLint は JavaScript のための静的検証ツールです。 https://qiita.com/mysticatea/items/f523dab04a25f617c87d
    new Vue({
      el: '#content-selector',
      template: '<ContentSelector/>',
      components: { ContentSelector }
    })

  });

})(jQuery);

