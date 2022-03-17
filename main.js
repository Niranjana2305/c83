var mouseEvent="empty";
var last_X;
var last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;

canvas.addEventListener("mousedown",my_mousedown);
  
 function my_mousedown(e){
     color=document.getElementById("color").value;
     width_line=document.getElementById("width").value;
     mouseEvent="mouseDown";
 }



 canvas.addEventListener("mousemove",my_mousemove);
 
 function my_mousemove(e){
   current_mouse_X= e.clientX-canvas.offsetLeft;
   current_mouse_Y= e.clientY-canvas.offsetTop;

   if(mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth= width_line;



       ctx.moveTo(last_X,last_Y);
       ctx.lineTo(current_mouse_X,current_mouse_Y);
       ctx.stroke();

   }

   last_X = current_mouse_X;
   last_Y = current_mouse_Y;

 }



 canvas.addEventListener("mouseup",my_mouseup);
 
 function my_mouseup(e){
     mouseEvent="mouseUP";
 }


 canvas.addEventListener("mouseleave",my_mouseleave);
 
 function my_mouseleave(e){
     mouseEvent="mouseLeave";
 }

function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
 