import * as Common from "../common";

/**
 * Vue準備
 *
 * Vue用の引数（オブジェクト）を受け取り、Vueを準備する。
 * 失敗時は何もせず、空オブジェクトを返す
 *
 * @param {String} i__el 描画先のDOMを表す文字列
 * @param {Vue App} i__App
 *
 * @return Vueのハンドル。失敗時は何もせず、空オブジェクトを返す
 */
export function vue_ready(i__el, i__App) {

  // jQueryコンフリクト回避
  ( $ => {

    // Vue対象を取得
    // 存在しなければ終了、空オブジェクトを返す
    if ( ! Common.jq_alive( $(i__el) ) ) return {}

    // eslint-disable no-new -- ESLint は JavaScript のための静的検証ツールです。 https://qiita.com/mysticatea/items/f523dab04a25f617c87d
    let ret__App = new Vue({
      render: hyperscript => hyperscript(i__App) // [Vue.jsのrender: h => h(App)について調べた](https://qiita.com/teinen_qiita/items/ed1bb1909a17f9ca9daa)
    })
    ret__App.$mount(i__el);

    return ret__App;


    // ローカル関数 --------------------------------------------------------------------------------------------


  })(jQuery);
}

