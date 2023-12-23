

function sea_btn_show(){
    document.querySelector(".search_hid").style.display = "block";
    document.querySelector(".left_navs").style.display = "none";
    document.querySelector(".right_navs").style.display = "none";
}
function hid_btn_show(){
    document.querySelector(".search_hid").style.display = "none";
    document.querySelector(".left_navs").style.display = "flex";
    document.querySelector(".right_navs").style.display = "flex";
}
let count = 0;
function mob_nav(){
    count++;
    if(count % 2 == 1){
    document.querySelector("#click_nav").classList.add("mob_navs");
    document.querySelector("#mobile_navs").classList.remove("mobile_navs_hide");
    document.querySelector("#mobile_navs").classList.add("mobile_navs_show");

    // offer 
    document.querySelector(".offer_noti").classList.add("offer_noti_hi");
    document.querySelector(".offer_noti").classList.remove("offer_noti_sh");
    
    }else{
        document.querySelector("#click_nav").classList.remove("mob_navs");
        document.querySelector("#mobile_navs").classList.add("mobile_navs_hide");
        document.querySelector("#mobile_navs").classList.remove("mobile_navs_show");

        // offer
        document.querySelector(".offer_noti").classList.remove("offer_noti_hi");
        document.querySelector(".offer_noti").classList.add("offer_noti_sh");
    }

    
}



function mob_sea_btn_show(){
    document.querySelector("#mob_nav_hide").classList.remove("mob_nav");
    document.querySelector("#mob_nav_hide").classList.add("mob_nav_hide");

    document.querySelector("#mob_search").classList.remove("mob_search");
    document.querySelector("#mob_search").classList.add("mob_search_hide");

    document.querySelector("#mob_search_btn").classList.add("mob_search_sho");
    document.querySelector("#mob_search_btn").classList.remove("mob_search_hid");


    document.querySelector("#mob_right_cart").classList.add("right_nav_list_hide");

    document.querySelector("#mob_right_sign").classList.add("right_nav_list_hide");
}
function mob_hid_btn_show(){
    document.querySelector("#mob_nav_hide").classList.add("mob_nav");
    document.querySelector("#mob_nav_hide").classList.remove("mob_nav_hide");

    document.querySelector("#mob_search").classList.add("mob_search");
    document.querySelector("#mob_search").classList.remove("mob_search_hide");

    document.querySelector("#mob_search_btn").classList.remove("mob_search_sho");
    document.querySelector("#mob_search_btn").classList.add("mob_search_hid");

    document.querySelector("#mob_right_cart").classList.add("right_nav_list_show");
    document.querySelector("#mob_right_cart").classList.remove("right_nav_list_hide");

    document.querySelector("#mob_right_sign").classList.add("right_nav_list_show");
    document.querySelector("#mob_right_sign").classList.remove("right_nav_list_hide");

}


let count22 = 0;
function nav_hide_list(){
    count22++
    if (count22 % 2 == 1) {
        document.querySelector(".list_hide_on").classList.remove("list_hide_on2");
    }else{
        document.querySelector(".list_hide_on").classList.add("list_hide_on2");
    document.querySelector(".list_hide_on").classList.remove("list_hide_on1");
    }
}

let count2 = 0;
function mob_nav_li2(){
    count2++
    if (count2 % 2 == 1) {
        document.querySelector(".mobi_nav_ul2").classList.add("mobi_nav_ul2_sh");
        document.querySelector(".mobi_nav_ul2").classList.remove("mobi_nav_ul2_hi");
    }else{
        document.querySelector(".mobi_nav_ul2").classList.remove("mobi_nav_ul2_sh");
        document.querySelector(".mobi_nav_ul2").classList.add("mobi_nav_ul2_hi");
    }
}

let count3 = 0;
function mob_nav_li3(){
    count3++
    if (count3 % 2 == 1) {
        document.querySelector(".mobi_nav_ul3").classList.add("mobi_nav_ul3_sh");
        document.querySelector(".mobi_nav_ul3").classList.remove("mobi_nav_ul3_hi");
    }else{
        document.querySelector(".mobi_nav_ul3").classList.remove("mobi_nav_ul3_sh");
        document.querySelector(".mobi_nav_ul3").classList.add("mobi_nav_ul3_hi");
    }
    
}

let count4 = 0;
function mob_nav_li4(){
    count4++
    if (count4 % 2 == 1) {
        document.querySelector(".mobi_nav_ul4").classList.add("mobi_nav_ul4_sh");
        document.querySelector(".mobi_nav_ul4").classList.remove("mobi_nav_ul4_hi");
    }else{
        document.querySelector(".mobi_nav_ul4").classList.remove("mobi_nav_ul4_sh");
        document.querySelector(".mobi_nav_ul4").classList.add("mobi_nav_ul4_hi");
    }
    
}

let count5 = 0;
function mob_nav_li5(){
    count5++
    if (count5 % 2 == 1) {
        document.querySelector(".mobi_nav_ul5").classList.add("mobi_nav_ul5_sh");
        document.querySelector(".mobi_nav_ul5").classList.remove("mobi_nav_ul5_hi");
    }else{
        document.querySelector(".mobi_nav_ul5").classList.remove("mobi_nav_ul5_sh");
        document.querySelector(".mobi_nav_ul5").classList.add("mobi_nav_ul5_hi");
    }
    
}

let count6 = 0;
function mob_nav_li6(){
    count6++
    if (count6 % 2 == 1) {
        document.querySelector(".mobi_nav_ul6").classList.add("mobi_nav_ul6_sh");
        document.querySelector(".mobi_nav_ul6").classList.remove("mobi_nav_ul6_hi");
    }else{
        document.querySelector(".mobi_nav_ul6").classList.remove("mobi_nav_ul6_sh");
        document.querySelector(".mobi_nav_ul6").classList.add("mobi_nav_ul6_hi");
    }
    
}

let count7 = 0;
function mob_nav_li7(){
    count7++
    if (count7 % 2 == 1) {
        document.querySelector(".mobi_nav_ul7").classList.add("mobi_nav_ul7_sh");
        document.querySelector(".mobi_nav_ul7").classList.remove("mobi_nav_ul7_hi");
    }else{
        document.querySelector(".mobi_nav_ul7").classList.remove("mobi_nav_ul7_sh");
        document.querySelector(".mobi_nav_ul7").classList.add("mobi_nav_ul7_hi");
    }
    
}

const slides = document.querySelector(".banner").children;
const go_prev = document.querySelector(".go_prev_js");
const go_next = document.querySelector(".go_next_js");
const play_pause = document.querySelector("#play_push");
const image_1 = document.querySelector("#image_1");
const image_2 = document.querySelector("#image_2")
let index = 0;
let autoPlayInterval;

go_next.addEventListener("click", function () {
    go_nextSlide();
});

go_prev.addEventListener("click", function () {
    go_prevSlide();
});

let play_pause_btn = 0
play_pause.addEventListener("click", function () {
    play_pause_btn++ 
    if (play_pause_btn % 2 == 1) {
        play_pause.classList.add("play_push_work")
        play_pause.classList.remove("play_push")
    }else{
        play_pause.classList.remove("play_push_work")
        play_pause.classList.add("play_push")
    }
    togglePlayPause();
});

function go_nextSlide() {
    index = (index + 1) % slides.length;
    changeSlide();
}

function go_prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    changeSlide();
}

function changeSlide() {
    const translateValue = -index * 100 + "%";
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transition = "transform 0.5s ease-in-out"; // Adjust the transition duration and timing function as needed
        slides[i].style.transform = `translateX(${translateValue})`;
        
    }
    if(index2 == 0){
        image_1.classList.remove("image_1_div_ac")
        image_1.classList.add("image_1_div")

        image_2.classList.remove("image_2_div")
        image_2.classList.add("image_2_div_ac")
    }else if (index2 == 1){
        image_1.classList.add("image_1_div_ac")
        image_1.classList.remove("image_1_div")

        image_2.classList.add("image_2_div")
        image_2.classList.remove("image_2_div_ac")
    }
}

function togglePlayPause() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    } else {
        autoPlayInterval = setInterval(go_nextSlide, 6000); // Adjust the interval as needed (milliseconds)
    }
}

// Start autoplay when the page loads
togglePlayPause();


const slides2 = document.querySelector(".image_slider_last").children;
const go_prev2 = document.querySelector(".go_prev_js2");
const go_next2 = document.querySelector(".go_next_js2");
const play_pause2 = document.querySelector("#play_push2");
const image_12 = document.querySelector("#image_12");
const image_22 = document.querySelector("#image_22")
let index2 = 0;
let autoPlayInterval2;

go_next2.addEventListener("click", function () {
    go_nextSlide2();
});

go_prev2.addEventListener("click", function () {
    go_prevSlide2();
});

let play_pause_btn2 = 0
play_pause2.addEventListener("click", function () {
    play_pause_btn2++ 
    if (play_pause_btn2 % 2 == 1) {
        play_pause2.classList.add("play_push_work")
        play_pause2.classList.remove("play_push")
    }else{
        play_pause2.classList.remove("play_push_work")
        play_pause2.classList.add("play_push")
    }
    togglePlayPause2();
});

function go_nextSlide2() {
    index2 = (index2 + 1) % slides2.length;
    changeSlide2();
}

function go_prevSlide2() {
    index2 = (index2 - 1 + slides2.length) % slides2.length;
    changeSlide2();
}

function changeSlide2() {
    const translateValue = -index2 * 100 + "%";
    for (let j = 0; j < slides2.length; j++) {
        slides2[j].style.transition = "transform 0.5s ease-in-out"; // Adjust the transition duration and timing function as needed
        slides2[j].style.transform = `translateX(${translateValue})`;
        
    }
    if(index2 == 0){
        image_12.classList.remove("image_1_div_ac")
        image_12.classList.add("image_1_div")

        image_22.classList.remove("image_2_div")
        image_22.classList.add("image_2_div_ac")
    }else if (index == 1){
        image_12.classList.add("image_1_div_ac")
        image_12.classList.remove("image_1_div")

        image_2.classList.add("image_2_div")
        image_2.classList.remove("image_2_div_ac")
    }
}

function togglePlayPause2() {
    if (autoPlayInterval2) {
        clearInterval(autoPlayInterval2);
        autoPlayInterval2 = null;
    } else {
        autoPlayInterval2 = setInterval(go_nextSlide2, 6000); // Adjust the interval as needed (milliseconds)
    }
}

// Start autoplay when the page loads
togglePlayPause2();


