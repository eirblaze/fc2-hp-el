import merge from 'webpack-merge'

export default (api) => {

  // console.log(api.env())

  // 基本設定
  let return_module = {
    sourceType: "module", // ECMAScript モジュールの文法を使用してファイルを解析します。ファイルは自動的に厳しく、import/export ステートメントは許可されます。
    comments: !api.env('production'),
  }

  // IE11
  return_module = merge(return_module, {
    presets: [
      [
        "@babel/preset-env", {
          corejs: 3,
          useBuiltIns: "entry",
        }
      ]
    ],
  })


  // TypeScript
  return_module = merge(return_module, {
    presets: [
      // TypeScriptのコードから、型アノテーションの部分などを取り除く変換を行う。 @see https://qiita.com/nacam403/items/edf3e2c8ff364aff910f
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

  // Jest
  if ( api.env('test') ) {
    return_module = merge(return_module, {
      plugins: [
        // import 構文を使う場合。Node.js は ES Modules (ESM) がまだちゃんと使えないと思うので、CommonJS形式に変換する方向で作業させると無難。もしくはそうしないと動いてくれない。 @see https://qiita.com/shohei_ot/items/2a21a833364f4ad40a57
        "transform-es2015-modules-commonjs",
      ]
    })
  }


  // 最終的な出力
  console.log(return_module)
  return return_module

}

