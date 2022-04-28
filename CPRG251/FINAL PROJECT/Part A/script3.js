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
    xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "Community") {
        searchByCommunity(inputValue);
    } else if (inputType == "Quadrant") {
        searchByQuadrant(inputValue);
    } else if (inputType == "Year") {
        searchByYear(inputValue);
    } else if (inputType == "Category") {
        searchByCategory(inputValue);
    }

}

function searchByCommunity(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var community_name = obj.community_name;
        if (community_name && community_name.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.community_name;
            output += "</td><td>";
            output += obj.sector;
            output += "</td><td>";
            output += obj.year;
            output += "</td><td>";
            output += obj.category;
            output += "</td><td>";
            let location = obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
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
        var sector = obj.sector;
        if (sector && sector.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.community_name;
            output += "</td><td>";
            output += obj.sector;
            output += "</td><td>";
            output += obj.year;
            output += "</td><td>";
            output += obj.category;
            output += "</td><td>";
            let location = obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByYear(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var year = obj.year;
        if (year && year.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.community_name;
            output += "</td><td>";
            output += obj.sector;
            output += "</td><td>";
            output += obj.year;
            output += "</td><td>";
            output += obj.category;
            output += "</td><td>";
            let location = obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByCategory(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var category = obj.category;
        if (category && category.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.community_name;
            output += "</td><td>";
            output += obj.sector;
            output += "</td><td>";
            output += obj.year;
            output += "</td><td>";
            output += obj.category;
            output += "</td><td>";
            let location = obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude;
            output += "<a href = https://www.google.com/maps/search/?api=1&query=" + location + " target=_blank>Map Location<\/a>";
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

