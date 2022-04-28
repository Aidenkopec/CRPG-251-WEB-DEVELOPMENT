var arrayObject = [];

//var i = 0;

function infoArray() {
    var personInfo = {name, address, postalCode, phoneNumber, email};
    personInfo.name = document.getElementById("name").value;
    personInfo.address = document.getElementById("address").value;
    personInfo.postalCode = document.getElementById("postalCode").value;
    personInfo.phoneNumber = document.getElementById("phoneNumber").value;
    personInfo.email = document.getElementById("email").value;


    arrayObject.push(personInfo);
    displayInfo();


}


function displayInfo() {

    var customer = "";
    var radioButton = "";

    for (var i = 0; i < arrayObject.length; i++) {
        var personInfo = {name, address, postalCode, phoneNumber, email};
        personInfo = arrayObject[i];
        customer = personInfo.name + ", " + personInfo.address + ", " + personInfo.postalCode
            + ", " + personInfo.phoneNumber + ", " + personInfo.email;


        radioButton += "<input type=radio name=listitem ";
        radioButton += " value=" + i + " ";
        radioButton += " onchange=deleteItem(this.value)>";
        radioButton += customer + "<br>";
    }

    document.getElementById("info").innerHTML = radioButton;

}


function deleteItem(i) {
    arrayObject.splice(i, 1);
    displayInfo();

}