import { networking,database } from "./networking.js";

const nt = new networking();


var currentpage = window.location.href;

if (currentpage.endsWith("/index.html"))
{
  const ids = ["deathnote","demonslayer","spyfamily","horimiya","onepiece","madesama"]
  let animes = "";
  for (let i=0; i<ids.length; i++){
    animes += ids[i];
  }
  console.log(animes)
  nt.fetchdata(`availabe_shows/name`).then((animes) =>{
    console.log(animes)
  document.getElementById("anime1").innerHTML = animes;
  });

  // var deathnote = document.getElementById("deathnote");
  // nt.fetchdata(`availabe_shows/Death_note/name`).then((result) => {
  //   deathnote.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // });
  // // deathnote.innerHTML = 
  // var demonslayer = document.getElementById("demonslayer");
  // nt.fetchdata(`availabe_shows/Demon_Slayer/name`).then((result) => {
  //   demonslayer.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // }); 

  // var spyfamily = document.getElementById("spyfamily");
  // nt.fetchdata(`availabe_shows/spy_family/name`).then((result) => {
  //   spyfamily.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // }); 

  // var horimiya = document.getElementById("horimiya");
  // nt.fetchdata(`availabe_shows/horimiya/name`).then((result) => {
  //   horimiya.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // }); 

  // var onepiece = document.getElementById("onepiece");
  // nt.fetchdata(`availabe_shows/onepiece/name`).then((result) => {
  //   onepiece.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // }); 

  // var madesama = document.getElementById("madesama");
  // nt.fetchdata(`availabe_shows/madesama/name`).then((result) => {
  //   madesama.innerHTML = result;
  // }).catch((error) => {
  //   console.log(error)
  // }); 
  // new arrival

  var a_silent_voice = document.getElementById("a_silent_voice");
  nt.fetchdata(`availabe_shows/new_arrival/a_silent_voice/name`).then((result) => {
    a_silent_voice.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var aot = document.getElementById("aot");
  nt.fetchdata(`availabe_shows/new_arrival/AOT/name`).then((result) => {
    aot.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var chibi_devi = document.getElementById("chibi_devi");
  nt.fetchdata(`availabe_shows/new_arrival/chibi_devi/name`).then((result) => {
    chibi_devi.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var code_geass = document.getElementById("code_geass");
  nt.fetchdata(`availabe_shows/new_arrival/code_geass/name`).then((result) => {
    code_geass.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var death_parade = document.getElementById("death_parade");
  nt.fetchdata(`availabe_shows/new_arrival/death_parade/name`).then((result) => {
    death_parade.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var free = document.getElementById("free");
  nt.fetchdata(`availabe_shows/new_arrival/a_silent_voice/name`).then((result) => {
    free.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var fruite_basket = document.getElementById("fruite_basket");
  nt.fetchdata(`availabe_shows/new_arrival/fruits_basket/name`).then((result) => {
    fruite_basket.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var welcome_to_demon_school = document.getElementById("welcome_to_demon_school");
  nt.fetchdata(`availabe_shows/new_arrival/welcome_to_demon_school/name`).then((result) => {
    welcome_to_demon_school.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var jujutsu_kaisen = document.getElementById("jujutsu_kaisen");
  nt.fetchdata(`availabe_shows/new_arrival/jujutsu_kaisen/name`).then((result) => {
    jujutsu_kaisen.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var naruto = document.getElementById("naruto");
  nt.fetchdata(`availabe_shows/new_arrival/naruto/name`).then((result) => {
    naruto.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var parasyte = document.getElementById("parasyte");
  nt.fetchdata(`availabe_shows/new_arrival/parasyte/name`).then((result) => {
    parasyte.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var tokyo_ghoul = document.getElementById("tokyo_ghoul");
  nt.fetchdata(`availabe_shows/new_arrival/tokyo_ghoul/name`).then((result) => {
    tokyo_ghoul.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  // footer

  var Navigation = document.getElementById("Navigation");
  nt.fetchdata(`footer/Navigation/name`).then((result) => {
    Navigation.innerHTML = result;
  }).catch((error) => {
    console.log(error)
  });

  var BrowsePopular  = document.getElementById("BrowsePopular");
  nt.fetchdata(`footer/Navigation/name`).then((result) => {
    BrowsePopular.innerHTML = result;
  }).catch((error) => {
    console.log(error)
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