const merge   = require('webpack-merge');

// 共通設定
let export_module = {
  //root: true,
  extends: [
    "eslint:recommended", // おすすめ設定をまとめた公式プリセット
    //"plugin:node/recommended" // "type":"module"フィールドがpackage.jsonに存在する場合は、ファイルをESモジュールと見なします。そうでなければ、ファイルをCommonJSと見なします。さらに、*.mjsファイルをESモジュールと見なし、*.cjsファイルをCommonJS と見なします。
  ],
  plugins: [
    "node",
  ],
  parserOptions: {
    // ecmaVersion: 6を記載しても、ES2015(ES6) の新しいグローバル変数は定義されません (構文解析器のオプションなので)。他方でenv: {es6: true}を記載すると、構文解析器は ES2015(ES6) の構文を解析するようになり、かつES2015(ES6) の新しいグローバル変数が定義されます。envは複合的な設定セットなのです。
    ecmaVersion: 2018, // そのため、できる限りparserOptionsよりもenvを使うようにしましょう。 https://qiita.com/mysticatea/items/8bcecd821cca9e849078#-%E6%96%B0%E3%81%97%E3%81%84-ecmafeatures
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true, // 推奨 : https://qiita.com/mysticatea/items/8bcecd821cca9e849078#-%E6%96%B0%E3%81%97%E3%81%84-ecmafeatures
  },
  rules: {

    // セミコロン
    // @see https://qiita.com/mysticatea/items/9da94240f29ea516ae87
    //semi: "warn",
    semi: ["warn", "never", {
      //"omitLastInOneLineBlock": true,
      "beforeStatementContinuationChars": "always"
    }],
    "semi-spacing": ["error", { "after": true, "before": false }],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",

    // コンソールログ
    "no-console": "off",
    "no-restricted-syntax": [
        "error",
        {
            "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
            "message": "Unexpected property on console object was called"
        }
    ],

    // Node.js のバージョン。
    "node/no-unsupported-features/es-builtins": ["error", {
      "version": ">=12.0.0",
      "ignores": []
    }],

    // exportsが混ざってないかどうか検出。混ざってるとどっちか消えるため。
    "node/exports-style": ["error", "module.exports"],

    // ???
    "node/no-deprecated-api": "error",

    // import の名前解決
    "node/no-missing-import": ["error", {
      "resolvePaths": [__dirname],
      "tryExtensions": [".js", ".json", ".node", ".ts", ".jsx", ".tsx", ".mjs"]
    }],
    "node/no-missing-require": ["error", {
      "resolvePaths": [__dirname],
      "tryExtensions": [".js", ".json", ".node", ".ts", ".jsx", ".tsx", ".mjs"]
    }],

    // その他の設定
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
};

// JSX
export_module = merge(export_module, {
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    }
  }
});


// jQuery CDN
export_module = merge(export_module, {

  // グローバル変数登録
  globals: {
    "jQuery": false,
    "$"     : false,
    "Vue"   : false,
  },

});


// Jest
export_module = merge(export_module, {
  plugins: [
    "jest",
  ],
  env: {
    "jest/globals": true
  }
});


// TypeScript
export_module = merge(export_module, {
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser", // 英英辞書 最初のステップでは、検索スペースに索引が含まれている場合、パーサーは検索照会を評価し、検索照会内の単語と属性、および索引の有効範囲に基づいてデータ構造を作成します。
});

// 出力
//console.log(export_module);
module.exports = export_module;
