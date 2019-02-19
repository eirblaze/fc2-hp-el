const entry_js = `./_src/js/index.js`;
const output_js = './html/js/script.min.js'

module.exports = (env, argv) => {

  //console.log(env);
  //console.log(argv);

  var return_modules = {}

  // devtool
  if (argv.mode === "production") {
    return_modules = Object.assign(return_modules,{
      devtool: 'source-map',
    });
  }

  // 入出力
  return_modules = Object.assign(return_modules,{

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

  console.log(return_modules);

  return return_modules;
};

