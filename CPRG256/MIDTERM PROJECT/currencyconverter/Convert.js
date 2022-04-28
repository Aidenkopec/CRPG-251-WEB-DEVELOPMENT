function conversion() {

    var currency = document.getElementById("currency").value;
    var covert = document.getElementById("convert_currency").value;
    var result = 0;
    var ratio = 0;
    var get_currency = document.getElementById("amount").value;


    // EURO DOLLAR

    if (currency === "Euro" && covert === "US Dollar") {
        result = 1.11 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Euro" && covert === "Canadian Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 1.40 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Euro" && covert === "Bitcoin Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.000025 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Euro" && covert === "Ethereum Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.00038 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    }

    // US DOLLAR

    if (currency === "US Dollar" && covert === "Euro") {
        result = 0.90 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "US Dollar" && covert === "Canadian Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 1.27 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "US Dollar" && covert === "Bitcoin Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.000024 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "US Dollar" && covert === "Ethereum Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.00036 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    }

    // CAD DOLLAR

    if (currency === "Canadian Dollar" && covert === "Euro") {
        result = 0.71 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Canadian Dollar" && covert === "US Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 0.79 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Canadian Dollar" && covert === "Bitcoin Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.000019 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Canadian Dollar" && covert === "Ethereum Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.00028 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    }

    // BITCOIN

    if (currency === "Bitcoin Digital Currency" && covert === "Euro") {
        result = 38038.24 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Bitcoin Digital Currency" && covert === "US Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 42067.00 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Bitcoin Digital Currency" && covert === "Canadian Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 53370.82 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Bitcoin Digital Currency" && covert === "Ethereum Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 14.91 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    }


    // ETHEREUM

    if (currency === "Ethereum Digital Currency" && covert === "Euro") {
        result = 2597 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Ethereum Digital Currency" && covert === "US Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 2784.70 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Ethereum Digital Currency" && covert === "Canadian Dollar") {
        get_currency = document.getElementById("amount").value;
        result = 3566.64 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    } else if (currency === "Ethereum Digital Currency" && covert === "Bitcoin Digital Currency") {
        get_currency = document.getElementById("amount").value;
        result = 0.06649 * get_currency;
        ratio = (result / get_currency).toFixed(2) + ":" + (get_currency / get_currency);
        document.getElementById("conversion_amount").value = result.toFixed(2) + " Dollar (" + ratio + ")";
    }
}