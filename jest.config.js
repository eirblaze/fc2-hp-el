/* eslint-disable node/no-extraneous-require */
// Jest
// @see [公式](https://jestjs.io/docs/ja/configuration)
// @see [この頃流行りのJestを導入して軽快にJSをテストしよう](https://qiita.com/hogesuke_1/items/8da7b63ff1d420b4253f)
module.exports = () => {
  const {defaults} = require('jest-config')
  const merge   = require('webpack-merge')

  // 基本設定
  let export_module = {}
  export_module = merge(export_module,{
    verbose: true,
    transformIgnorePatterns : [
      "<rootDir>/bower_components/",
      "<rootDir>/node_modules/"
    ],
    testMatch: [
      // テスト対象のファイル名にマッチする正規表現文字列の配列を明示
      // @see https://app.codegrid.net/entry/2018-jest-1
      "**/__tests__/**/*.?(m)[jt]s?(x)",
      //"**/?(*.)+(spec|test).?(m)[jt]s?(x)"
    ],
    moduleFileExtensions: [...defaults.moduleFileExtensions], // テスト対象の拡張子を列挙する
  })


  // JS (ECMAScript)
  export_module = merge(export_module,{
    transform: {
      "^.+\\.mjs$": "<rootDir>/node_modules/babel-jest",
      // <rootDir> : デフォルト: 設定ファイルまたは package.json を含むルートディレクトリ。あるいは、もし package.json が見つからなければ、pwd の結果を設定します。
    },
    moduleFileExtensions: ["mjs"], // テスト対象の拡張子を列挙する
  })


  // TypeScript
  export_module = merge(export_module,{
    transform: {
      '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest'
    },
  })


  // 出力
  //console.log(export_module);
  return export_module
}
