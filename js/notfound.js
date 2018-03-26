jQuery(function($){

	var $loader = $('#loader');

	var gp = getPath();
	var st = 11;


	$loader.find('.link')
		.text(gp)
		.attr('href',gp)
		.end()
		.find('.time')
		.text(st)
		.end()
		.find('.load')
		.addClass('progress')

	setInterval(function(){
		st--;
		if (st < 0) st = 0;
		$loader.find('.time').text(st)
	},1000)

	setTimeout(function(){
		$loader.find('.load')
			.removeClass('progress')
			.addClass('redirect');

		setTimeout(function(){
			location.href = gp;
		},500)
	},11000)

})

var getPath = function() {
	return ('' + location.origin + '/#' + location.pathname + location.search)
}



var rotate = function($r,timer, d) {
	$r.css('width',Math.round(Math.max(d.width,d.height) * 0.95))
	$r.css('height',Math.round(Math.max(d.width,d.height) * 0.95))
}

var loader = function($l, timer) {

}

