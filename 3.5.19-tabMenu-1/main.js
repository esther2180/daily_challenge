function clickFunction(eve, section) {
    let i, text, tabs;
    text = document.getElementsByClassName("text");
    tabs = document.getElementsByClassName("tab");

    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }

    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("active","");
    }

    document.getElementById(section).style.display = "block";
    eve.currentTarget.className += "active";
}
