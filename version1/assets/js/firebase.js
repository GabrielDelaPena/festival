import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

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