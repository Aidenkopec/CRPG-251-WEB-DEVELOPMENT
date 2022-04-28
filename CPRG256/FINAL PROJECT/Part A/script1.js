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
    xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "Incident-Info") {
        searchByIncident(inputValue);
    } else if (inputType == "Description") {
        searchByDescription(inputValue);
    } else if (inputType == "ID") {
        searchByID(inputValue);
    } else if (inputType == "Quadrant") {
        searchByQuadrant(inputValue);
    }
}

function searchByIncident(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var incident_info = obj.incident_info;
        if (incident_info && incident_info.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.incident_info;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.quadrant;

            output += "</td><td>";
            var position="";
            for(var j=0; j<data[i].point.coordinates.length ; j++) {
                if(j==0)
                {
                    position += obj.point.coordinates[j+1]+",";
                }
                else
                {
                    position += obj.point.coordinates[j-1];
                }
            }
            // let location = obj.coordinates;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Map Location<\/a>";
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
        if (description && description.startsWith(inputValue)) {
            output += "<tr><td>";
            output += obj.incident_info;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.quadrant;
            output += "</td><td>";
            var position="";
            for(var j=0; j<data[i].point.coordinates.length ; j++) {
                if(j==0)
                {
                    position += obj.point.coordinates[j+1]+",";
                }
                else
                {
                    position += obj.point.coordinates[j-1];
                }
            }
            // let location = obj.coordinates;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Map Location<\/a>";
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
        var id = obj.id;
        if (id && id.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.incident_info;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.quadrant;
            output += "</td><td>";
            var position="";
            for(var j=0; j<data[i].point.coordinates.length ; j++) {
                if(j==0)
                {
                    position += obj.point.coordinates[j+1]+",";
                }
                else
                {
                    position += obj.point.coordinates[j-1];
                }
            }
            // let location = obj.coordinates;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}


function searchByQuadrant(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var quadrant = obj.quadrant;
        if (quadrant && quadrant.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.incident_info;
            output += "</td><td>";
            output += obj.description;
            output += "</td><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.quadrant;
            output += "</td><td>";
            var position="";
            for(var j=0; j<data[i].point.coordinates.length ; j++) {
                if(j==0)
                {
                    position += obj.point.coordinates[j+1]+",";
                }
                else
                {
                    position += obj.point.coordinates[j-1];
                }
            }
            // let location = obj.coordinates;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}


