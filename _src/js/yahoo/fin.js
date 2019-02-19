

var colors = [
		{
			color : "#FFFFFF",
			next_delay : 120,
		},
		{
			color : "#FAFEFF",
			next_delay : 120,
		},
		{
			color : "#F7FEFF",
			next_delay : 120,
		},
		{
			color : "#F4FEFF",
			next_delay : 120,
		},
		{
			color : "#F1FEFF",
			next_delay : 120,
		},
		{
			color : "#EEFEFF",
			next_delay : 120,
		},
		{
			color : "#EBFEFF",
			next_delay : 120,
		},
		{
			color : "#E8FEFF",
			next_delay : 120,
		},
		{
			color : "#E5FEFF",
			next_delay : 120,
		},
		{
			color : "#E2FEFF",
			next_delay : 120,
		},
		{
			color : "#DFFEFF",
			next_delay : 120,
		},
		{
			color : "#DDFFFF",
			next_delay : 120,
		},
		{
			color : "#DCFEFF",
			next_delay : 120,
		},
];


var f_setbgcolor = function setbgcolor(color){
	document.bgColor = color;
	console.log(color);
}


var current_delay = 0;

console.log(document.styleSheets);

for (var fade_count = 0; fade_count < colors.length; fade_count++) {
	current_delay += colors[fade_count].next_delay * 300;
	window.setTimeout(
		f_setbgcolor(colors[fade_count].color),
		current_delay
	);
	console.log(current_delay);

}
