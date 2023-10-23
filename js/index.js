import { networking, database } from "./networking.js";

const nt = new networking();


var currentpage = window.location.href;

if (currentpage.endsWith("/index.html")) {
  const ids = ["Death_note", "Demon_Slayer", "spy_family", "horimiya", "onepiece", "madesama"];
  var trandinganime = document.getElementById("tradinganime").children;
  var i = 0;
  ids.forEach(element => {
    nt.fetchdata(`availabe_shows/` + element + `/name`).then((result) => {
      trandinganime[i].innerHTML = result;
      i += 1;
    })})

  const news_text = ["another", "bleach", "death_note", "demon_slayer", "spy_x_family"];
  var news_box = document.getElementById("news_box").children;
  var i = 0;
  news_text.forEach(element => {
    nt.fetchdata(`news_text/` + element + `/text`).then((result) => {
      // console.log(news_box.item(i).children[1])
      console.log(result);
      // news_box.item(i).children[1].innerHTML = result;
      i += 1;
    }).catch((error) => {
      console.log(error);
    });
  });

  nt.storageget("new_anime").then((result) => {
    const idk = document.getElementById("new_anime").children;
    i = 0;
    while (i < 6) {
      idk.item(i).children[0].src = result[i];
      i += 1;
    }
  }).catch((e) => {
    console.log(e)
  });

  nt.storageget("hindi_dub").then((result) => {
    const idk = document.getElementById("hindi_dub").children;
    i = 0;
    while (i < 6) {
      idk.item(i).children[0].src = result[i];
      i += 1;
    }

  }).catch((e) => {
    console.log(e)
  });

  nt.storageget("news").then((result) => {
    const idk = document.getElementById("news_box").children;
    i = 0;
    while (i < 5) {
      idk.item(i).children[0].src = result[i];
      i += 1;
    }

  }).catch((e) => {
    console.log(e)
  });
}

else if (currentpage.endsWith("/login.html")) {
  const loginbtn = document.getElementById("login");
  loginbtn.addEventListener("click", () => {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const user = nt.checkuser(email, password);
    console.log(user)
    location.replace("../index.html")

  });
}

else if (currentpage.endsWith("/sing.html")) {
  siginbtn.addEventListener("click", () => {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    nt.createuser(email, password);
    const db = new database();
    // db.fetchdata();
    location.replace("../index.html")
  });
}
