canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverx=10;
rovery=10;
roverwidth=100;
roverheight=90;
background="mars.jpg";
rover="rover.png";
function kaka(){
    bmarsimage=new Image();
    bmarsimage.onload=uploadbackground;
    bmarsimage.src=background;
    broverimage=new Image();
    broverimage.onload=uploadrover;
    broverimage.src=rover;
}
function uploadbackground(){
    ctx.drawImage(bmarsimage,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(broverimage,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    x=e.keyCode;
    console.log(x);
    if(x=='38'){
        console.log("up");
        up();
    }
    if(x=='40'){
        console.log("down");
        down();
    }
    if(x=='37'){
        console.log("left");
        left();
    }
    if(x=='39'){
        console.log("right");
        right();
    }

}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("When up arrow is pressed, x = " + roverx + " | y = " +rovery);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("When down arrow is pressed, x = " + roverx + " | y = " +rovery);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("When left arrow is pressed, x = " + roverx + " | y = " +rovery);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("When right arrow is pressed, x = " + roverx + " | y = " +rovery);
        uploadbackground();
        uploadrover();
    }
}