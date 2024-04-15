 
	var canvas = new fabric.Canvas('timelinecanvas');
	
	fabric.Image.fromURL('001.jpg', function(img){
		img.setWidth(200);
		img.setHeight(200);
		canvas.add(img);
	});
	
 