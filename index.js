// Execute init function on page load
window.onload = function() {
  init();
 }
 
 // Repeat the clock function with a period of 1 second
 function init(){
 clock();
 setInterval('clock();',1000);
 }
 
 
 // Start clock function
 function clock(){
 var now = new Date();
 var canvas = document.getElementById("clockid");
 var ctx = canvas.getContext('2d');
 ctx.save();
   
 // Setting
 canvas.width = 500;
 canvas.height = 400;
 var w      = canvas.width;
 var h      = canvas.height;
 var center = {x : w / 2, y : h / 2};
 
 
 // Radius to center of numbers on dial
 var rads     = w / 6;
 ctx.save();
 
 
 // Large triangle
 ctx.fillStyle = "#850000";
 ctx.beginPath();
 ctx.moveTo(65,160);
 ctx.lineTo(250,5);
 ctx.lineTo(435,160);
 ctx.closePath();
 ctx.fill();
 ctx.save();
 
 // Small triangle
 ctx.fillStyle = "#F7F5EB";
 ctx.beginPath();
 ctx.moveTo(130,140);
 ctx.lineTo(250,40);
 ctx.lineTo(370,140);
 ctx.closePath();
 ctx.fill();
 ctx.save();
 
 // Body
 ctx.beginPath();
 ctx.fillRect(130,140,240,230);
 ctx.save();
 
 
 // Dial
 ctx.save();
 ctx.font = "30px 'Fira Sans', sans-serif";
 ctx.textAlign ="center";
 ctx.textBaseline    ="middle";
 ctx.fillStyle   = "rgb(0, 0, 0)";
 ctx.shadowBlur = 5;
 ctx.shadowColor = "#FFF";
  for (var i = 0; i < 12; i=i+3) {
      var radian = i * Math.PI / 6;
      var x = center.x + rads * Math.sin(radian);
      var y = 260 - rads * Math.cos(radian);
      var text = "" + (i == 0 ? "12" : i);
      ctx.fillText(text, x, y);
    }
  ctx.restore();
   
   
  // Move center
  ctx.translate(center.x,260);
  ctx.save();
   
  // Hour
  ctx.strokeStyle ="black";
  ctx.lineWidth = 3;
  
  ctx.beginPath();
  
      for (var i=1;i<13; i++){
        ctx.moveTo(95,0);
        if ( 1 != i && 4 != i && 7 != i && 10 != i && 13 != i) {
          ctx.lineTo(80,0);
        }
      ctx.rotate(Math.PI/6);
      }
      
  ctx.stroke();
  ctx.restore();
   
   
  // Setting for clock hands
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr= now.getHours();
  hr = hr>=12 ? hr-12 : hr;
  ctx.fillStyle = "black";
   
  // Little hand
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 6;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#666";
  ctx.beginPath();
  ctx.moveTo(0,25);
  ctx.lineTo(0,-60);
  ctx.stroke();
  ctx.restore();
   
  // Big hand
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.shadowBlur = 9;
  ctx.shadowColor = "#999";
  ctx.beginPath();
  ctx.lineTo(0,-90);
  ctx.lineTo(0,25);
  ctx.stroke();
  ctx.restore();
   
  // Second hand
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0,30);
  ctx.lineTo(0,-90);
  ctx.stroke();
  ctx.restore();
   
  // Circle in the center of the clock
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle   = "black";
  ctx.arc(0,0,5,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  }