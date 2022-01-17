canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=100;
var rover_x=10;
var rover_y=10;
var rover_image="rover.png";
var nasa_image=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
var random_num=Math.floor(Math.random()*5);
console.log(random_num);
var background_image=nasa_image[random_num];
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    }
    function uploadrover(){
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
     keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        console.log("up arrow pressed");
        up();
    }
    if (keyPressed=="40"){
        console.log("down arrow pressed");
        down();
    }
    if (keyPressed=="37"){
        console.log("left arrow pressed");
        left();
    }
    if (keyPressed=="39"){
        console.log("right arrow pressed");
        right();
    }
}
function up(){
    if (rover_y>0){
        rover_y=rover_y-10;
        console.log("x position of rover is : "+rover_x+ " y position of rover is : "+rover_y );
        uploadBackground();
        uploadrover();
        
    }
}
function down(){
    if (rover_y<500){
        rover_y=rover_y+10;
        console.log("x position of rover is : "+rover_x+ " y position of rover is : "+rover_y );
        uploadBackground();
        uploadrover();
        
    }
}
function left(){
    if (rover_x>0){
        rover_x=rover_x-10;
        console.log("x position of rover is : "+rover_x+ " y position of rover is : "+rover_y );
        uploadBackground();
        uploadrover();
        
    }
}
function right(){
    if (rover_x<700){
        rover_x=rover_x+10;
        console.log("x position of rover is : "+rover_x+ " y position of rover is : "+rover_y );
        uploadBackground();
        uploadrover();
        
    }
}

    