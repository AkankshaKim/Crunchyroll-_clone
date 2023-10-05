import { networking,database } from "./networking.js";

const nt = new networking();


var currentpage = window.location.href;

if (currentpage.endsWith("/index.html"))
{
  const ids = ["Death_note","Demon_Slayer","spy_family","horimiya","onepiece","madesama"];
  var trandinganime = document.getElementById("tradinganime").children;
  var i = 0;
  ids.forEach(element => {
    nt.fetchdata(`availabe_shows/`+element+`/name`).then((result) => {
      trandinganime[i].innerHTML = result;
      i+=1;
    }).catch((error) => {
      console.log(error);
    });
  });

  // const new_animes = ["a_silent_voice","AOT","chibi_devi","code_geass","death_parade","free","fruit_basket","jujutsu_kaisen"];
  // var new_anime = document.getElementById("new_anime").children;
  // var a = 0;
  // new_animes.forEach(element => {
  //   nt.fetchdata(`availabe_shows/new_arrival/`+element+`/name`).then((result) => {
  //     new_anime[a].innerHTML = result;
  //     a+=1;

  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // });
     nt.storageget().then((result)=>{
      document.getElementById("testimg").style.backgroundImage = "url("+result+")";
     }).catch((e)=>{
      console.log(e)
     });
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