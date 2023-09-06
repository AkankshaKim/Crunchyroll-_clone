import { networking,database } from "./networking.js";

const nt = new networking();


var currentpage = window.location.href;

if (currentpage.endsWith("/index.html"))
{
  
  var deathnote = document.getElementById("deathnote");
  nt.fetchdata(`availabe_shows/Death_note/name`).then((result) => {
    deathnote.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });
  // deathnote.innerHTML =  
}

else if(currentpage.endsWith("/login.html"))
{

  const loginbtn = document.getElementById("login");
  loginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const user = nt.checkuser(email,password);
    console.log(user)
    location.replace("../index.html") 
      
  });
}

else if(currentpage.endsWith("/sing.html"))
{
  siginbtn.addEventListener("click",()=>{
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    nt.createuser(email,password);
    const db = new database();
    // db.fetchdata();
    location.replace("../index.html")
  });
  
}


// try{

//   const loginbtn = document.getElementById("login");
//   loginbtn.addEventListener("click",()=>{
//     var email = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     const user = nt.checkuser(email,password);
//     console.log(user)
//     location.replace("../index.html") 
      
//   });
// }
// catch(e){
//   siginbtn.addEventListener("click",()=>{
//     var email = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     nt.createuser(email,password);
//     const db = new database();
//     // db.fetchdata();
//     location.replace("../index.html")
//   });
// }

// deathnote = document.getElementById("deathnote");