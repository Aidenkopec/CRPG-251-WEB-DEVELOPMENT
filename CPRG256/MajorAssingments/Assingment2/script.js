window.addEventListener("load", updatePlanterSelection, false);
var asynchrequest;

function updatePlanterSelection() {
    if (document.getElementById("square").checked) {
        clearContent();
        getContent("square.html");
    } else if (document.getElementById("cylinder").checked) {
        clearContent();
        getContent("cylinder.html");
    } else if (document.getElementById("sphere").checked) {
        clearContent();
        getContent("sphere.html");
    } else {
        clearContent();
        getContent("cone.html");
    }
}

function onSubmit() {
    displayInvoice();
}

function displayInvoice() {
    var CustomerInfo = document.getElementById("fName").value + " " +
        document.getElementById("lName").value + "<br/>" +
        document.getElementById("address").value + "<br/>" +
        document.getElementById("pCode").value + "<br/>" +
        document.getElementById("phone").value + "<br/>" +
        document.getElementById("email").value;

    document.getElementById("Customer_Info").innerHTML = CustomerInfo;

    if (document.getElementById("square").checked) {
        var table = document.getElementById("Invoice_Table");
        var row = table.insertRow(-1);
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
        var height = document.getElementById("height").value;
        var volume = length * width * height;
        var costOfPlanter = (volume * 0.001);
        var cellItem = row.insertCell(0);
        var cellTotal = row.insertCell(1);
        cellItem.innerHTML = "Square Planter " + length + " X " + width + " X " + height;
        cellTotal.innerHTML = "$" + ((costOfPlanter).toFixed(2));
    } else if (document.getElementById("cone").checked) {
        table = document.getElementById("Invoice_Table");
        row = table.insertRow(-1);
        var bradius = document.getElementById("bradius").value;
        var tradius = document.getElementById("tradius").value;
        height = document.getElementById("height").value;
        volume = (1 / 3) * 3.14 * (bradius * bradius + (bradius * tradius) + tradius * tradius) * height;
        costOfPlanter = (volume * 0.002);
        cellItem = row.insertCell(0);
        cellTotal = row.insertCell(1);
        cellItem.innerHTML = "Top Radius " + tradius + " Bottom Radius " + bradius + " Height " + height;
        cellTotal.innerHTML = "$" + ((costOfPlanter).toFixed(2));
    } else if (document.getElementById("cylinder").checked) {
        table = document.getElementById("Invoice_Table");
        row = table.insertRow(-1);
        radius = document.getElementById("radius").value;
        height = document.getElementById("height").value;
        volume = 3.14 * radius * radius * height;
        costOfPlanter = (volume * 0.0012);
        cellItem = row.insertCell(0);
        cellTotal = row.insertCell(1);
        cellItem.innerHTML = "Cylinder Height " + height + " with radius of " + radius;
        cellTotal.innerHTML = "$" + ((costOfPlanter).toFixed(2));
    } else if (document.getElementById("sphere").checked) {
        table = document.getElementById("Invoice_Table");
        row = table.insertRow(-1);
        var radius = document.getElementById("radius").value;
        volume = 0.5 * ((4 / 3) * 3.14 * radius * radius * radius);
        costOfPlanter = (volume * 0.0015);
        cellItem = row.insertCell(0);
        cellTotal = row.insertCell(1);
        cellItem.innerHTML = "Half sphere with radius of " + radius;
        cellTotal.innerHTML = "$" + ((costOfPlanter).toFixed(2));
    }
    document.getElementById("Order_Page").style.display = "none";
    document.getElementById("Invoice_Page").style.display = "block";
}


function getContent(planterpage) {

    asynchrequest = new XMLHttpRequest();
    asynchrequest.onreadystatechange = function () {
        if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
            document.getElementById("Planter_Form").innerHTML = asynchrequest.responseText;
        }
    };
    asynchrequest.open("GET", planterpage, true);
    asynchrequest.send();
}


function clearContent() {

    document.getElementById("Planter_Form").innerHTML = "";

}

function calc() {
    if (document.getElementById("square").checked) {
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
        height = document.getElementById("height").value;
        volume = length * width * height;
        costOfPlanter = (volume * 0.001).toFixed(2);
    } else if (document.getElementById("cylinder").checked) {
        radius = document.getElementById("radius").value;
        height = document.getElementById("height").value;
        volume = 3.14 * radius * radius * height;
        costOfPlanter = (volume * 0.0012).toFixed(2);
    } else if (document.getElementById("sphere").checked) {
        var radius = document.getElementById("radius").value;
        volume = 0.5 * ((4 / 3) * 3.14 * radius * radius * radius);
        costOfPlanter = (volume * 0.0015).toFixed(2);
    } else if (document.getElementById("cone")) {
        var bradius = document.getElementById("bradius").value;
        var tradius = document.getElementById("tradius").value;
        var height = document.getElementById("height").value;
        var volume = (1 / 3) * 3.14 * (bradius * bradius + (bradius * tradius) + tradius * tradius) * height;
        var costOfPlanter = (volume * 0.002).toFixed(2);
    }
    document.getElementById("Current_Volume").innerHTML = "Volume of Planter in cubic centimetres: " + volume.toFixed(2);
    document.getElementById('Current_Total').innerHTML = "Cost of Planter: " + costOfPlanter;
}


