/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

// Light Dark mode toggle

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(preference-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");//data-theme--theme
} else {
    $HTML.dataset.theme = isDark ? "light" :"dark";//data-theme = theme
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "dark" ?"light" :"dark";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}
$themeBtn.addEventListener("click",changeTheme);
// window.addEventListener("load",()=> $themeBtn,eventli)

// sessionStorage.setItem("data-theme", $HTML.dataset.theme)



// tab

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let lastActiveTab = document.querySelector("[data-tab-content].active");
let lastActiveTabBtn = document.querySelector("[data-tab-btn].active");

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = tabContent;
        lastActiveTabBtn = this;
    });
});


// View Count

const counter = document.querySelector(".counter-number");//links to element in HTML file
async function updateCounter(){
	let response = await fetch("https://vujyid2ixj25vcrjyjyhmdxyjy0rieas.lambda-url.ap-south-1.on.aws/");//lamda's function URL.
	let count = await response.json();
	counter.innerHTML = count;
}

updateCounter();