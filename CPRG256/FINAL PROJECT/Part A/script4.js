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
    xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "Permit Number") {
        searchByPermit(inputValue);
    } else if (inputType == "Description") {
        searchByDescription(inputValue);
    } else if (inputType == "Contractor-Name") {
        searchByContractor(inputValue);
    } else if (inputType == "Address") {
        searchByAddress(inputValue);
    }

}

function searchByPermit(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var permitnum = obj.permitnum;
        if (permitnum && permitnum.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.permitnum;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.contractorname;
            output += "</td><td>";
            output += obj.originaladdress;
            output += "</td><td>";
            let location = obj.latitude + "," + obj.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByDescription(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var description = obj.description;
        if (description && description.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.permitnum;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.contractorname;
            output += "</td><td>";
            output += obj.originaladdress;
            output += "</td><td>";
            let location = obj.latitude + "," + obj.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}


function searchByContractor(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var contractorname = obj.contractorname;
        if (contractorname && contractorname.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.permitnum;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.contractorname;
            output += "</td><td>";
            output += obj.originaladdress;
            output += "</td><td>";
            let location = obj.latitude + "," + obj.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}


function searchByAddress(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var originaladdress = obj.originaladdress;
        if (originaladdress && originaladdress.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.permitnum;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.contractorname;
            output += "</td><td>";
            output += obj.originaladdress;
            output += "</td><td>";
            let location = obj.latitude + "," + obj.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}