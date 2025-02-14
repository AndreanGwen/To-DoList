document.addEventListener("DOMContentLoaded", function () {
    var yourname = localStorage.getItem("username");

    if (!yourname) { 
        yourname = prompt('Sebutkan nama mu😊');
        if (yourname) { 
            localStorage.setItem("username", yourname);
        }
    }

    if (yourname) { 
        var message = 'Halo ' + yourname;
        document.getElementById('ucapan').innerText = message;
    }
});

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("Kamu Harus Menulis Sesuatu!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cek");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
