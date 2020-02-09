/**
 *  JavaScriptでGETパラメーターを取得する
 *  @see https://qiita.com/Evolutor_web/items/c9b940f752883676b35d
 *
 *  @return     パラメータのObject
 *
 */
export default () => {
  let vars = {}
  const param = location.search.substring(1).split('&')
  for(let i = 0; i < param.length; i++) {
    let keySearch = param[i].search(/=/)
    let key = ''
    if(keySearch != -1) key = param[i].slice(0, keySearch)
    const val = param[i].slice(param[i].indexOf('=', 0) + 1)
    if(key != '') vars[key] = decodeURI(val)
  }
  return vars
}