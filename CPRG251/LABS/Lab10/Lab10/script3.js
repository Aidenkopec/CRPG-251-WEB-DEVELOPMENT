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
    xhr.open("GET", "https://data.cityofnewyork.us/resource/qgea-i56i.json", true);
    xhr.send();


}

function search(inputValue, inputType) {
    // alert("I work")
    if (inputType == "offense") {
        searchByComplaint(inputValue);
    } else if (inputType == "Complaint-Number") {
        searchByNumber(inputValue);
    }
}

function searchByComplaint(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var law_cat_cd = obj.law_cat_cd;
        if (law_cat_cd  && law_cat_cd.includes(inputValue)) {
            output += "<tr><td>";
            output += obj.law_cat_cd;
            output += "</td><td>";
            output += obj.cmplnt_num;
            output += "</td><td>";
            output += obj.boro_nm;
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

function searchByNumber(inputValue) {
    var tableBody = document.getElementById("tbody");
    var output = "";
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var cmplnt_num = obj.cmplnt_num;
        if (cmplnt_num && cmplnt_num.startsWith(inputValue)) {
            output += "<tr><td>";
            output += obj.law_cat_cd;
            output += "</td><td>";
            output += obj.cmplnt_num;
            output += "</td><td>";
            output += obj.boro_nm;
            output += "</td></tr>";
        }
    }
    tableBody.innerHTML = output;
}

