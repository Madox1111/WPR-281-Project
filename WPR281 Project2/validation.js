let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let emailformat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

function fblanklettercheck(x){
    if(x.value == ""){
        x.style.border = "2px solid red"
        x.placeholder = ("Please enter a value");
        flag1 = false;
        return false;
    }
    else if(x.value.match(/^[A-Za-z]+$/)){
        x.style.border = "2px solid green"
        flag1 = true;
        return true;
    }
    else{
        x.style.border = "2px solid red"
        alert("Please enter a value and make sure to use only letters");
        flag1 = false;
        return false;
    }
}

function lblanklettercheck(x){
    if(x.value == ""){
        x.style.border = "2px solid red"
        x.placeholder = ("Please enter a value");
        flag2 = false;
        return false;
    }
    else if(x.value.match(/^[A-Za-z]+$/)){
        x.style.border = "2px solid green"
        flag2 = true;
        return true;
    }
    else{
        x.style.border = "2px solid red"
        alert("Please enter a value and make sure to use only letters");
        flag2 = false;
        return false;
    }
}

function emailcheck(x){
    if(x.value == ""){
        x.style.border = "2px solid red"
        x.placeholder = ("Please enter an email");
        flag3 = false;
        return false;
    }
    
    else if(x.value.match(emailformat)){
        x.style.border = "2px solid green"
        flag3 = true;
        return true;
    }
    else{
        x.style.border = "2px solid red"
        alert("Please enter a valid email address using '@'");
        flag3 = false;
        return false;
    }
}

function phonenumbercheck(x){
    if(x.value == ""){
        x.style.border = "2px solid red"
        x.placeholder = ("Please enter a phone number");
        flag4 = false;
        return false;
    }
    else if(x.value.match(/^[0-9]+$/)){
        x.style.border = "2px solid green"
        flag4 = true;
        return true;
    }
    else{
        x.style.border = "2px solid red"
        alert("Please enter a valid phone number");
        flag4 = false;
        return false;
    }
}

function userIdCheck (x) {
    if(x.value == ""){
        x.style.border = "2px solid red"
        x.placeholder = ("Please enter a user id");
        flag5 = false;
        return false;
    } else{
        x.style.border = ("2px solid green");
        flag5 = true;
        return true;
    }
}


function ContinueBtn () {
   if (flag1 == true && flag2 == true && flag3 == true && flag4 == true && flag5 == true){
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("emailid").value;
    const userID = document.getElementById("userid").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const phonenum = document.getElementById("phoneNumber").value;
    const reference = document.getElementById("reference").value;
    const formData = ["First name: " + firstName, "\nLast name: " + lastName, "Email address :" + email,"User ID :" + userID, "User country: " + country, 
    "User state: " + state, "User city: " + city, "User phone number: " + phonenum,
    "User reference: " + reference]; 

    document.getElementById("form").style.display="none";

    let resulthead = document.createTextNode("User Data Summary")
    document.getElementById("resultsH").appendChild(resulthead)

    let popup = document.getElementById("PopupSummary");

    for (let i = 0; i < formData.length; i++) {
        popup.append(formData[i] +"\n");
        alert(formData[i] + "\n");
        popup.appendChild(document.createElement("br"))
    }
        popup.classList.toggle("show");
   } 
   else if(flag1 == true || flag2 == true || flag3 == true || flag4 == true || flag5 == true){
    alert("Please enter valid info so all input boxes are green");
    return false;
   } 
}

