( ($) => {

let $et_clock = {}

function amaring(m,d) {
	while (m >= d) {
		m = m - d
	}
	return m
}

function waring(m,d) {
	re = 0
	while (m >= d) {
		m = m - d
		re = re + 1
	}
	return re
}

let sen = 0
var clock = () => {
	wh = new Date()
	ye = wh.getYear()
	mo = wh.getMonth() + 1
	da = wh.getDate()
//	yo = wh.getDay();
	ho = wh.getHours()
	mi = wh.getMinutes()
	se = wh.getSeconds()
	if (ye < 2000) { ye += 1900 }

	md = new Array(13)
	md[0]  = 0/* 予備*/
	md[1]  = 31/* 睦月 */
	md[2]  = 28/* 如月 */
	if (amaring(ye,4) == 0)
		md[2]  = md[2] + 1/* うるう年修正 */
	md[3]  = 31/* 弥生 */
	md[4]  = 30/* 卯月 */
	md[5]  = 31/* 皐月 */
	md[6]  = 30/* 水無月 */
	md[7]  = 31/* 文月 */
	md[8]  = 31/* 葉月 */
	md[9]  = 30/* 長月 */
	md[10] = 31/* 神無月 */
	md[11] = 30/* 霜月 */
	md[12] = 31/* 師走 */

	da = da - 1
	mo = mo - 1
	while (mo != 0) {
		da = da + md[mo]
		mo = mo - 1
	}

	ho = ho + (24 * da)

	da = waring(ho,25) + 1/* ２５時間／日 */
	yo = amaring(da,8)/* 曜日の素 */
	ho = amaring(ho,25)
	mo = waring(da,16) + 1/* 16月まである */
	da = amaring(da,16)

	switch (yo) {
	case 1  : youbi = "光"; break
	case 2  : youbi = "月"; break
	case 3  : youbi = "星"; break
	case 4  : youbi = "炎"; break
	case 5  : youbi = "氷"; break
	case 6  : youbi = "森"; break
	case 7  : youbi = "雷"; break
	case 0  : youbi = "地"; break
	default : youbi = "無"; break
	}

/*	if (ho > 12) {
		ho = ho - 12;
		ap = "PM ";
	} else
		ap = "AM ";*/

	ye = ye + 54

	if (mo < 10)
		mo = (` ${mo}`)
if (ho < 10)
		ho = (` ${ho}`)
if (mi < 10)
		mi = (`0${mi}`)
if (se < 10)
		se = (`0${se}`)
if (sen == 0) {
		st = (' ')
		sen = 1
	} else {
		st = ('.')
		sen = 0
	}

  $et_clock.val(
    `エルテムス暦${ye}年 ${mo}月${da}日 ${youbi}曜日 ${
    ho}:${mi}${st}`
  )

  // イベントの連鎖登録
  //console.log(st);
	setTimeout(clock, 500)
}

// 最初のイベント登録
$(document).ready( () => {
  $et_clock = $( ".et-clock" )
  clock()
})


})(jQuery)