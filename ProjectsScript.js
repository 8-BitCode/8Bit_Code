var jojos = ['johnathan', 'joesph','jotaro', 'josuke', 'giorono', 'joylne','johnny','joesfumi'];

function listjojos() {
    for (var i = 0; i < jojos.length; i++) {
        console.log(jojos[i]);
    }
}

listjojos();

function ClickedSacredButton(){
    alert('HOW DARE YOU CLICK THIS BUTTON MORTAL FOOL, I WILL DESTROY ALL THAT YOU HOLD DEAR, IT WAS ONE RULE YOU ABSOULTE NITWIIT >:(');
}

function Calculate() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var Operator = document.getElementById("operators").value;

    if (Operator == "+") {
        document.getElementById("results").value = n1 + n2;
    }
    else if (Operator == '-') {
        document.getElementById("results").value = n1 - n2;
    }
    else if (Operator == '/') {
        document.getElementById('results').value = n1 / n2;
    }
    else {
        document.getElementById("results").value = n1 * n2;
    }
}


