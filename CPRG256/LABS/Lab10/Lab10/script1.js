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
    xhr.open("GET", "https://data.cityofnewyork.us/resource/h9gi-nx95.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
   // alert("I work")
    if (inputType == "Vehicle") {
        searchByVehicleType(inputValue);
    } else if (inputType == "Collision") {
        searchByID(inputValue);
    }
}

function searchByVehicleType(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var vehicle_type_code1 = obj.vehicle_type_code1;
        if (vehicle_type_code1  && vehicle_type_code1.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.vehicle_type_code1;
            output += "</td><td>";
            output += obj.collision_id;
            output += "</td><td>";
            output += obj.crash_time;
            output += "</td>";

            let location = obj.longitude + "," + obj.latitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByID(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var vehicleID = obj.collision_id;
        if (vehicleID && vehicleID.startsWith(inputValue)) {
            output += "<tr><td>";
            output += obj.vehicle_type_code1;
            output += "</td><td>";
            output += obj.collision_id;
            output += "</td><td>";
            output += obj.crash_time;
            // output += "</td><td>";

            let location = obj.longitude + "," + obj.latitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

