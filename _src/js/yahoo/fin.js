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
	$('body').css({'backgroundColor' : color});
}


var current_delay = 0;
colors.forEach(ele => {
	current_delay += ele.next_delay;
	window.setTimeout( f_setbgcolor(ele.color), current_delay);
});		
