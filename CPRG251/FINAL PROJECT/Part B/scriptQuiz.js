window.onload = loaddata;
var data;
var answers;

function loaddata() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            Quiz(xhr);
        }
    };
    xhr.open("GET", "FinalQuiz.xml", true);
    xhr.send();
}

function Quiz(xml) {
    var xmlDoc;
    xmlDoc = xml.responseXML;
    data = xmlDoc.getElementsByTagName("finalquiz");
    var finalquiz = data[0];
    var txt = "";
    for (var i = 0; i < finalquiz.childNodes.length; i++) {
        if (finalquiz.childNodes[i].nodeName == "#text") {

        } else if (finalquiz.childNodes[i].nodeName == "question") {
            var question = finalquiz.childNodes[i];
            var questionNum;
            for (var j = 0; j < finalquiz.childNodes.length; j++) {
                if (question.childNodes[j].nodeName == "#text") {
                } else {
                    if (question.childNodes[j].nodeName == "qnumber") {
                        txt += "Question " + question.childNodes[j].childNodes[0].nodeValue + "<br><br>";
                        questionNum = question.childNodes[j].childNodes[0].nodeValue;
                    } else if (question.childNodes[j].nodeName == "qtitle") {
                        txt += question.childNodes[j].childNodes[0].nodeValue + "<br><br>";
                    } else {
                        txt += "<input type='radio' name='" + questionNum + "' value='" + question.childNodes[j].nodeName + "'>";
                        txt += question.childNodes[j].nodeName + ") " + question.childNodes[j].childNodes[0].nodeValue + "<br>";
                    }
                }
            }
            txt += "<br>";
        } else if (finalquiz.childNodes[i].nodeName == "rightanswers") {
            answers = finalquiz.childNodes[i].childNodes[0].nodeValue.split(",");
        }
    }
    document.getElementById("questions").innerHTML = txt;
}

function checkAnswers() {
    var count = 0;
    try {
        for (var i = 0; i < answers.length; i++) {
            if (document.querySelector("input[name='" + (i + 1) + "']:checked").value == answers[i]) {
                count++;
            }
        }
        var txt = "<h2> Your Score! " + count + "/" + answers.length + "</h2>";
        if (count == answers.length) {
            txt += "<h2> Congratulations You Got 100% ٩(◕‿◕｡)۶ </h2>";
        }
        document.getElementById("result").innerHTML = txt;
        document.getElementById("form").style.display = 'none';
    } catch (err) {
        alert("Answers are missing complete all question!!");
    }
}
