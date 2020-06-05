menuBtn = document.getElementById("menuBtn");
menu = document.getElementById("menu");
var clickedToMenu = false
menuBtn.onclick = function () {
    if(clickedToMenu == false){
        menu.style.display = "block";
        document.getElementById("menu-icon1").style.fill = "#FFFFFF";
        document.getElementById("menu-icon2").style.fill = "#FFFFFF";
        clickedToMenu = true
    }else if (clickedToMenu == true){
        menu.style.display = "none";
        document.getElementById("menu-icon1").style.fill = "#002766";
        document.getElementById("menu-icon2").style.fill = "#002766";
        clickedToMenu = false
    }
    
};
