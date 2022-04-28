function date() {
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    document.getElementById("date").innerHTML = "Today Date: " + m + "/" + d + "/" + y;
}


var xhr = new XMLHttpRequest();
var data;
window.onload = loaddata;

function loaddata() {
    date();

    document.getElementById("last-name").addEventListener("keyup", function () {
        search(this.value);
    }, false);
    document.getElementById("Client_List").addEventListener("click", function () {
        fillForm(this.value);
    }, false);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            search("");
        }
    };
    xhr.open("GET", "rentalclients.json", true);
    xhr.send();
}

function fillForm(i) {
    var obj = data[i];
    document.getElementById("first-name").value = obj.first_name;
    document.getElementById("l-name").value = obj.last_name;
    document.getElementById("phone-number").value = obj.phone;
    document.getElementById("address").value = obj.address;
    document.getElementById("province").value = obj.state_provinceinceince;
    document.getElementById("email").value = obj.email;
    var fields = document.getElementsByClassName("person-info");
    for (var j = 0; j < fields.length; j++) {
        fields[j].removeAttribute('disabled');
    }
}

function search(inputValue) {
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var lname = obj.last_name;
        if (lname.startsWith(inputValue)) {
            output += "<option value='" + i + "'> " + obj.last_name + " " + obj.first_name + "</option>";
        }
    }
    document.getElementById("Client_List").innerHTML = output;
}

function displayOrder() {
    var info = document.getElementById("first-name").value + " " + document.getElementById("l-name").value + "<br/>" + document.getElementById("address").value + ", " + document.getElementById("province").value + "<br/>Phone: " + document.getElementById("phone-number").value + "<br/>Email: " + document.getElementById("email").value;
    document.getElementById("Customer_Information").innerHTML = info;

    var table = document.getElementById("Result_Table");
    var total = 0;
    if (document.getElementById("compact").checked) {
        var row = table.insertRow(-1);
        var dayRentalCost = 25;
        total += dayRentalCost * document.getElementById("duration").value;
        var cellItem = row.insertCell(0);
        var cellDayCost = row.insertCell(1);
        var cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Compact Car";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    } else if (document.getElementById("midsize").checked) {
        row = table.insertRow(-1);
        dayRentalCost = 30;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Midsize Car";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    } else if (document.getElementById("luxury").checked) {
        row = table.insertRow(-1);
        dayRentalCost = 35;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Luxury Car";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    } else {
        row = table.insertRow(-1);
        dayRentalCost = 40;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Van/Truck";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    }
    if (document.getElementById("gps").checked) {
        row = table.insertRow(-1);
        dayRentalCost = 10;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "GPS";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    }
    if (document.getElementById("roofrack").checked) {
        row = table.insertRow(-1);
        dayRentalCost = 5;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Roof Rack";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    }
    if (document.getElementById("bikerack").checked) {
        row = table.insertRow(-1);
        dayRentalCost = 5;
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Bicycle Rack";
        cellDayCost.innerHTML = "$" + dayRentalCost;
        cellTotal.innerHTML = "$" + (dayRentalCost + " * " + document.getElementById("duration").value + " = $" + ((dayRentalCost * document.getElementById("duration").value).toFixed(2)));
    }
    if (document.getElementById("childseat").checked) {
        row = table.insertRow(-1);
        total += dayRentalCost * document.getElementById("duration").value;
        cellItem = row.insertCell(0);
        cellDayCost = row.insertCell(1);
        cellTotal = row.insertCell(2);
        cellItem.innerHTML = "Child Seat";
        cellDayCost.innerHTML = "Free";
        cellTotal.innerHTML = "Free";
    }
    row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "";
    cell2.innerHTML = "Total Cost:";
    cell3.innerHTML = "$" + total.toFixed(2);

    document.getElementById("Client_Box").style.display = "none";
    document.getElementById("Form_Box").style.display = "none";

}