var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverx=50;
rovery=50;

nasa=["1.jpeg","2.jpeg","3.jpeg","4.jpeg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
console.log(nasa[randomnumber]);

roverheight=90;
roverwidth=100;

backgrounding=nasa[randomnumber];
roverimg="rover.png";
function add(){
    backgroundtag=new Image();
    backgroundtag.onload=uploadbackground;
    backgroundtag.src=backgrounding;

    rovertag=new Image();
    rovertag.onload=uploadrover;
    rovertag.src=roverimg;
}
function uploadbackground(){
    ctx.drawImage(backgroundtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rovertag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(keyPressed=="87"){
up();
console.log("up");
}
if(keyPressed=="83"){
down();
console.log("down");
}
if(keyPressed=="68"){
right();
console.log("right");
}
if(keyPressed=="65"){
left();
console.log("left");
}
}
function up(){
if(rovery>0){
    rovery=rovery-10;
    console.log("When up is pressed x="+roverx+"y="+rovery);
    uploadbackground();
    uploadrover();
}
}
function down(){
   if(rovery<500){
       rovery=rovery+10;
       console.log("When down is pressed x="+roverx+"y="+rovery);
       uploadbackground();
       uploadrover();
   } 
}
function right(){
    if(roverx<710){
        roverx=roverx+10;
        console.log("When right is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(roverx>0){
        roverx=roverx-10;
        console.log("When left is pressed x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}