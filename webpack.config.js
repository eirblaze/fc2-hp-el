const path = require('path');
const entry_js = `./_src/js/index.js`;
const dist_path = './html/';
const output_js = 'js/script.min.js'

const webpack = require('webpack');
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
      filename: output_js,
      path: path.resolve(__dirname, dist_path),
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
                envName: argv.mode, // optionsのenvNameでBabelのモードを指定。省略するとBabelはdevelopmentモードで呼び出される
                comments: is_dev,
                presets: [
                  // プリセットを指定することで、ES2018 を ES5 に変換
                  '@babel/preset-env',
                ]
              }
            },
          ]
        }
      ]
    }
  });


  // jQuery CDN
  return_modules = merge(return_modules,{


    // 毎回インポートしなくてもいいように
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
	           $: "jquery",
	    }),
    ],


    // 外部にホスティングされているjQueryなどのパッケージを読み込んで使用する方法 http://elsur.xyz/webpack-jquery-ways-to-work#jQueryundefined
    externals: [
      {
        jquery: 'jQuery',
        //vegas: 'vegas'
      }
    ],


  });

  // Vue.js
  const { VueLoaderPlugin } = require('vue-loader');
  return_modules = merge(return_modules,{

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ]
    },

    resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [new VueLoaderPlugin()],

  });


  //console.log(return_modules);

  return return_modules;
};

