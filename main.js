img = "";
status="";
objects=[];
alpha=document.getElementById("Alpha");
function preload(){
    
}
function setup() {
    canvas= createCanvas(600,400)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="status:Detecting object";
}

function Enter(){
    alpha=document.getElementById("Alpha");
}
function preload(){
    img=loadImage('alpha');
}

function draw(){
    image(img,0,0,640,420);
    if (status != "") {
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status : object detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x,objects[i].y);
            
   
    noFill();
    stroke('#FF0000')
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);





        }
    }
    

}
function modelloaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

