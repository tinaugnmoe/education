function changeOfDay(){
    var day = document.getElementById("demo").value ;
        switch(day){
            case "sunday":
                console.log("today is sunday")
                break;
            case "monday":
                console.log("today is monday")
                break;
            case "tuesday":
                console.log("today is tuesday")
                break;
            case "webnesday":
                console.log("today is webnesday")
                break;
            case "thursday":
                console.log("today is thursday")
                break;
            case "friday":
                console.log("today is friday")
                break;
            case "saturday":
                console.log("today is saturday")
                break;
            default:
                console.log("something worng")
        }
}