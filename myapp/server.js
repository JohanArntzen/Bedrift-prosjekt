var firebase = require('firebase/app')
var firestore = require('firebase/firestore/lite')

const firebaseConfig = {
    apiKey: "AIzaSyBhpaA4qFr1adimbLg6eem-v3SUq8xn9hA",
    authDomain: "bilannonser-dce9f.firebaseapp.com",
    projectId: "bilannonser-dce9f",
    storageBucket: "bilannonser-dce9f.appspot.com",
    messagingSenderId: "697826528121",
    appId: "1:697826528121:web:090f47eac2616a9a51bda8",
    measurementId: "G-CFELDE140J"
};
console.log(firebaseConfig)
const express = require('express')
const app = express()
const port = 5050
const path = require('path')

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(firebaseApp);

async function getCars(db) {
    const carCol = firestore.collection(db, 'Bilannonser');
    const carDocs = await firestore.getDocs(carCol);
    const carList = carDocs.docs.map(doc => doc.data());
    return carList;
}

let cars; 
app.get('/cars', async (req, res) => {
    const car = await getCars(db);
    res.json(cars);
})

getCars(db).then(cars => console.log(cars))

