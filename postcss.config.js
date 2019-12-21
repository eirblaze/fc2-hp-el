module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        'last 1 version',
        '> 1%',
        'ie 11'
      ],
      grid: "autoplace",
    },
    'postcss-normalize-charset': {},
    'cssnano': {autoprefixer: false},
  }
}