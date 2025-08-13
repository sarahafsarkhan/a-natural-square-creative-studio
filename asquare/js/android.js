//android

function openNav() {
    document.getElementById("mySidepanel").style.display = "block";
    document.getElementById("mySidepanel").style.width = "240px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.display = "none";
}

function closeNavOnClick() {
    closeNav();
} 