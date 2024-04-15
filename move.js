
const canvas = this.__canvas = new fabric.Canvas('timelinecanvas', {


    hoverCursor: 'pointer',

    // hoverCursor:'move',
    // selection: true
});


canvas.selection = false;

//         fabric.Image.fromURL('C:\Users\Paritosh-Andor\Pictures\Camera Roll\a.jpg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img1 = myImg.set({ left: 0, top: 0 ,width:150,height:150});
//  canvas.add(img1); 
// });
// var imgURL = ' C:\Users\Paritosh-Andor\Pictures\Camera Roll\a.jpg';

// var canvas = new fabric.Canvas('canvas');

// var pugImg = new Image();
// pugImg.onload = function (img) {    
//     var pug = new fabric.Image(pugImg, {
//         angle: 45,
//         width: 500,
//         height: 250,
//         left: 50,
//         top: 70,
//         scaleX: .25,
//         scaleY: .25
//     });
//     canvas.add(pug);
// };
// pugImg.src = imgURL;


const textGroup = new fabric.Textbox('vmx demo', {
    lockRotation: true,
    width: 200,
    fontSize: 30,
    top: 90,
    left: 0,
    hasRotatingPoint: false,
    backgroundColor: 'blue',
    fill: 'orange',


});
textGroup.previousTop = 85;
const textGroup1 = new fabric.Textbox(' Vmx Text', {

    lockRotation: true,
    width: 200,
    fontSize: 30,
    left: 200,

    top: 130,
    hasRotatingPoint: false,


    backgroundColor: 'green',
    fill: 'orange',

});
textGroup1.previousTop = 130;



canvas.add(textGroup, textGroup1);


canvas.on({
    'object:moving': onChange,
    // 'object:scaling': onChange,
    // 'object:modified': onChange,

});




function onChange(options) {
    canvas.renderAll();
    options.target.setCoords(); //Sets corner position coordinates based on current angle, width and height
    const selectedObj = options.target;
    canvas.forEachObject(function (obj) {
        if (obj === options.target) return;
        if (selectedObj.previousTop <= selectedObj.top) {

            if (selectedObj.top >= obj.top && selectedObj.top <= obj.top + obj.height) {
                obj.top = obj.top - selectedObj.height * selectedObj.scaleY;
            }
        } else {

            if (selectedObj.top <= obj.top && selectedObj.top >= obj.top - obj.height) {
                obj.top = obj.top + selectedObj.height * selectedObj.scaleY;
            }
            //     if(selectedObj.top>=obj.top && selectedObj.top<=obj.top+obj.height){
            //     obj.top=selectedObj.top-obj.top*selectedObj.scaleY;
            // }
        }

        obj.setCoords();
        canvas.renderAll();
        selectedObj.previousTop = selectedObj.top;
        // audioObj=new audio("C:\Users\Paritosh-Andor\Downloads\mixkit-speeding-swoosh-1484.wav");
        // audio.play();

    });
}