import vue_ready from "../vue_ready"
import VueNavIndex from './top.vue'

export default () => {
  // コンフリクト回避
  jQmain(jQuery)
}

function jQmain($) {

  // DOM読み込み後
  $(document).ready( () => {

    // Vueを安全に起動
    vue_ready({
      el: '#app-contents-index-menu',
      template: '<VueNavIndex/>',
      components: { VueNavIndex }
    })

  })

}

