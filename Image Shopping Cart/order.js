/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW4_Spring_2016
 * Author: Suju
 * Filename: order.js
 * Date and Time: Mar 2, 2016 2:34:56 PM 
 * Project Name: CS557_Hw04_Spring2016_images 
 */
var price = [8.99, 10.99, 9.99, 11.99, 10.99, 12.99, 9.99, 11.99, 10.99, 12.99, 11.99, 13.99
            , 10.99, 12.99, 11.99, 13.99, 12.99, 14.99, 11.99, 13.99, 12.99, 14.99, 13.99, 15.99];
var currentSelectedItem = 1;
var HARD_COPY_GOOD = 1;
var HARD_COPY_GOOD_GLOSSY = 2;
var HARD_COPY_VERYGOOD = 3;
var HARD_COPY_VERYGOOD_GLOSSY = 4;
var HARD_COPY_EXCELLENT = 5;
var HARD_COPY_EXCELLENT_GLOSSY = 6;

var POSTER_GOOD = 7;
var POSTER_GOOD_GLOSSY = 8;
var POSTER_VERYGOOD = 9;
var POSTER_VERYGOOD_GLOSSY = 10;
var POSTER_EXCELLENT = 11;
var POSTER_EXCELLENT_GLOSSY = 12;

var COFFE_MUG_GOOD = 13;
var COFFE_MUG_GOOD_GLOSSY = 14;
var COFFE_MUG_VERYGOOD = 15;
var COFFE_MUG_VERYGOOD_GLOSSY = 16;
var COFFE_MUG_EXCELLENT = 17;
var COFFE_MUG_EXCELLENT_GLOSSY = 18;

var T_SHIRT_GOOD = 19;
var T_SHIRT_GOOD_GLOSSY = 20;
var T_SHIRT_VERYGOOD = 21;
var T_SHIRT_VERYGOOD_GLOSSY = 22;
var T_SHIRT_EXCELLENT = 23;
var T_SHIRT_EXCELLENT_GLOSSY = 24;

var cost = 0;
var glossy = 0;
var totalCost = 0;
var values;
var quantityInt = -1;
var quantityString;
var qualityIndex = 0;
function calculate() {
    console.log("Calculate method called");
    //Represents index of quality of item(0-2). 
    qualityIndex = document.getElementById('quality').selectedIndex;
    //Represents index of type of item(1-4).
    typeIndex = 0;
    var inputs = document.getElementsByName("Item");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            typeIndex = parseInt(inputs[i].id);
            values = inputs[i].value;
        }
    }
    var isGlossy = false;
    if (document.getElementById("glossy").checked)
        isGlossy = true;

    switch (typeIndex) {
        case 1:
            switch (qualityIndex) {
                case 0:
                    if (isGlossy)
                        currentSelectedItem = HARD_COPY_GOOD_GLOSSY;
                    else
                        currentSelectedItem = HARD_COPY_GOOD;
                    break;
                case 1:
                    if (isGlossy)
                        currentSelectedItem = HARD_COPY_VERYGOOD_GLOSSY;
                    else
                        currentSelectedItem = HARD_COPY_VERYGOOD;
                    break;

                case 2:
                    if (isGlossy)
                        currentSelectedItem = HARD_COPY_EXCELLENT_GLOSSY;
                    else
                        currentSelectedItem = HARD_COPY_EXCELLENT;
                    break;


            }
            break;
        case 2:
            switch (qualityIndex) {
                case 0:
                    if (isGlossy)
                        currentSelectedItem = POSTER_GOOD_GLOSSY;
                    else
                        currentSelectedItem = POSTER_GOOD;
                    break;
                case 1:
                    if (isGlossy)
                        currentSelectedItem = POSTER_VERYGOOD_GLOSSY;
                    else
                        currentSelectedItem = POSTER_VERYGOOD;
                    break;

                case 2:
                    if (isGlossy)
                        currentSelectedItem = POSTER_EXCELLENT_GLOSSY;
                    else
                        currentSelectedItem = POSTER_EXCELLENT;
                    break;

            }
            break;
        case 3:
            switch (qualityIndex) {
                case 0:
                    if (isGlossy)
                        currentSelectedItem = COFFE_MUG_GOOD_GLOSSY;
                    else
                        currentSelectedItem = COFFE_MUG_GOOD;
                    break;
                case 1:
                    if (isGlossy)
                        currentSelectedItem = COFFE_MUG_VERYGOOD_GLOSSY;
                    else
                        currentSelectedItem = COFFE_MUG_VERYGOOD;
                    break;

                case 2:
                    if (isGlossy)
                        currentSelectedItem = COFFE_MUG_EXCELLENT_GLOSSY;
                    else
                        currentSelectedItem = COFFE_MUG_EXCELLENT;
                    break;

            }
            break;
        case 4:
            switch (qualityIndex) {
                case 0:
                    if (isGlossy)
                        currentSelectedItem = T_SHIRT_GOOD_GLOSSY;
                    else
                        currentSelectedItem = T_SHIRT_GOOD;
                    break;
                case 1:
                    if (isGlossy)
                        currentSelectedItem = T_SHIRT_VERYGOOD_GLOSSY;
                    else
                        currentSelectedItem = T_SHIRT_VERYGOOD;
                    break;

                case 2:
                    if (isGlossy)
                        currentSelectedItem = T_SHIRT_EXCELLENT_GLOSSY;
                    else
                        currentSelectedItem = T_SHIRT_EXCELLENT;
                    break;
            }
            break;
    }

    var mydate = new Date();
    var delivery_date;
    var yr = mydate.getFullYear();
    var mon = mydate.getMonth() + 1;
    var month;
    var day = mydate.getDate();

    if (values == "hardcopyprint" || values == "poster")
    {
        day = day + 1;
    } else if (values == "coffee-mugs")
    {
        day = day + 2;
    } else if (values == "t-shirt") {
        day = day + 3;
    }

    delivery_date = yr + "-" + mon + "-" + day;

    quantityInt = -1;
    quantityString = document.getElementById("quantity").value;
    console.log("quantity is :" + quantity + "Before Parse :" + document.getElementById("quantity").value);
    if (quantityString == "") {
        document.getElementById("quantityid").innerHTML = "Enter quantity";
        document.getElementById("costOfItems").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("quantity").focus();
        return;
    } else if (parseInt(quantityString) < 1) {
        document.getElementById("quantityid").innerHTML = "Negative or Zero quantity not allowed";
        document.getElementById("costOfItems").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("quantity").focus();
    } else{
        console.log("inside quantity", +quantityString);
        quantityInt = parseInt(quantityString);
        totalCost = price[currentSelectedItem - 1] * quantityInt;

        document.getElementById("costOfItems").value = totalCost;
        console.log(delivery_date)
        document.getElementById("date").innerHTML = new Date(delivery_date).toDateString();
        document.getElementById("quantityid").innerHTML = "";
    }
}
function store() {

    calculate();
    if (localStorage.getItem(currentSelectedItem))
    {
        alert("Alerady present");
        console.log("Alerady present " + currentSelectedItem);
        console.log("Previous quantity " + localStorage.getItem(currentSelectedItem));
        var q = parseInt(localStorage.getItem(currentSelectedItem)) + parseInt(quantityInt);
        console.log("Total quantity " + q);
        localStorage.setItem(currentSelectedItem, q);
    } else {
        console.log("Adding new " + currentSelectedItem);
        //localStorage.setItem(item,values);
        localStorage.setItem(currentSelectedItem, quantityInt);
        //localStorage.setItem("Total Cost",totalCost);
        alert('Store in local storage');
    }
    document.getElementById('quantity').value = "";
    document.getElementById("costOfItems").value = "";
}
function clearLocalStorage() {
    alert("Clear local storage");
    console.log("Clear local storage");
    localStorage.clear();
}


