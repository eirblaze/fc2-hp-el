module.exports = arg => {

  console.log(arg);

  var return_modules = {}

  // 入出力
  Object.assign(return_modules,{

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./_src/index.js`,

    // ファイルの出力設定
    output: {
      // 出力ファイル名
      filename: 'html/js/script.min.js'
    },

  });

  return return_modules;
};

