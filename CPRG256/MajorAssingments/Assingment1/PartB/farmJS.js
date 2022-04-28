function checkout() {
    var client_name = document.getElementById("name").value;
    var client_address = document.getElementById("Address").value;
    var radio_value = document.querySelector("input[name = delivery_type]:checked").value;


    var fruit = parseFloat(0);
    var vegHamper = parseFloat(0);
    var fruitHamper = parseFloat(0);
    var chicken = parseFloat(0);
    var pork = parseFloat(0);
    var total = parseFloat(0);
    var message = "";
    if (document.getElementById("Vegtable-Hamper").value > 0) {

        total += document.getElementById("Vegtable-Hamper").value * 30;
        message += document.getElementById("Vegtable-Hamper").value + " Vegtable Hamper<br>"
    }
    if (document.getElementById("Fruit-Hamper").value > 0) {
        total += document.getElementById("Fruit-Hamper").value * 20;
        message += document.getElementById("Fruit-Hamper").value + " Fruit Hamper<br>"
    }
    if (document.getElementById("Fresh-Chickens").value > 0) {
        total += document.getElementById("Fresh-Chickens").value * 7;
        message += document.getElementById("Fresh-Chickens").value + " Fresh Chickens<br>"
    }
    if (document.getElementById("Pork").value > 0) {
        total += document.getElementById("Pork").value * 5;
        message += document.getElementById("Pork").value + " Pork<br>"
    }


    var resultMessage = client_name + "<br>"
        + client_address + "<br>" + radio_value
        + "<br>" + "<br>" + "Order:" + "<br>" + message + "<br>Total: $" + total.toFixed(2);

    document.getElementById("result").innerHTML = resultMessage;


    document.body.style.backgroundColor = "#EEC9BC"


}

