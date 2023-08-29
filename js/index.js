import { networking } from "./networking.js";

const nt = new networking();


try{

  const loginbtn = document.getElementById("login");
  loginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var status =  nt.checkuser(email,password);
    location.replace("../index.html")
      
  });
}
catch(e){
  siginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    nt.createuser(email,password);
  });
}