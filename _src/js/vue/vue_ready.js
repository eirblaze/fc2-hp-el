import * as Common from "../common";

/**
 * Vue準備
 *
 * Vue用の引数（オブジェクト）を受け取り、Vueを準備する。
 * 失敗時は何もせず、空オブジェクトを返す
 *
 * @param {Vue arg} i__vue_args
 * @return Vueのハンドル
 */
export function vue_ready(i__vue_args) {

  // jQueryコンフリクト回避
  ( $ => {

    // Vue対象を取得
    // 存在しなければ終了
    if ( ! Common.jq_alive( $(i__vue_args.el) ) ) return {}

    // eslint-disable no-new -- ESLint は JavaScript のための静的検証ツールです。 https://qiita.com/mysticatea/items/f523dab04a25f617c87d
    return new Vue(i__vue_args)


    // ローカル関数 --------------------------------------------------------------------------------------------


  })(jQuery);
}

