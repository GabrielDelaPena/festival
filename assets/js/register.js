// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import {
  getFirestore,
  addDoc,
  collection,
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
export const db = getFirestore(app);

const btn_submit = document.querySelector(".submit");

const input_first_name = document.querySelector("#firstName");
const input_last_name = document.querySelector("#lastName");
const input_email = document.querySelector("#email");
const input_geboorte = document.querySelector("#geboortedatum");
const input_adres = document.querySelector("#adres");
const input_huis_nr = document.querySelector("#huisnummer");
const input_app_nr = document.querySelector("#appnummer");
// const checkbox_ticket = document.querySelector('input[name="ticket"]:checked');
const checkbox_ticket = document.querySelector(".ticket");

btn_submit.addEventListener("click", (e) => {
  e.preventDefault();

//   const new_client = {
//     voornaam: input_first_name.value,
//     familienaam: input_last_name.value,
//     email: input_email.value,
//     geboorte: input_geboorte.value,
//     adres: input_adres.value,
//     huis_nr: input_huis_nr.value,
//     app_nr: input_app_nr.value,
//     ticket: checkbox_ticket.checked,
//   };

  addDoc(collection(db, "clients"), {
    voornaam: input_first_name.value,
    familienaam: input_last_name.value,
    email: input_email.value,
    geboorte: input_geboorte.value,
    adres: input_adres.value,
    huis_nr: input_huis_nr.value,
    app_nr: input_app_nr.value,
    ticket: checkbox_ticket.checked,
  });

    // console.log(new_client);

  alert("client added.");
});
