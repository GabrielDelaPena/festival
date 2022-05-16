// // Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  doc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEXVDNpBMpmpoIJj0pzJAAj5i5_4-gh_I",
  authDomain: "festival-10290.firebaseapp.com",
  projectId: "festival-10290",
  storageBucket: "festival-10290.appspot.com",
  messagingSenderId: "883743707195",
  appId: "1:883743707195:web:2fa57ea8c365a2e1e1cc1e",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore(app);

/** ---------------------------------------------------------------------------------------------------------------- */

const btn_submit = document.querySelector(".button");
const input_username = document.querySelector("#user");
const input_password = document.querySelector("#pass");
const colRef = collection(db, "admin");
let admin = {};

getDocs(colRef).then((snapshot) => {
  admin = snapshot.docs[0].data();
});

btn_submit.addEventListener("click", (e) => {
  const admin_password = admin.password;
  const admin_username = admin.username;

  if (input_username.value === "" || input_password.value === "") {
    input_username.value = "";
    input_password.value = "";
    return alert("Een van de velden is leeg.");
  }

  if (admin_username != input_username.value) {
    input_username.value = "";
    input_password.value = "";
    return alert("Username is incorrect.");
  }

  if (admin_password != input_password.value) {
    input_username.value = "";
    input_password.value = "";
    return alert("Password is incorrect.");
  }

  if (
    admin_username === input_username.value &&
    admin_password === input_password.value
  ) {
    console.log("admin is ingelogd");
    input_username.value = "";
    input_password.value = "";
    window.location.href = "home.html";
  }
});
