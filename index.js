let carList = fetch('/bilannonser').then(response => response.json()).then(data => { 
    printTodo (data[0])
    return data;
});

function printTodo (carList){
    carDiv = document.getElementById("media-element");
    for (let key in carList) { 
        item = document.createElement("p");
        item.innerHTML = carList [key]; carDiv.appendChild(item);
        console.log(key, carList[key]);
    }
}  