var inputcenter = document.getElementById("input-center");
var listcontent = document.getElementById("list-content");

function Task() {
    if (inputcenter.value === '') {
        alert("You Must Enter Some Text")
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputcenter.value;
        listcontent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        span.className = "close";
    }
    inputcenter.value = "";
    savedata();

}
listcontent.addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
    savedata();
});

function savedata() {
    localStorage.setItem("data",listcontent.innerHTML);
    console.log()
}
function showdata() {
    listcontent.innerHTML = localStorage.getItem("data");

}
showdata()