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
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin')

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
      extensions: ['*', '.js', '.json', '.mjs', '.cjs', '.ts']
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
      public            : 'localhost:8090',
      port              : 8090,

      // ページ設定
      openPage          : 'elifia-game-museum/',

      // サーバーの起動後にブラウザーを開くようにdev-serverに指示します。
      open              : "firefox",

      // 提供されているすべてのgzip圧縮を有効にします。
      compress          : true,

      // HMR (ホットリロード) 全般設定
      hot: true,
      watchContentBase  : true, // コンテンツベースに置かれたファイル(htmlやcssなど)の変更を監視する
      inline            : true, // オートリフレッシュ(自動再読込)をiframeモードで実行する

      // HMR (ホットリロード) 出力先設定
      publicPath        : dev_sv_js_url, // バンドルにアクセスするためのpublicPathの指定(localhost上のURL)
      filename          : dist_js,

      // proxy
      index: '', // specify to enable root proxying
      proxy: {
        context: ['/elifia-game-museum'],
        target: 'http://localhost:8090',
        pathRewrite: {
          '^/elifia-game-museum' : '',
        },
      }

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
  css_loaders = [
    ...css_loaders,
    {
      loader: "style-loader",
      // ローダーは、前のローダーがソースマップを発行すると、ソースマップを自動的に挿入します。したがって、ソースマップを生成するには、前のローダーのsourceMapオプションをtrueに設定します。
    },
  ]

  // CSS を 外部に出力する
  // css_loaders = [
  //   ...css_loaders,

  //   // use配列で指定したLoaderが後ろから順番に適用されます。 @see https://ics.media/entry/17376/
  //   // 別ファイルで出すとき
  //   // @see https://github.com/webpack-contrib/mini-css-extract-plugin
  //   // @see https://www.expexp.jp/webpack/
  //   {
  //     loader: MiniCssExtractPlugin.loader,
  //     options: {
  //       // you can specify a publicPath here
  //       // by default it uses publicPath in webpackOptions.output
  //       publicPath: dev_sv_js_url,
  //       filename: dist_css,
  //       hmr: is_dev, // ホットモジュールリロード (HMR)
  //     },
  //   },
  // ]

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

  // post css
  css_loaders = [
    ...css_loaders,
    {
      loader: "postcss-loader",
    }
  ]

  // console.log(css_loaders)
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
  const vue_import = 'vue'
  // const vue_import = 'vue/dist/vue.esm.js' // ES Module (バンドラ用) // vue-loader や vueify を利用する場合、 *.vue ファイルに中のテンプレートはビルド時に JavaScript に事前コンパイルされます。最終成果物の中にコンパイラは本当に必要なく、したがってランタイム限定ビルドを利用することが出来ます。ランタイム限定ビルドは完全ビルドに比べおよそ 30% 軽量なため、利用できるときにはこれを利用したほうが良いでしょう。それでもなお完全ビルドを利用したい場合は、バンドラでエイリアスを設定する必要があります。
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
        'vue$': vue_import
        //'vue$': 'vue', // CDN
      },

      // extentionsに「.vue」を追加することでimportの際に拡張子を省略して記述できるようにる。 https://qiita.com/es-row/items/12213f097d0762fa33bf
      // in webpack 2.2 default resolve .js .json - https://github.com/vuejs/vue-loader/issues/685
      extensions: ['.vue']
    },
    // externals: [
    //   {
    //     'vue/dist/vue.esm.js': 'Vue'
    //   }
    // ],
  })
  // 毎回インポートしなくてもいいように
  arg__ProvidePlugin = merge(arg__ProvidePlugin,{
    Vue: [
      vue_import,
      //'vue', // CDN
      'default' // 読み込むプロパティ @see https://qiita.com/re-fort/items/972d9a6cdc5c00864a6e
    ]
  })
  // console.log(return_modules.resolve.extensions)


  // TerserPlugin
  return_modules = merge(return_modules,{
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false, // Must be set to true if using source-maps in production
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            compress: {
              drop_console: true,
            }
          }
        }),
      ],
    }
  })

  // プラグイン
  // console.log(arg__ProvidePlugin)
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

      // Vue.js
      new VueLoaderPlugin(),
    ]
  })

  // console.log(return_modules)
  return return_modules
}
