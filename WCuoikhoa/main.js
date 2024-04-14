let username = document.getElementById("email");
let password = document.getElementById("matkhau");

function Login(){
    if(!username.value){
        username.style.border = "1.5px solid red";
        username.style.backgroundColor = "rgba(255, 0, 0, 0.1)"; 
    }

    if(!password.value){
        password.style.border = "1.5px solid red";  
        password.style.backgroundColor = "rgba(255, 0, 0, 0.1)"; 
    }

    let infor = {
        "login": username.value,
        "password": password.value
    };
    
    if(username.value && password.value){
        const url = "https://recruitment-api.pyt1.stg.jmr.pl/login";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(infor),
        })
            .then(response => response.json())
            .then(data => {
                if(data.status === "ok"){
                    localStorage.setItem("userToken", data.userToken);
                    alert("Login successfully!")
                    window.location.replace("index2.html"); 
                }else{
                    alert("Email or password is not correct!");
                    username.value = "";
                    password.value = "";
                    username.style.borderColor = "rgba(217, 217, 217, 1)";
                    password.style.borderColor = "rgba(217, 217, 217, 1)";
                    username.style.backgroundColor = "white"; 
                    password.style.backgroundColor = "white"; 
                }
            })
    }
}


function checkEntry(){ 
    username.onblur = function(){
        if(username.value){
            username.style.border = "1.5px solid green"; 
        }else{
            username.style.borderColor = "rgba(217, 217, 217, 1)"; 
        }
    }
    
    password.onblur = function(){
        if(password.value){
            password.style.border = "1.5px solid green"; 
        }else{
            password.style.borderColor = "rgba(217, 217, 217, 1)";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", Login)
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title2").addEventListener("click", function() {
        window.location.href = "index1.html";
    });
});
