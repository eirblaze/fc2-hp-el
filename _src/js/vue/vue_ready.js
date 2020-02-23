import Common from "../common"
// import Vue from "vue"

/**
 * Vue準備
 *
 * Vue用の引数（オブジェクト）を受け取り、Vueを準備する。
 * 失敗時は何もせず、空オブジェクトを返す
 *
 * @param {Vue arg} i__vue_args
 * @return Vueのハンドル。失敗時は何もせず、空オブジェクトを返す
 */
export default (i__vue_args) => {
  // コンフリクト回避
  jQmain(jQuery,i__vue_args)
}

function jQmain($,i__vue_args) {
  $(document).ready( () => {

    // Vue対象を取得
    // 存在しなければ終了、空オブジェクトを返す
    if ( ! Common.jq_alive( $(i__vue_args.el) ) ) return {}

    return new Vue(i__vue_args)

    // ローカル関数 --------------------------------------------------------------------------------------------


  })
}

