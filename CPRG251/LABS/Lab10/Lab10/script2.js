var data;
window.onload = loaddata;

function loaddata() {
    document.getElementById("input").addEventListener("keyup", function () {
        search(this.value, document.getElementById("searchOption").value);
    }, false);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.cityofnewyork.us/resource/ic3t-wcy2.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "Street-Name") {
        searchByStreetName(inputValue);
    } else if (inputType == "Lot-Number") {
        searchByLotNum(inputValue);
    }
}

function searchByStreetName(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var street_name = obj.street_name;
        if (street_name  && street_name.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.street_name;
            output += "</td><td>";
            output += obj.lot;
            output += "</td><td>";
            output += obj.borough;
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByLotNum(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var lot = obj.lot;
        if (lot && lot.startsWith(inputValue)) {
            output += "<tr><td>";
            output += obj.street_name;
            output += "</td><td>";
            output += obj.lot;
            output += "</td><td>";
            output += obj.borough;
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}
