//Written by William Ibarra on March 1, 2021 for SYST 10199
function calculateTotal() { //This function validates user delivery information and prices for the items
    var valid = true;
    var temp = document.getElementById("lName").value;
    if(temp == "") {
        document.getElementById("a1").innerHTML="First name is required.";
        valid = false;
    } else {
        document.getElementById("a1").innerHTML="*";
    }
    //------------------------------------------------------------------------------------   
    temp = document.getElementById("fName").value;
    if(temp == "") {
        document.getElementById("a2").innerHTML="Last name is required.";
        valid = false;
    } else {
        document.getElementById("a2").innerHTML="*";
    }
    //----------------------------------------------------------------------------------------
    var temp  = parseInt(document.getElementById("pNumber").value);
    if(temp == "" || isNaN(temp)) {
        document.getElementById("a3").innerHTML="Phone Number is required. Phone Number must be integers only.";
        valid = false;
    } else {
        document.getElementById("a3").innerHTML="*";
    }
    //-----------------------------------------------------------------------------------------
    var crustType;
    if(document.getElementById("thnCrust").checked) {
        crustType = "Thin Crust";
    } else if(document.getElementById("hndCrust").checked) {
        crustType = "Hand Crust";
    } else if(document.getElementById("regCrust").checked) {
        crustType = "Regular Crust";
    }
    //------------------------------------------------------------------------------------------
    var total = 0;
    if(document.getElementById("vegSmall").checked) {
        total += 10;
    } else if(document.getElementById("vegMedium").checked) {
        total += 12;
    } else if (document.getElementById("vegLarge").checked) {
        total += 14;
    }
    //----------------------------------------------------------------------------------------
    if(document.getElementById("pepSmall").checked) {
        total += 20;
    } else if(document.getElementById("pepMedium").checked) {
        total += 22;
    } else if(document.getElementById("pepLarge").checked) {
        total += 24;
    }
    if(document.getElementById("cheSmall").checked) {
        total += 30;
    } else if(document.getElementById("cheMedium").checked) {
        total += 32;
    } else if(document.getElementById("cheLarge").checked) {
        total += 34;
    }
    if(document.getElementById("coke").selected) {
        total += 2;
    } else if(document.getElementById("sprite").selected) {
        total += 2;
    } else if(document.getElementById("canadaDry").selected) {
        total +=2;
    }
    //-----------------------------------------------------------------------------------------
    if(valid == false && total == 0) { //delivery incorrect and no food
        document.getElementById("printOut").innerHTML="An error occured. Please check your delivery information and select at least one option to proceed. Error #1";
    } else if(valid == false && total > 0) { //delivery incorrect and with food
        document.getElementById("printOut").innerHTML="An error occurred. Please check your delivery information and try again. Error #2";
    } else if(valid == true && total == 0) { //delivery correct and no food
        document.getElementById("printOut").innerHTML="An error occured. Please pick at least one food option. Error #3";
    } else if(valid == true && total > 0) {//delivery correct and with food and crust type
            document.getElementById("printOut").innerText="Your crust type: " + crustType  + "\nYour subtotal is: $" + total + "\nYour tax is: 13%" + "\nYour total is: $" + (total + (total * 0.13)).toFixed(2);
            document.getElementById("printOut").style.color= "black";
        }
    }
function displaySource (){ //This function will display the image source of pizza delivery
    document.getElementById("displayImageSource").innerHTML="<ul>" + "<li>Paskaleva, M. (n.d.). Pizza delivery. Cartoon pizza boy [Photograph]. Dreamstime. https://www.dreamstime.com/pizza-delivery-smile-motorcycle-boy-delivers-hot-pizzas-cartoon-n-image110596227</li>" + "</ul>";
}
    