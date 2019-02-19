//////////////////////////////////////////////////////////////////////////////////////
//fly2.java - まさおコンストラクションにおけるストーリー表示及び移動システム
//ファイル名を自動認識し、挙動を変化させる機能を持つ。
//フォーム及びフォームフィールド名は、統一しなければならない。
//また、HTML上では、すべてをフォームで囲まなければ、Netscapeで動作しなってしまう。
//動作確認ブラウザ：InternetExplore6, Netscape7.1
//
//＝＝関数＝＝
//
//legend(sel,ms2)
//インデックスで各マップのストーリーを表示する。
//第一引数：プルダウンメニューから送られる値
//第二引数：メッセージを表示させる目標フォームフィールド
//
//daihiru(id,stage)
//ストーリー文字列そのものを返す。
//第一引数：改行方法の指定である。やむなく魔の数字を使用した。
//	id=1でindex.html、id=2でstageXX.htmlでの改行となる。
//第二引数：ステージ番号。この値によって、返る文字列が変わる。
//	文字列型のステージ番号を渡す必要がある。
//////////////////////////////////////////////////////////////////////////////////////

string = document.URL;
p = string.slice(-7);
q = p.match(/[0-9][0-9]/);

if (q != null) {
	r = parseFloat(q);

	document.open();
	document.write(daihitu(2,r));
	document.close();
	}

function legend(sel,ms2)
{
	n = sel.options[sel.selectedIndex].value;
	r = parseFloat(n);
document.go.ms2.value = (daihitu(1,r));	/*go:フォーム名 ms2:フォームフィールド名*/
}

function daihitu(id,stage) {
	if (id == 1) 
		kai = "\n";
	else
		kai = "<BR>\n";

	switch (stage) {
	case 99 : writer=('ステージを選ぶと、ここにストーリーが表示されます。'); break;
	/* 以下、拡張領域
	case 0 : writer=('　、'+
		''+
		''+
		'' + kai );
		break;
	case 1 : writer='1面';break;
	case 2 : writer='2面';break;
	case 3 : writer='3面';break;
	case 4 : writer=('4');break;
	case 5 : writer=('5');break;
	case 6 : writer='6面';break;
	case 7 : writer='7面';break;
	case 8 : writer='8面';break;
	case 9 : writer='9-1';break;
	case 10 : writer='9-2';break;
	case 11 : writer='9-3';break;
	case 12 : writer='10-1';break;
	case 13 : writer='10-2';break;
	case 14 : writer='10-3';break;
	*/
	default : writer=('？？？' + kai );
	}
	return writer;
}
