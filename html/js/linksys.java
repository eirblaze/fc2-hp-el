function linker2(go) {
	p = document.URL;
	q = p.match(/def/m);
	if (q != null)
		linker = ('JavaScript:indexTo(\'' + go + '\')"');
	else
		linker = (''+go+'" Target="R"');
	return linker;
}