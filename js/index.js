import { networking,database } from "./networking.js";

const nt = new networking();


try{

  const loginbtn = document.getElementById("login");
  loginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const user = nt.checkuser(email,password);
    console.log(user)
    location.replace("../Crunchyroll-_clone/index.html") 
      
  });
}
catch(e){
  siginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    nt.createuser(email,password);
    const db = new database();
    // db.fetchdata();
    location.replace("../index.html")
  });
}
