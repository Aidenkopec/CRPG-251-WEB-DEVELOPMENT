function checkout() {
    var client_name = document.getElementById("name").value;
    var client_phone = document.getElementById("phone_number").value;
    var client_pickUp = document.getElementById("pickup-time").value;

    var total = parseFloat(0);
    var message = "";

    if (document.getElementById("Margherita").value > 0) {

        total += document.getElementById("Margherita").value * 12.00;
        message += document.getElementById("Margherita").value + " Margherita<br>"
    }
    if (document.getElementById("Quattro-Formaggi").value > 0) {

        total += document.getElementById("Quattro-Formaggi").value * 12.50;
        message += document.getElementById("Quattro-Formaggi").value + " Quattro Formaggi<br>"
    }
    if (document.getElementById("Capricciosa").value > 0) {

        total += document.getElementById("Capricciosa").value * 13.00;
        message += document.getElementById("Capricciosa").value + " Schnitzel<br>"
    }


    if (document.getElementById("Schnitzel").value > 0) {

        total += document.getElementById("Schnitzel").value * 8.50;
        message += document.getElementById("Schnitzel").value + " Schnitzel<br>"
    }


    if (document.getElementById("Mixed-Grill").value > 0) {

        total += document.getElementById("Mixed-Grill").value * 9.50;
        message += document.getElementById("Mixed-Grill").value + " Mixed Grill<br>"
    }

    if (document.getElementById("Beef-Bun").value > 0) {

        total += document.getElementById("Beef-Bun").value * 10.00;
        message += document.getElementById("Beef-Bun").value + " Big Beef on a Bun<br>"
    }

    if (document.getElementById("Coffee").value > 0) {

        total += document.getElementById("Coffee").value * 2.00;
        message += document.getElementById("Coffee").value + " Coffee<br>"
    }

    if (document.getElementById("Latte").value > 0) {

        total += document.getElementById("Latte").value * 2.50;
        message += document.getElementById("Latte").value + " Latte<br>"
    }

    if (document.getElementById("Soft-Drink").value > 0) {

        total += document.getElementById("Soft-Drink").value * 8.50;
        message += document.getElementById("Soft-Drink").value + " Soft Drink<br>"
    }


    var resultMessage = client_name + "<br>"
        + client_phone + "<br>" + client_pickUp +
        + "<br>" + "<br>" + "Order:" + "<br>" + message + "<br>Total: $" + total.toFixed(2);

    document.getElementById("result").innerHTML = resultMessage;

    document.body.style.backgroundColor = "#EEC9BC"

}