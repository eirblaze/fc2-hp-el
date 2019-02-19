/* ステージタイトルを返す関数 */
function sname(no) {
	switch(no) {
	case 0 : nam  = ('戦いの序曲');break;
	case 1 : nam  = ('反乱軍');break;
	case 2 : nam  = ('命の星を求めて');break;
	case 3 : nam  = ('帝国軍襲来');break;
	case 4 : nam  = ('飛空艇');break;
	case 5 : nam  = ('失われた都市');break;
	case 6 : nam  = ('冬の空の下で');break;
	case 7 : nam  = ('荒原の戦い');break;
	case 8 : nam  = ('帝国軍の最期');break;
	case 9 : nam  = ('史上最悪の市街戦');break;
	case 10 : nam = ('要塞となった街');break;
	case 11 : nam = ('悲しみは時を越えて');break;
	case 12 : nam = ('古代文明の力');break;
	case 13 : nam = ('行く手を阻む者たち');break;
	case 14 : nam = ('総力戦');break;
	case 15 : nam = ('遠い闇の向こうへ');break;
	case 16 : nam = ('冷たき力の源、熱き希望の光');break;
	default : nam = ('？？？');break;
	}
	return nam;
}

/* ステージ移動ボタン画像チェンジャー */
Image1 = new Image();
Image1.src = "../img/clpba.gif";
Image2 = new Image();
Image2.src = "../img/clpea.gif";
Image3 = new Image();
Image3.src = "../img/clpna.gif";

function SetImage(Img, Image) {
	Img.src = Image;
}


/* 移動システム */
function idou(n) {
	NEXT = 2;
	BACK = 1;

	string = document.URL;
	p = string.slice(-7);
	q = p.match(/[0-9][0-9]/);
	r = string.slice(-12,-7);

/* デバッグ専用 
	alert(q);
	alert(r);
*/

	noc = parseFloat(q);

	if (n==BACK)
		idousaki = noc - 1;
	else
		idousaki = noc + 1;
	if (idousaki < 10)
		idousaki = "0"+idousaki;
	location.href = r+idousaki+".html";
}

/* ステータスバー */
string = document.URL;
p = string.slice(-7);
q = p.match(/[0-9][0-9]/);

if (q != null)
	window.self.status = 'M.S.O. : Mission achievement Service agent Organization';
else if (p = 'ai.html')
	window.self.status = '王立ゲーム博物館';

function sber(a) {
	switch(a) {
		case 0 : window.self.status = 'M.S.O. : Mission achievement Service agent Organization';break;
		case 1 : window.self.status = '前の面に戻る';break;
		case 2 : window.self.status = '次の面に進む';break;
		case 3 : window.self.status = 'ゲームをやめてトップへ';break;
		default : window.self.status = '?';
		}
	return true;
	}
