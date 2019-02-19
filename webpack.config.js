const entry_js = `./_src/js/index.js`;
const output_js = './html/js/script.min.js'

const merge = require('webpack-merge');


module.exports = (env, argv) => {

  //console.log(env);
  //console.log(argv);

  var is_dev = (argv.mode === 'development');
  //console.log(is_dev);

  var return_modules = {}

  // devtool
  if (is_dev) {
    return_modules = merge(return_modules,{
      devtool: 'source-map'
    });
  }

  // 入出力
  return_modules = merge(return_modules,{

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: entry_js,

    // ファイルの出力設定
    output: {
      // 出力ファイル名
      path: __dirname,
      filename: output_js
    },

    mode: argv.mode

  });


  // babel で ES2018
  return_modules = merge(return_modules,{
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.js$/,
          use: [
            {
              // Babel を利用する
              loader: 'babel-loader',
              // Babel のオプションを指定する
              options: {
                presets: [
                  // プリセットを指定することで、ES2018 を ES5 に変換
                  '@babel/preset-env',
                ]
              }
            }
          ]
        }
      ]
    }
  });


  console.log(return_modules);

  return return_modules;
};

