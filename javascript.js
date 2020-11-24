var cars = ["BMW","VIGO","CROWN"];

var links = [
    "https://www.youtube.com/",
    "https://www.facebook.com/",
    "https://www.google.com.mm/webhp?tab=rw"];

var i = 0;
var numOfcar = cars.length;
var numOflink = links.length;
var text = "";


while(i<numOfcar){
    text += "<li><a href='"+links[i]+"'>"+cars[i]+"</a></li>" ;
    i++;
}


document.getElementById("demo3").innerHTML = text;
