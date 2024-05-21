const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');

// Server oppstart
app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Serveren kjører på port ${port}`);
});

// Firebase konfigurasjon
const firebaseConfig = {
    apiKey: "AIzaSyBhpaA4qFr1adimbLg6eem-v3SUq8xn9hA",
    authDomain: "bilannonser-dce9f.firebaseapp.com",
    projectId: "bilannonser-dce9f",
    storageBucket: "bilannonser-dce9f.appspot.com",
    messagingSenderId: "697826528121",
    appId: "1:697826528121:web:090f47eac2616a9a51bda8",
    measurementId: "G-CFELDE140J"
};

// Initialisere Firebase-appen
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Eksporter Firebase-konfigurasjonen
module.exports = firebaseConfig;

// Funksjon for å hente bilannonser fra Firebase
async function getCars(db) {
    const carCol = collection(db, 'bilannonser');
    const carSnapshot = await getDocs(carCol);
    const carList = carSnapshot.docs.map(doc => doc.data());
    return carList;
}

module.exports = getCars;