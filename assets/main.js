let erge1 = document.getElementById("erg1")
let erge2 = document.getElementById("erg2")
let schere = document.getElementById("scher")
let stein = document.getElementById("schtei")
let papier = document.getElementById("papie")
let info = document.getElementById("info")
let neu = document.getElementById("neu")
let usertex = document.getElementById("usertext1")
let aitex = document.getElementById("usertext2")
let user = ""
let ai = ""

schere.addEventListener("click", klicken)
function klicken() {
    user = "Schere"
    aiwahl()
    if (ai == "Schere") {
        info.textContent = "keine Punkte"
    } else if (ai == "Papier") {
        info.textContent = "ein Punkt für User"
        erge1.textContent = Number(erge1.textContent) + 1
    } else {
        info.textContent = "ein Punkt für Sayanjin AI"
        erge2.textContent = Number(erge2.textContent) + 1
    }
    gewinnerPruefen()
}

papier.addEventListener("click", klicken1)
function klicken1() {
    user = "Papier"
    aiwahl()
    if (ai == "Papier") {
        info.textContent = "keine Punkte"
    } else if (ai == "Stein") {
        info.textContent = "ein Punkt für User"
        erge1.textContent = Number(erge1.textContent) + 1
    } else {
        info.textContent = "ein Punkt für Sayanjin AI"
        erge2.textContent = Number(erge2.textContent) + 1
    }
    gewinnerPruefen()
}
stein.addEventListener("click", klicken2)
function klicken2() {
    user = "Stein"
    aiwahl()
    if (ai == "Stein") {
        info.textContent = "keine Punkte"
    } else if (ai == "Schere") {
        info.textContent = "ein Punkt für User"
        erge1.textContent = Number(erge1.textContent) + 1
    } else {
        info.textContent = "ein Punkt für Sayanjin AI"
        erge2.textContent = Number(erge2.textContent) + 1
    }
    gewinnerPruefen()
}

function aiwahl() {
    let e = (Math.floor(Math.random() * 3)) + 1
    if (e == 1) {
        ai = "Schere"
    } else if (e == 2) {
        ai = "Stein"
    } else {
        ai = "Papier"
    }
}
function gewinnerPruefen() {
    if (erge1.textContent == 3) {
        info.textContent = "User gewinnt 🏅 "
        usertex.style.backgroundColor = "green"
        schere.removeEventListener("click", klicken)
        papier.removeEventListener("click", klicken1)
        stein.removeEventListener("click", klicken2)

    } else if (erge2.textContent == 3) {
        info.textContent = "Sayanjin AI gewinnt 😢 "
        aitex.style.backgroundColor = "green"
        schere.removeEventListener("click", klicken)
        papier.removeEventListener("click", klicken1)
        stein.removeEventListener("click", klicken2)

    }

}
neu.addEventListener("click", zuruecksetzen)

function zuruecksetzen() {
    erge1.textContent = 0
    erge2.textContent = 0
    info.textContent = ""
    usertex.style.backgroundColor = ""
    aitex.style.backgroundColor = ""
    user = ""
    ai = ""
    schere.addEventListener("click", klickenSchere)
    papier.addEventListener("click", klickenPapier)
    stein.addEventListener("click", klickenStein)
}
