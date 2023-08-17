function loginbtn() {
    var userinfo = {
        "snoopy":{
            "username":"snoopy@gmail.com",
            "password":"123"
        }
    }
    
    var Password,username;   
    Password = document.getElementById("password").value;
    username =  document.getElementById("Email or Username").value;
    try{
        if (username == userinfo[username]['username'] && password == userinfo[username]['password'])
        {
            location.href = "./index.html";
        }
        else {
            alert( "Your username  or Password are wrong.");
        }
    }
    catch{
        alert("user doesn't exist");
    }
}