//ID読み込み

var q = "";

var nam = "";

nagasa = document.embeds.length;



for (i = 1; i <= nagasa ; i++) {

	nam = ("kbnn"+i);

	q = document.embeds[nam].src;

}

id = parseFloat(q);





//書き込み

document.open();

document.write(ka(id));

document.close();



//HTML操作

function ka(id) {

kan = (

	'<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="210" HEIGHT="31">\n'+

	'<TR>\n'+

	'<TD WIDTH="12" HEIGHT="31"><IMG SRC="../img/bl1.gif" WIDTH="12" HEIGHT="31" name="gmm'+

	gmid(id)+'"></TD>\n'+

	'<TD VALIGN="MIDDLE" WIDTH="200" HEIGHT="31" BACKGROUND="../img/b.gif"\n'+

	'NOWRAP>　　'+title(id)+'</A></TD>\n'+

	'<TD WIDTH="7" HEIGHT="31"><IMG SRC="../img/br.gif" WIDTH="7" HEIGHT="31"></TD>\n'+

	'</TR>\n'+

	'</table>\n');

	return kan;

}



//タイトル

function title(id) {

	switch(id) {

	case 1 : t = ('ゼルダの伝説');break;

	case 2 : t = ('ファイアーエムブレム');break;

	case 3 : t = ('変な音楽');break;

	default : t = ('???');

	}

	return t;

}



//電気のスイッチ

function gmid(id)

{

	switch(id) {

	case 1 : doc = ("a");break;

	case 2 : doc = ("b");break;

	case 3 : doc = ("c");break;

	default : doc = ("z");

	}

	return doc;

}

