/* タイトル表示システム */

string = document.URL;

p = string.slice(-7);

q = p.match(/[0-9][0-9]/);

r = string.slice(-12,-7);



document.open();



if (q!=null) {

	s = parseFloat(q);

	document.write('M.S.O. stage'+s+' ～'+sname(s)+'～');

//} else {

//	s = ???;

//	document.write(sname(s));

}



document.close();

