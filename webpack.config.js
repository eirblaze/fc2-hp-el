// filename
const entry_js = 'index.mjs'
const dist_js = 'js/script.min.js'
const dist_css = 'css/style.min.css'

// Path
const entry_path = './_src/js/'
const dist_path = './docs/'
const dev_sv_base_path = './docs/'

// URL
const dev_sv_js_url    = '/' // devServerルートに対するバンドルのパス。outputに定義する。


// Pulgins
const path    = require('path')
const webpack = require('webpack')
const merge   = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {

  // var init
  let return_modules = {}
  let arg__ProvidePlugin = {}


  // devtool
  return_modules = merge(return_modules,{
    mode: argv.mode
  })

  // is_dev
  const is_dev = (argv.mode != 'production')

  // source-map
  if (is_dev) {
    return_modules = merge(return_modules,{
      devtool: 'source-map'
    })
  }


  // 入出力
  return_modules = merge(return_modules,{

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
      main: path.resolve(__dirname, entry_path, entry_js),
    },

    // ファイルの出力設定
    output: {
      // 出力ファイル名
      path: path.resolve(__dirname, dist_path),
      filename: dist_js,
    },

  })

  // 拡張子省略
  return_modules = merge(return_modules,{
    resolve: {
      // importの際に拡張子を省略して記述できるようにる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      // in webpack 2.2 default resolve .js .json - https://github.com/vuejs/vue-loader/issues/685
      extensions: ['*', '.js', '.json', '.mjs', '.ts']
    },
  })


  // Babel + TypeScript
  // [公式](https://babeljs.io/)
  // [【５分でなんとなく理解！】Babel入門](https://qiita.com/Shagamii/items/a87181c22ea777ee2acc)
  return_modules = merge(return_modules,{
    module: {
      rules: [
        {
          test: /\.m?[jt]s$/,
          exclude: /node_modules/, // babelを通さないディレクトリ
          loader: "babel-loader",
          options: {
            // 構成のロード中に使用されている現在のアクティブ環境。この値は"env"設定を解決するときのキーとして使われ、また設定機能、プラグイン、そしてプリセットの中でapi.env()関数を通して利用可能です 。 @see https://babeljs.io/docs/en/options
            envName: argv.mode,
            comments: is_dev,
          },
        }
      ]
    }
  })


  // webpack-dev-server
  // @see https://webpack.js.org/configuration/dev-server/
  // @see https://qiita.com/riversun/items/d27f6d3ab7aaa119deab
  return_modules = merge(return_modules,{
    output: {
      publicPath: dev_sv_js_url, // バンドルファイルまでのlocalhost上のURLを、ここでも定義しておく。 @see http://mk.hatenablog.com/entry/2017/08/18/020918
    },
    devServer: {

      // たまに出るCORSエラー対策
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

      // サーバー設定
      contentBase       : path.join(__dirname, dev_sv_base_path), // リソース・コンテンツ(htmlファイルなど)と自動読み込み
      host              : '0.0.0.0',
      port              : 8080,

      // ページ設定
      openPage          : 'index.html',
      //open: 'Chrome',

      compress          : true,

      // HMR (ホットリロード) 全般設定
      hot: true,
      watchContentBase  : true, // コンテンツベースに置かれたファイル(htmlやcssなど)の変更を監視する
      inline            : true, // オートリフレッシュ(自動再読込)をiframeモードで実行する

      // HMR (ホットリロード) 出力先設定
      publicPath        : dev_sv_js_url, // バンドルにアクセスするためのpublicPathの指定(localhost上のURL)
      filename          : dist_js,

    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  })


  // jQuery CDN
  return_modules = merge(return_modules,{

    // 外部にホスティングされているjQueryなどのパッケージを読み込んで使用する方法 http://elsur.xyz/webpack-jquery-ways-to-work#jQueryundefined
    externals: [
      {
        jquery: 'jQuery'
      }
    ],

  })
  // 毎回インポートしなくてもいいように
  arg__ProvidePlugin = merge(arg__ProvidePlugin,{
    jQuery: "jquery",
         $: "jquery",
  })


  // CSS

  // use配列で指定したLoaderが後ろから順番に適用されます。 @see https://ics.media/entry/17376/
  let css_loaders = []

  // CSS を バンドルに埋める
  //css_loaders = [
  //  ...css_loaders,
  //  {
  //    loader: "style-loader",
  //  },
  //];

  // CSS を 外部に出力する
  css_loaders = [
    ...css_loaders,

    // use配列で指定したLoaderが後ろから順番に適用されます。 @see https://ics.media/entry/17376/
    // 別ファイルで出すとき
    // @see https://github.com/webpack-contrib/mini-css-extract-plugin
    // @see https://www.expexp.jp/webpack/
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // you can specify a publicPath here
        // by default it uses publicPath in webpackOptions.output
        publicPath: dev_sv_js_url,
        filename: dist_css,
        hmr: is_dev, // ホットモジュールリロード (HMR)
      },
    },
  ]

  css_loaders = [
    ...css_loaders,
    {
      loader: "css-loader",
      options: {
        url: false,
        sourceMap: is_dev, // ソースマップの利用有無
      }
    }
  ]
  if (!is_dev) {
    css_loaders = [
      ...css_loaders,
      {
        loader: "postcss-loader",
        options: {
          sourceMap: is_dev, // PostCSS側もソースマップを設定
        }
      }
    ]
  }
  return_modules = merge(return_modules,{
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            ...css_loaders,
          ],
        }
      ]
    }
  })
  const sass_loaders = [
    {
      loader: "sass-loader",
      options: {
        sourceMap: is_dev, // ソースマップの利用有無
      }
    }
  ]
  return_modules = merge(return_modules,{
    module: {
      rules: [
        {
          test: /\.s[ac]ss/,
          use: [
            ...css_loaders,
            ...sass_loaders,
          ],
        }
      ]
    }
  })

  // Vue.js
  const { VueLoaderPlugin } = require('vue-loader')
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
      // aliasの設定をすることで `import Vue from 'vue/dist/vue';` を `import Vue from 'vue';` とかけるようになる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      alias: {
        'vue$': 'vue/dist/vue.esm.js', // ES Module (バンドラ用)
        //'vue$': 'vue', // CDN
      },

      // extentionsに「.vue」を追加することでimportの際に拡張子を省略して記述できるようにる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      // in webpack 2.2 default resolve .js .json - https://github.com/vuejs/vue-loader/issues/685
      extensions: ['*', '.js', '.vue', '.json']
    },
  })
  // 毎回インポートしなくてもいいように
  arg__ProvidePlugin = merge(arg__ProvidePlugin,{
    Vue: [
      'vue/dist/vue.esm.js', // ES Module (バンドラ用)  @see https://qiita.com/re-fort/items/972d9a6cdc5c00864a6e
      //'vue', // CDN
      'default' // 読み込むプロパティ
    ]
  })

  // プラグイン
  return_modules = merge(return_modules,{
    plugins: [

      // 毎回インポートしなくてもいいようにするプラグイン。最後に組み立てる。
      new webpack.ProvidePlugin(arg__ProvidePlugin),

      // CSS 別ファイルで出力
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: dist_css,
        //chunkFilename: '[id].css',
        //ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ]
  })

  //console.log(return_modules);
  return return_modules
}
