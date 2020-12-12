var months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "satember",
    "october",
    "december"
];

var numOfMonths = months.length;
i = 0;
var text = "<ul>";
while (i<numOfMonths){
    text = text + "<li>" + months[i] + "</li>" ;
    i++;
}
text = text + "</ul>";
console.log(text);
document.getElementById("demo").innerHTML = text;


    