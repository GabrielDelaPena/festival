// Window Onload. Een laad pagina die alle elementen laat laden dankzij een gif (of iets anders?)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

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
const storage = getStorage(app);
export const db = getFirestore(app);

/** ---------------------------------------------------------------------------------------------------------------- */

const btn_submit = document.querySelector(".submit");

const input_first_name = document.querySelector("#firstName");
const input_last_name = document.querySelector("#lastName");
const input_email = document.querySelector("#email");
const input_geboorte = document.querySelector("#geboortedatum");
const input_adres = document.querySelector("#adres");
const input_huis_nr = document.querySelector("#huisnummer");
const input_app_nr = document.querySelector("#appnummer");
const input_postcode = document.querySelector("#postcode");

getDownloadURL(
  ref(storage, "gs://festival-10290.appspot.com/pukkelpop.pdf")
).then((url) => {
  console.log(url);
});

// function generatePDF() {
//   const element = document.getElementById("pdf-file");
//   html2pdf(element);
//   console.log("test");
// }

btn_submit.addEventListener("click", (e) => {
  e.preventDefault();

  const checkbox_ticket = document.querySelector(
    'input[name="ticket"]:checked'
  );

  if (
    input_first_name.value === "" ||
    input_last_name.value === "" ||
    input_email.value === "" ||
    input_geboorte.value === "" ||
    input_adres.value === "" ||
    input_huis_nr.value === "" ||
    input_postcode.value === ""
  ) {
    return alert("Sommige velden zijn niet/verkeerd ingevuld.");
  }

  if (!checkbox_ticket) {
    return alert("Kiez een ticket voor het festival.");
  }

  const new_client = {
    voornaam: input_first_name.value,
    familienaam: input_last_name.value,
    email: input_email.value,
    geboorte: input_geboorte.value,
    adres: input_adres.value,
    huis_nr: input_huis_nr.value,
    app_nr: input_app_nr.value,
    postcode: input_postcode.value,
    ticket: checkbox_ticket.value,
    ticket_url: `https://firebasestorage.googleapis.com/v0/b/festival-10290.appspot.com/o/${checkbox_ticket.value}.pdf?alt=media&token=c1b10230-95af-42b7-9ea8-c5837a886e08`,
  };

  // addDoc(collection(db, "clients"), {
  //   voornaam: input_first_name.value,
  //   familienaam: input_last_name.value,
  //   email: input_email.value,
  //   geboorte: input_geboorte.value,
  //   adres: input_adres.value,
  //   huis_nr: input_huis_nr.value,
  //   app_nr: input_app_nr.value,
  //   postcode: input_postcode.value,
  //   ticket: checkbox_ticket.value,
  //   ticket_url: `https://firebasestorage.googleapis.com/v0/b/festival-10290.appspot.com/o/${checkbox_ticket.value}.pdf?alt=media&token=c1b10230-95af-42b7-9ea8-c5837a886e08`,
  // });

  console.log(new_client);
  document.querySelector(".registration-form").reset();
});
