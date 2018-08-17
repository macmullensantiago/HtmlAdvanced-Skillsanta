
var canvas = document.getElementById('canvas');

var context = canvas.getContext("2d");

// context.fillStyle = 'red';
// context.strokeStyle= 'steelbule';
// context.shadowColor = 'black';
// context.shadowBlur = 20;
// context.shadowOffsetX = 20;
// context.shadowOffsetY = 20;

// context.fillRect(10,10,100,100);
// context.clearRect(20,20,30,30);

// // context.strokeRect(20,20,100,100);

// context.moveTo(10,10);
// context.lineTo(110,110);
// context.stroke();

// context.fillStyle = 'red';
// context.beginPath();
// context.arc(110,110,50,0,2*Math.PI);
// context.stroke();

// var linearGradient= context.createLinearGradient(200,200,350,350);
// linearGradient.addColorStop(0,'red');
// linearGradient.addColorStop(1,'blue');

// context.fillStyle = linearGradient;
// context.fillRect(200,200,200,200);


// var radialGradient= context.createRadialGradient(100,100,50,100,100,100);
// radialGradient.addColorStop(0,'red');
// radialGradient.addColorStop(1,'blue');

// context.fillStyle = radialGradient;
// context.fillRect(0,0,200,200);

context.font="20px Times New Roman";
context.fillText('Hello From Canvas',10,50);

context.strokeText('Hello From Canvas',10,100);


var image= document.getElementById('image');

context.drawImage(image,300,200);