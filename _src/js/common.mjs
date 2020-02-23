//
// 共通関数
//

/**
 * jQueryオブジェクトを受け取り、中身が存在するかどうかチェック。
 * 存在するときtrueを返す。
 *
 * じつはこの関数自体はjQueryに依存していない。
 *
 * @param {jQueryオブジェクト} $__dom
 */
export default {
  jq_alive : ($__dom) => {
    //console.log($(i__vue_args.el));

    // 存在しないとき(デフォルト)
    let ret__jq_alive = false

    // 存在するときは、デフォルトを書き換える。
    if ( $__dom.length > 0 ) {
      ret__jq_alive = true
    }

    // 結果を返す
    return ret__jq_alive
  },
}
