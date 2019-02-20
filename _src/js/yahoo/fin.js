( $ => {

  wh = new Date();
	wh.getHours();

  // 時間帯によって色が変わる
  var time_zone = {
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
  };

  // タイマー処理 @link https://techacademy.jp/magazine/5541
  var count = 0;
  var f_bg_fade_in__count = () => {

    //console.log(count);
    //console.log(colors[count].color);

    $('body').css({
      'backgroundColor' : colors[count].color
    });

    // タイマーが満了した後に実行 @link https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout
    var timer_id = setTimeout( f_bg_fade_in__count, colors[count].next_delay * 1 );

    // 限界まで来たらタイマー停止
    count++;
    if(count >= colors.length){
      clearTimeout(timer_id); // timer_idをclearTimeoutで指定している
    }
  }

  $(document).ready(f_bg_fade_in__count);
  //$('button').on("click", f_bg_fade_in__count);



})(jQuery);