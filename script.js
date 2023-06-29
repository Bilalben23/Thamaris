function remove_menu() {
    document.getElementById("i-labl").style.color = "initial";
    document.getElementById("navigation").style.transform = "translate(-100%)"
    document.getElementById("i-labl").className = "fa-sharp fa-solid fa-bars fa-2xl"
}

function show_menu() {
    document.getElementById("i-labl").style.color = "#D8315B";
    document.getElementById("i-labl").className = "fa-solid fa-circle-xmark fa-2xl";
    document.getElementById("navigation").style.transform = "translate(0)"

}

document.getElementById("mylabl").onclick = function () {
    let isChecked = document.getElementById("ch").checked;
    if (isChecked) {
        show_menu()
    } else {
        remove_menu()
    }
}

let anchor_links = document.getElementById("navigation").getElementsByTagName("a");
console.log(anchor_links);
anchor_links[0].onclick = remove_menu;
anchor_links[1].onclick = remove_menu;
anchor_links[2].onclick = remove_menu;
anchor_links[3].onclick = remove_menu;

// ========================================================

document.addEventListener("dblclick", remove_menu) // //////////////////////////////////////////////////////////////

document.getElementById("btn-email").onclick = function () {
    let isvisible = document.getElementById("myEmailForm").style.display == "block";
    if (isvisible) {
        document.getElementById("myEmailForm").style.display = "none";
    } else {
        document.getElementById("myEmailForm").style.display = "block";
    }
}

// ////////////////////////  //////////////////////////////////////

var backToTopBtn = document.getElementById("back-top");
window.onscroll = function () {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// ====== ==== ===== ===== ======= ====== ==== ===== ==== //

let services = document.getElementsByClassName("services")
[0].getElementsByTagName("div");
let menus = document.getElementsByClassName("menu-drinks")[0].getElementsByTagName("div");
let menu_plates = document.getElementsByClassName("menu-plates")[0].getElementsByTagName("div");
let menu_pizza = document.getElementsByClassName("menu-pizza")[0].getElementsByTagName("div");

let thamaris_intro = document.getElementsByClassName("thamaris-intro")[0];
let myForm = document.getElementsByClassName("myform")[0];
let thamaris_views = document.getElementsByClassName("thamaris-views")[0];
let callIcon = document.getElementById("callIcon");

function atNight() {
    document.body.style.backgroundColor = "#394867";
    document.body.style.color = "white";
    document.getElementById("i-labl").style.color = "initial";
    thamaris_intro.style.backgroundColor = "white";
    thamaris_intro.style.color = "initial";
    thamaris_intro.style.boxShadow = "1px 1px 10px 1px black";
    thamaris_views.style.boxShadow = "1px 1px 10px 1px black";
    thamaris_views.style.backgroundColor = "white";
    thamaris_views.style.color = "black";
    callIcon.style.color = "#0079FF";


    for (div of services) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px black";
    }
    for (div of menus) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px black";
    }
    for (div of menu_plates) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px black";
    }
    for (div of menu_pizza) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px black";
    }
    myForm.style.boxShadow = "1px 1px 15px 1px black";
}

function atDay() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "initial";
    thamaris_views.style.boxShadow = "1px 1px 10px 1px gray";
    thamaris_views.style.backgroundColor = "white";
    callIcon.style.color = "darkblue";
    for (div of services) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px gray";
    }

    for (div of menus) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px gray";
    }
    for (div of menu_plates) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px gray";
    }
    for (div of menu_pizza) {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.boxShadow = "1px 1px 15px 1px gray";
    }
    myForm.style.boxShadow = "1px 1px 15px 1px white";
}

let myMode = document.getElementById("toggle");
window.onload = function () {
    let date = new Date();
    let time = date.getHours();
    if (!(time = 7 && time < 20)) {
        myMode.setAttribute("checked", "true");
    }

    if (myMode.checked) {
        atNight();
    } else {
        atDay();
    }
}

myMode.onclick = function () {
    if (myMode.checked) {
        atNight()
    } else {
        atDay()
    }
}
