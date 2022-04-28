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
    xhr.open("GET", "https://data.calgary.ca/resource/k7p9-kppz.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "Quadrant") {
        searchByQuadrant(inputValue);
    } else if (inputType == "Address") {
        searchByAddress(inputValue);
    } else if (inputType == "Camera-Num") {
        searchByCameraNumber(inputValue);
    } else if (inputType == "URL") {
        searchByCameraURL(inputValue);
    }

}

function searchByQuadrant(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var quadrant = obj.quadrant;
        if (quadrant && quadrant.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.quadrant;
            output += "</td><td>";
            output += obj.camera_location;
            output += "</td><td>";
            output += obj.camera_url.description;
            output += "</td><td>";
            output += obj.camera_url.url;
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


function searchByAddress(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var camera_location = obj.camera_location;
        if (camera_location && camera_location.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.quadrant;
            output += "</td><td>";
            output += obj.camera_location;
            output += "</td><td>";
            output += obj.camera_url.description;
            output += "</td><td>";
            output += obj.camera_url.url;
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


function searchByCameraNumber(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        // var camera_url = obj.camera_url.url;
        var camera_url = obj.camera_url.description;
        if (camera_url && camera_url.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.quadrant;
            output += "</td><td>";
            output += obj.camera_location;
            output += "</td><td>";
            output += obj.camera_url.description;
            output += "</td><td>";
            output += obj.camera_url.url;
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


function searchByCameraURL(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {

        var obj = data[i];
        // alert(obj.camera_url.description)

        var camera_url = obj.camera_url.url;
        // var camera_url = obj.camera_url.description;
        if (camera_url && camera_url.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.quadrant;
            output += "</td><td>";
            output += obj.camera_location;
            output += "</td><td>";
            output += obj.camera_url.description;
            output += "</td><td>";
            output += obj.camera_url.url;
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

