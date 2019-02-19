function amaring(m,d) {
	while (m >= d) {
		m = m - d;
	}
	return m;
}

function waring(m,d) {
	re = 0;
	while (m >= d) {
		m = m - d;
		re = re + 1;
	}
	return re;
}

function clock(sen) {
	wh = new Date();
	ye = wh.getYear();
	mo = wh.getMonth() + 1;
	da = wh.getDate();
//	yo = wh.getDay();
	ho = wh.getHours();
	mi = wh.getMinutes();
	se = wh.getSeconds();
	if (ye < 2000) { ye += 1900; }

	md = new Array(13);
	md[0]  = 0;/* —\”õ*/
	md[1]  = 31;/* –rŒŽ */
	md[2]  = 28;/* ”@ŒŽ */
	if (amaring(ye,4) == 0)
		md[2]  = md[2] + 1;/* ‚¤‚é‚¤”NC³ */
	md[3]  = 31;/* –í¶ */
	md[4]  = 30;/* ‰KŒŽ */
	md[5]  = 31;/* ŽHŒŽ */
	md[6]  = 30;/* …–³ŒŽ */
	md[7]  = 31;/* •¶ŒŽ */
	md[8]  = 31;/* —tŒŽ */
	md[9]  = 30;/* ’·ŒŽ */
	md[10] = 31;/* _–³ŒŽ */
	md[11] = 30;/* ‘šŒŽ */
	md[12] = 31;/* Žt‘– */

	da = da - 1;
	mo = mo - 1;
	while (mo != 0) {
		da = da + md[mo];
		mo = mo - 1;
	}

	ho = ho + (24 * da);

	da = waring(ho,25) + 1;/* ‚Q‚TŽžŠÔ^“ú */
	yo = amaring(da,8);/* —j“ú‚Ì‘f */
	ho = amaring(ho,25);
	mo = waring(da,16) + 1;/* 16ŒŽ‚Ü‚Å‚ ‚é */
	da = amaring(da,16);

	switch (yo) {
	case 1  : youbi = "Œõ";break;
	case 2  : youbi = "ŒŽ";break;
	case 3  : youbi = "¯";break;
	case 4  : youbi = "‰Š";break;
	case 5  : youbi = "•X";break;
	case 6  : youbi = "X";break;
	case 7  : youbi = "—‹";break;
	case 0  : youbi = "’n";break;
	default : youbi = "–³";break;
	}

/*	if (ho > 12) {
		ho = ho - 12;
		ap = "PM ";
	} else
		ap = "AM ";*/

	ye = ye + 54;

	if (mo < 10)
		mo = (' ' + mo);
	if (ho < 10)
		ho = (' ' + ho);
	if (mi < 10)
		mi = ('0' + mi);
	if (se < 10)
		se = ('0' + se);

	if (sen == 0) {
		st = (' ');
		sen = 1;
	} else {
		st = ('.');
		sen = 0;
	}

	document.top.wt.value = ('ƒGƒ‹ƒeƒ€ƒX—ï'+ye+'”N '+mo+'ŒŽ'+da+'“ú '+youbi+'—j“ú '
		+ho+':'+mi+st);
	window.setTimeout('clock('+sen+')', 500);
}
