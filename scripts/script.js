
function build_grid(value) {
	for (var $table = $('table'), i=0; i<value; i++) {
		var $tr = $('<tr>');
		for (var j = 0; j<value; j++)
			$tr.append('<td class="data"><div class="data"> </div></td>');
			$table.append($tr);
	}

var size = 480 / value;
	$('.data').css('width', size + "px");
	$('.data').css('height', size + "px");
}


$(document).ready(function(){

build_grid(40);

$('.data').mouseenter(function(){
			$(this).fadeTo(100,0);
		});

$('body').append('<div><input type="button" value="RESET" class="reset"></input></div>')

$('.reset').click(function(){
	$('.data').fadeTo(1000,1);
		});
});