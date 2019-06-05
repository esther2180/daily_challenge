let tab1 = document.querySelector(".tab_1"),
    tab2 = document.querySelector(".tab_2"),
    tab3 = document.querySelector(".tab_3"),
    box1 = document.getElementById("tab1"),
    box2 = document.getElementById("tab2"),
    box3 = document.getElementById("tab3");


tab1.addEventListener("click", function() {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
});

tab2.addEventListener("click", function() {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    tab1.classList.remove("active");
    tab2.classList.add("active");
    tab3.classList.remove("active");
});

tab3.addEventListener("click", function() {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.add("active");
});