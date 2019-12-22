( ($) => {

  // 時間帯によって色が変わる
  const time_zone = {
    morning: {
      min: 5,
      max: 10,
      bg_fade_colors: [
        { color : "#FFFFFF", next_delay : 120 },
        { color : "#FAFEFF", next_delay : 120 },
        { color : "#F7FEFF", next_delay : 120 },
        { color : "#F4FEFF", next_delay : 120 },
        { color : "#F1FEFF", next_delay : 120 },
        { color : "#EEFEFF", next_delay : 120 },
        { color : "#EBFEFF", next_delay : 120 },
        { color : "#E8FEFF", next_delay : 120 },
        { color : "#E5FEFF", next_delay : 120 },
        { color : "#E2FEFF", next_delay : 120 },
        { color : "#DFFEFF", next_delay : 120 },
        { color : "#DDFFFF", next_delay : 120 },
        { color : "#DCFEFF", next_delay : 120 },
      ]
    }, //  5  6  7  8  9 10
    noon: {
      min: 11,
      max: 15,
      bg_fade_colors: [
        { color : "#FFFFFF", next_delay : 120 },
        { color : "#FAFEFF", next_delay : 120 },
        { color : "#F7FEFF", next_delay : 120 },
        { color : "#F4FEFF", next_delay : 120 },
        { color : "#F1FEFF", next_delay : 120 },
        { color : "#EEFEFF", next_delay : 120 },
        { color : "#EBFEFF", next_delay : 120 },
        { color : "#E8FEFF", next_delay : 120 },
        { color : "#E5FEFF", next_delay : 120 },
        { color : "#E2FEFF", next_delay : 120 },
        { color : "#DFFEFF", next_delay : 120 },
        { color : "#DDFFFF", next_delay : 120 },
        { color : "#DCFEFF", next_delay : 120 },
      ]
    },    // 11 12 13 14 15
    evning: {
      min: 16,
      max: 17,
      bg_fade_colors: [
        { color : "#FFFFFF", next_delay : 120 },
        { color : "#FAFEFF", next_delay : 120 },
        { color : "#F7FEFF", next_delay : 120 },
        { color : "#F4FEFF", next_delay : 120 },
        { color : "#F1FEFF", next_delay : 120 },
        { color : "#EEFEFF", next_delay : 120 },
        { color : "#EBFEFF", next_delay : 120 },
        { color : "#E8FEFF", next_delay : 120 },
        { color : "#E5FEFF", next_delay : 120 },
        { color : "#E2FEFF", next_delay : 120 },
        { color : "#DFFEFF", next_delay : 120 },
        { color : "#DDFFFF", next_delay : 120 },
        { color : "#DCFEFF", next_delay : 120 },
      ]
    },  // 16 17 18
    night: {
      min: 19,
      max: 4,
      bg_fade_colors: [
        { color : "#FFFFFF", next_delay : 120 },
        { color : "#FAFEFF", next_delay : 120 },
        { color : "#F7FEFF", next_delay : 120 },
        { color : "#F4FEFF", next_delay : 120 },
        { color : "#F1FEFF", next_delay : 120 },
        { color : "#EEFEFF", next_delay : 120 },
        { color : "#EBFEFF", next_delay : 120 },
        { color : "#E8FEFF", next_delay : 120 },
        { color : "#E5FEFF", next_delay : 120 },
        { color : "#E2FEFF", next_delay : 120 },
        { color : "#DFFEFF", next_delay : 120 },
        { color : "#DDFFFF", next_delay : 120 },
        { color : "#DCFEFF", next_delay : 120 },
      ]
    },   // 19 20 21 22 23  0  1  2  3  4
  }

  // 暫定値
  let colors = time_zone.morning.bg_fade_colors

  // 時間帯検出
  const date = new Date()
  const hours = date.getHours()

  // JSのObjectをforEachで処理する方法 @link https://qiita.com/nantekkotai/items/6c603b40ac2264e9f6f6
  Object.keys(time_zone).forEach( (key) => {

    if (time_zone[key].min < time_zone[key].max) {
      if ( time_zone[key].min <= hours && hours <= time_zone[key].max ) {
        colors = time_zone[key].bg_fade_colors
      }
    } else {
      if ( 0 <= hours && hours <= time_zone[key].max &&
         time_zone[key].min <= hours && hours <= 23) {
        colors = time_zone[key].bg_fade_colors
      }
    }

  })


  // タイマー処理 @link https://techacademy.jp/magazine/5541
  let count = 0
  const f_bg_fade_in__count = () => {

    //console.log(count);
    //console.log(colors[count].color);

    $('body').css({
      'backgroundColor' : colors[count].color
    })

    // タイマーが満了した後に実行 @link https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout
    const timer_id = setTimeout( f_bg_fade_in__count, colors[count].next_delay * 1 )

    // 限界まで来たらタイマー停止
    count++
    if(count >= colors.length){
      clearTimeout(timer_id) // timer_idをclearTimeoutで指定している
    }
  }

  $(document).ready(f_bg_fade_in__count)
  //$('button').on("click", f_bg_fade_in__count);



})(jQuery)