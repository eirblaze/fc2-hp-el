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

	'<TD WIDTH="12" HEIGHT="31"><IMG SRC="img/bl1.gif" WIDTH="12" HEIGHT="31" name="gmm'+

	gmid(id)+'"></TD>\n'+

	'<TD VALIGN="MIDDLE" WIDTH="200" HEIGHT="31" BACKGROUND="img/b.gif"\n'+

	'NOWRAP>　　<A HREF="'+link(id)+'\n'+

	'onmouseover="imechen(2,'+id+');k('+id+');"\n'+

	'onmouseout="imechen(1,'+id+')" name="img">'+title(id)+'</A></TD>\n'+

	'<TD WIDTH="7" HEIGHT="31"><IMG SRC="img/br.gif" WIDTH="7" HEIGHT="31"></TD>\n'+

	'</TR>\n'+

	'</table>\n');

	return kan;

}





//タイトル

function title(id) {

	switch(id) {

	case 1 : t = ('World Wide Adventure');break;

	case 2 : t = ('MIDI Download Center');break;

	case 3 : t = ('MASAO Construction');break;

	case 4 : t = ('MaxAction');break;

	case 5 : t = ('Communications');break;

	case 6 : t = ('Air Port');break;

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

	case 4 : doc = ("d");break;

	case 5 : doc = ("e");break;

	case 6 : doc = ("f");break;

	default : doc = ("z");

	}

	return doc;

}



//リンク先

function link(id) {

	switch(id) {

	case 1 : go = ('wwa/index.html');break;

	case 2 : go = ('mid/index.html');break;

	case 3 : go = ('mso/index.html');break;

	case 4 : go = ('max/index.html');break;

	case 5 : go = ('http://windhell776.infoseek.ne.jp/');break;

	case 6 : go = ('link.html');break;

	default : go = ('index.html');

	}

	p = document.URL;

	q = p.match(/main/);

	if (q != null)

		linker = ('JavaScript:indexTo(\'' + go + '\')"');

	else

		linker = (''+go+'" Target="R"');

	return linker;

}

