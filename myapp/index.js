let carList = fetch('/cars').then(response => response.json()).then(data => { 
    printCar (data[0])
    return data;
});

function printCar (carList){
    carDiv = document.getElementById("s");
    for (let key in carList) { 
        item = document.createElement("p");
        item.innerHTML = carList [key]; carDiv.appendChild(item);
        console.log(key, carList[key]);
    }
}  

/*
const header = card.querySelector("[bilmodell]")
const body = card.querySelector("[pris]")
const picture = card.querySelector("[bilde]")

header.textContent = bil.Bilmodell
body.textContent = bil.Pris
picture.src = BildeURL
MediaContainer.append(card)
const MediaContainer = document.querySelector("[media_container]")
*/