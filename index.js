
let radiusInput = document.querySelector("#radius");
let heightInput = document.querySelector("#length");
let lengthInput = document.querySelector("#height");
let widthInput = document.querySelector("#width");
let result=document.getElementById("result");
let sphereBtn = document.querySelector("#submit1");
let circleBtn = document.querySelector("#submit2");
let squareBtn = document.querySelector("#submit3");

//event listener for each one to do the calculation 
sphereBtn.addEventListener("click",function() {
    if ( document.querySelector("#volume").checked===true) 
    result.innerHTML=sphereVolume(radiusInput.value)
    else if (document.querySelector("#area").checked===true) 
    result.innerHTML=sphereArea(radiusInput.value);
 
 
});


circleBtn.addEventListener("click",function() {
      if(document.querySelector("#volume").checked===true)
    result.innerHTML=circleVolume(radiusInput.value);
    else if(document.querySelector("#area").checked===true)
    result.innerHTML=circleArea(radiusInput.value);
});

squareBtn.addEventListener("click",function () {
   if(document.querySelector("#area").checked===true)
    result.innerHTML=squareVolume(lengthInput.value,widthInput.value,heightInput.value);
    else if(document.querySelector("#area").checked===true)
    result.innerHTML=squareArea(heightInput.value,lengthInput.value);
    
});


// groups of functions to do the math volume and area of sphere ,circle,square
function sphereVolume(radius)
{
return (4/3)* Math.PI * Math.pow(radius,3);
}
function sphereArea(radius) {

 return 4*Math.PI*Math.pow(radius,2);

}
function circleArea(radius){
    return Math.PI*Math.pow(radius,2);

}

function circleVolume(radius){
    return Math.PI*radius;
    
}
function squareArea(height,length){
    return height*length;

}

function squareVolume(length,width,height){
    return length*width*height;
    
}

// function to do the change of the input depend on option choice
function opton(event) {
    let element=event.value;
  if(element=="sphere"){
        document.querySelector("#radius").className="on";
        document.querySelector("#length").className="off";
        document.querySelector("#height").className="off";
        document.querySelector("#width").className="off";
        document.querySelector("#submit1").className="on";
        document.querySelector("#submit2").className="off";
        document.querySelector("#submit3").className="off";
}

if(element=="circle"){
    document.querySelector("#radius").className="on";
    document.querySelector("#length").className="off";
    document.querySelector("#height").className="off";
    document.querySelector("#width").className="off";
    document.querySelector("#submit1").className="off";
    document.querySelector("#submit2").className="on";
    document.querySelector("#submit3").className="off";
}


if(element=="square"){
    document.querySelector("#radius").className="off";
    document.querySelector("#length").className="on";
    document.querySelector("#height").className="on";
    document.querySelector("#width").className="on";
    document.querySelector("#submit1").className="on";
    document.querySelector("#submit2").className="off";
    document.querySelector("#submit3").className="off";
    
}
}


