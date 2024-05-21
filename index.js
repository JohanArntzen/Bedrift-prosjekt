let nigger = true

function epilepi(){
    if (nigger == true){
        document.querySelector(".text_box").style.animationDuration = "2ms"
        console.log("NEGER")
        document.querySelector(".nigger_tekst").style.display = "flex"
        document.querySelector("#bg_image").style.zIndex = 0
        nigger = false
    }
    else{
        document.querySelector(".text_box").style.animationDuration = "0ms"
        document.querySelector(".nigger_tekst").style.display = "none"
        document.querySelector("#bg_image").style.zIndex = 5
        nigger = true
    }
}






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