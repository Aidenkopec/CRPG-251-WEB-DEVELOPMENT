function checkout() {


    var name = document.getElementById("name").value;
    var address = document.getElementById("Address").value;
    var pCode = document.getElementById("pCode").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var email = document.getElementById("email_contact").value;

    var message = "";

    var additionalAmount = parseFloat(0);

    var area = parseFloat(0);
    var increasedArea = parseFloat(0);
    var calculatedCost = parseFloat(0);
    var finalCost = parseFloat(0);


    var layer = document.querySelector("input[name=layers]:checked").value;

    var cakeChoice = document.querySelector("input[name=cake_type]:checked").value;

    var message1 = "";
    if (document.getElementById("length").value > 0) {
        message1 += document.getElementById("length").value + "cm ";

    }

    if (document.getElementById("width").value > 0) {
        message1 += document.getElementById("width").value + "cm";

    }


    if (document.getElementById("radius").value > 0) {
        message1 += document.getElementById("radius").value + "cm";

    }


    if (cakeChoice === 'Sheet') {
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
        if (length > 30 && width > 30) {
            area = length * width;
            increasedArea = area - 900;
            calculatedCost = increasedArea * 0.02;
            finalCost = calculatedCost + 18;

            switch (layer) {
                case '1':
                    calculatedCost = calculatedCost;
                    break;
                case '2':
                    calculatedCost = calculatedCost + 0.5 * calculatedCost;
                    break;
                case '3':
                    calculatedCost = calculatedCost * 2;
                    break;
            }
        }

    } else if (cakeChoice === 'Round') {
        var radius = document.getElementById("radius").value;
        if (radius > 15) {
            area = (radius * radius) * 3.14;
            increasedArea = area - 707;
            calculatedCost = increasedArea * 0.02;
            finalCost = calculatedCost + 15;

            switch (layer) {
                case '1':
                    calculatedCost = calculatedCost;
                    break;
                case '2':
                    calculatedCost = calculatedCost + 0.5 * calculatedCost;
                    break;
                case '3':
                    calculatedCost = calculatedCost * 2;
                    break;
            }
        }
    }


    if (document.querySelector('input[name=Cream-Cheese]:checked')) {


        additionalAmount += parseFloat(document.querySelector('input[name=Cream-Cheese]:checked').value);
        message = (message + "<br> Cream Cheese Icing $5");
    }


    if (document.querySelector('input[name=Fruit-And-Almond]:checked')) {

        additionalAmount += parseFloat(document.querySelector('input[name=Fruit-And-Almond]:checked').value);
        message = (message + "<br> Fruit and Almond Topping $7");
    }

    if (document.querySelector('input[name=Fruit-Jam]:checked')) {
        additionalAmount += parseFloat(document.querySelector('input[name=Fruit-Jam]:checked').value);
        message = (message + "<br> Fruit-Jam Filling $4");
    }

    finalCost += additionalAmount;

    var resultMessage = name + "<br>"
        + address + "<br>" + pCode + "<br>"
        + phoneNumber + "<br>" + email + "<br>" + "<br>" +

        "Your order: " + "<br>" + "<br>" +

        cakeChoice + " cake " + message1 + " with " + layer + " layers " + calculatedCost.toFixed(2) +
        message + "<br>" +
        " Total " + " " + finalCost.toFixed(2);


    document.getElementById("result").innerHTML = resultMessage;

}


function cakeSelection() {
    var cakeChoice = document.querySelector("input[name=cake_type]:checked").value;
    //alert(cakeChoice);
    if (cakeChoice === 'Sheet') {
        document.getElementById('sheetcake').style.visibility = 'visible';
        document.getElementById('roundcake').style.visibility = 'hidden';
    } else {
        document.getElementById('roundcake').style.visibility = 'visible';
        document.getElementById('sheetcake').style.visibility = 'hidden';
    }
}
