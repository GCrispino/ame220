var boxStatus = new Array(30);

for (var i = 0;i < boxStatus.length;i++)
	boxStatus[i] = 'left';

var buttonClicked = function(n,easing){
	var id = '#button' + n.toString();
	pageWidth = $('body').width();
	boxWidth = $(id).width();

	if (boxStatus[n] == 'left'){
		$(id).animate({'margin-left' : (pageWidth - boxWidth - 3) + 'px','color': 'red'},1000, easing);
		boxStatus[n] = 'right';
	}
	else{
		$(id).animate({'margin-left' : '0px','color': 'black'},1000,easing);
		boxStatus[n] = 'left';
	}

}

var randomColor = function(){
	var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

	var color = ""

	for (var i = 0; i < 6;i++){
		var index = Math.floor((Math.random() * 16));
		color += chars[index];
	}


	color = '#' + color;

	return color;
}

var colorize = function(){
	//colorizes all the boxes using random colors

	for (var i = 0;i < boxStatus.length;i++)
		//while(randomColor() != 'blue')
		document.getElementById("button" + i).style.background = randomColor();
}