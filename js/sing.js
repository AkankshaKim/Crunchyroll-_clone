var userinfo ;
     userinfo = {
        "snoopy":{
            "username":"snoopy",
            "password":"123"
        },
        "booboo":{
            "username":"booboo",
            "password":"1234"
        }
    }       

function checkinfo(){
    var username,password;
    username = document.getElementById("username").value;
    password = document.getElementById("Password").value;
    if( userinfo["snoopy"]["username"] == username && userinfo["snoopy"]["password"] == password)
    {
        alert("your username and password is correct")
    }
    else if(username == "" || password == "")
    {
        alert("please enter your password and username")
    }
    else
    {
        alert("please check your username and password")
    }
}
function checkinfo(){
    var username,password;
    username = document.getElementById("username").value;
    password = document.getElementById("Password").value;
    if( userinfo["booboo"]["username"] == username && userinfo["booboo"]["password"] == password)
    {
        alert("your email and password is correct")
    }
    else if(username == "" || password == "")
    {
        alert("please enter your password and username")
    }
    else
    {
        alert("please check your username and password")
    }
}