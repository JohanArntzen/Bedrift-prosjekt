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

