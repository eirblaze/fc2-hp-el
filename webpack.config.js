const path = require('path');
const entry_js = `./_src/js/index.js`;
const dist_path = './docs/';
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
        jquery: 'jQuery'
      }
    ],


  });


  // CSS
  return_modules = merge(return_modules,{
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  });


  // SASS/SCSS
  return_modules = merge(return_modules,{
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }]
    }
  });


  // Vue.js
  const { VueLoaderPlugin } = require('vue-loader');
  return_modules = merge(return_modules,{

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        },
      ]
    },

    resolve: {
      /*
      // aliasの設定をすることで `import Vue from 'vue/dist/vue';` を `import Vue from 'vue';` とかけるようになる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      },
      */

      // extentionsに「.vue」を追加することでimportの際に拡張子を省略して記述できるようにる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      // in webpack 2.2 default resolve .js .json - https://github.com/vuejs/vue-loader/issues/685
      extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [

      new VueLoaderPlugin(),

      // 毎回インポートしなくてもいいように
      new webpack.ProvidePlugin({
        Vue: [
          //'vue/dist/vue.esm.js', //ES Modulesを指定  @see https://qiita.com/re-fort/items/972d9a6cdc5c00864a6e
          'vue', // CDN
          'default' // 読み込むプロパティ
        ]
	    }),

    ],

    // 外部にホスティングされているjQueryなどのパッケージを読み込んで使用する方法 http://elsur.xyz/webpack-jquery-ways-to-work#jQueryundefined
    externals: [{
      vue: 'Vue'
    }],

  });


  //console.log(return_modules);

  return return_modules;
};

