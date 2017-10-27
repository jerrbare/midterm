var control = 1;

//Controls//
function expandMenu(){
    if(control == 0){
        document.getElementById('control').style.top = '595px';
        control=1;
    }else if(control==1){
        document.getElementById("control").style.top ="400px";
        control=0;
    }
};

//Change background//
document.getElementById("ctrl").addEventListener("keydown", function(){
    var val = document.getElementById('ctrl').value;
    var magic = val.indexOf("epic");
    
    if(val=='horse'){
        document.getElementById('background').style.backgroundImage = 'url(img/bg1.jpg)';
    } else if(val=="night"){
        document.getElementById('background').style.backgroundImage = 'url(img/bg2.jpg)';
        
    } else if(val=="mountain"){
        document.getElementById('background').style.backgroundImage = 'url(img/bg3.jpg)';
    } else if(magic >= '0') {
        document.getElementById('background').style.backgroundImage = 'url(img/bg4.jpg)';
    }
});

//Change title//
document.getElementById("ctrl2").addEventListener("keyup", function(){
    var text1 = document.getElementById('ctrl2').value;
    document.getElementById('title').innerHTML = text1;
});

//Change description//
document.getElementById("ctrl3").addEventListener("keyup", function(){
    var text2 = document.getElementById('ctrl3').value;
    document.getElementById('description').innerHTML = text2;
});

//Change color of text// 
document.getElementById("ctrl4").addEventListener("change", function(){
    var changeColor = document.getElementById('ctrl4').value;
    document.getElementById('description').style.color = changeColor;
    document.getElementById('title').style.color = changeColor;
});

// Moving the background position //

var horpos = 0;
var vertpos = 0;

function moveBackground(theCode){

    console.log(theCode);
    if (theCode==37){
        horpos = horpos - 10;
    } else if (theCode==38){
        vertpos = vertpos - 10;
    } else if (theCode==39){
        horpos = horpos + 10;
    } else if (theCode==40){
        vertpos = vertpos + 10;
    }
    document.getElementById('background').style.backgroundPosition = horpos +'px' +' '+vertpos +'px';
    
};

//Increasing and decreasing the height//
var bgHeight = 300;
var stayHeight = 0;

function changeHeight(theCode){
    if (theCode==187){
        bgHeight = bgHeight + 10;
    } else if (theCode==189){
        bgHeight = bgHeight - 10;
    }
    document.getElementById('background').style.height = bgHeight +'px';
};

//Interactions//
document.body.addEventListener("keydown",function(ev){
    moveBackground(ev.keyCode);
    changeHeight(ev.keyCode);
});

document.getElementById('menu').addEventListener("click",function(){
    expandMenu();
});

//Create and append//

function createUser(){
    var ndiv = document.createElement('div');
    var ndiv2 = document.createElement('div');
    var ndiv3 = document.createElement('div');
    
    ndiv.className = 'background';
    ndiv2.className = 'title';
    ndiv3.className = 'description';
    
    ndiv.appendChild(ndiv2);
    ndiv.appendChild(ndiv3);
    
    document.getElementById('display').appendChild(ndiv);
    ndiv2.innerHTML = document.getElementById('display').innerHTML;
};

document.getElementById('add').addEventListener('click',function(){
    
    createUser();
}
                                               
                                               )
