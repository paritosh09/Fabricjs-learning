 
 
 


$(document).ready(function() {

    canvas = new fabric.Canvas('timelinecanvas');
    canvas.setWidth(600);
    canvas.setHeight(250);

    var video1El = document.getElementById('video1');
    var video1 = new fabric.Image(video1El, {
      left: 0,
      top: 0,
      
    });

    canvas.add(video1);
    video1.getElement().load();


    $(document.body).on('click', '#play' ,function(){
        video1.getElement().play();

        //↓It's stops video.
        /*
        var filter = new fabric.Image.filters.BlendColor({
            color:'red',
            mode: 'tint',
            alpha: 0.5
        });
            canvas.item(0).filters.push(filter);
        canvas.item(0).applyFilters();
        */


    });




    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll();
      fabric.util.requestAnimFrame(render);
    });

});
 
 
 