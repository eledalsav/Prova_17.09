function save() {
    let insertedName = document.getElementById("name").value;

    localStorage.setItem('name', insertedName)
}

function change() {
    let inputs = document.querySelectorAll("input[type='name']");
    let loginButton = document.querySelector("input[type=submit]");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") 
        {
            loginButton.disabled = true; 
            return; 
        }
    }
    loginButton.disabled = false; 
}

function hideForm() {
    
    let form = document.getElementById("formLogin");

    form.style.display = "none"; 

    
    let unsubscribebutton = document.getElementById("unsubscribeButton");

    unsubscribebutton.style.display = "";
}

function checkRegistredUser() {
   
    let storedName = localStorage.getItem('name'); 
   
    if (storedName != null ) 
    {
       
        hideForm(); 
    }

}

function unsubscribe() {

    localStorage.clear();

    let form = document.getElementById("formLogin");
    form.style.display = "";

    let subscribeFormButton = document.querySelector("input[type=submit]");
    subscribeFormButton.disabled = false;


    let unsubscribe2Button = document.getElementById("unsubscribeButton");
    unsubscribe2Button.style.display = "none";

}

function checkwelcome() {
    let storedName = localStorage.getItem('name');

    if (storedName != null) {

        alert("Benvenuto " + storedName);
    }
}