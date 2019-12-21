const merge   = require('webpack-merge')

module.exports = function(api) {

  // 基本設定
  let return_module = {
    sourceType: "module",
  }

  // IE11
  return_module = merge(return_module, {
    presets: [
      [
        "@babel/preset-env", {
          targets: {
            "ie": 11
          },

          // 必要なpolyfillだけをimportするようにします
          // 設定の仕方が変わってた。 http://babababand.hatenablog.com/entry/2019/04/24/125922
          useBuiltIns: "entry",

        }
      ]
    ],
  })


  // TypeScript
  return_module = merge(return_module, {
    presets: [
      "@babel/preset-typescript",
    ],
    plugins: [
      // @see https://qiita.com/nacam403/items/edf3e2c8ff364aff910f
      // TypeScriptの文法には既に含まれているけど、
      // 今はまだpreset-envには含まれていない文法も使えるようにしておく。
      // preset-envに含まれる日が来たら、これらのプラグインは不要になるはず。
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread"
    ]
  })
  // <-- NODE_ENV=testの場合のみpluginが有効になる
  if ( api.env("test") ) {
    return_module = merge(return_module, {
      plugins: [
        "transform-es2015-modules-commonjs",
      ]
    })
  }


  // 最終的な出力
  //console.log(return_module);
  return return_module

}

