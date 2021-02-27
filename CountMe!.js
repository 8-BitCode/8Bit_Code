function showSidebar() {
    var x = document.getElementById('sidebar')
    if (x.className == "sidebar") {
        x.className += " show";
    }
    else {
        x.className = "sidebar";
    }
}



function Test(){
var X = parseFloat(document.getElementById("X").value);
var Y = parseFloat(document.getElementById("Y").value);
var Time = [];
for(var i = X; i<=Y; i+=0.25){

 Time.push(i);
}


var Tim = Math.floor(Math.random() * Time.length); 
var randomTime = Time[Tim] * 60000
console.log(randomTime);

setTimeout(notifyMe, randomTime);

}

