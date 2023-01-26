var myBtn=document.getElementById("btn");
var arrayOfColors=["red","blue","green","aqua","black","brown"]
var i=0;
myBtn.onclick=function(){
    document.body.style.background = arrayOfColors[i];
    i++;
    if (i==(arrayOfColors.length)){
        i=0;
    }
};
