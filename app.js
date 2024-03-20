const viewportHeight = window.innerHeight; // - get the 'vh' property
let boolscroll1 = true; // - opan drone video (1)
let boolscroll2 = true; // - barriers image quality (2)
let boolscroll2_1 = true; // - barriers image quality (2_1)
let boolscroll2_2 = true; // - barriers image quality (2_2)
let boolscroll3 = true; // - hdr drone video (3)
let boolscroll4_1 = true; // - 48mp drone photo (4_1)
let boolscroll4_2 = true; // - 48mp drone photo (4_2)
let boolscroll5 = true; // - smartphoto drone (5)
let boolscroll6 = true; // - barriers quickshots video (6)
let boolscroll7 = true; // - tracking video (7)
let boolscroll8 = true; // - hyperlapse video (8)
let boolscroll9 = true; // - quickshots video (9)
let boolscroll10 = true; // - barriers OcuSync2p0 video (10)
let boolscroll11 = true; // - apas drone video (11)

const qualityvid = document.getElementById("qualityvid");
const rightBar1 = document.querySelector(".rightBar1");
const leftBar1 = document.querySelector(".leftBar1");
const topBar1 = document.querySelector(".topBar1");
const bottomBar1 = document.querySelector(".bottomBar1");
const barCont1 = document.querySelector(".barCont1");
const qualityvidSubcont = document.querySelector(".qualityvidSubcont");
const sect3txtCont = document.querySelector(".sect3txtCont");
const blackqualityvid = document.querySelector(".blackqualityvid");
const blackmpvid = document.querySelector(".blackmpvid");
const sect3onblackscroll1 = document.querySelector(".sect3onblackscroll1");
const sect3onblackscroll2 = document.querySelector(".sect3onblackscroll2");
const sect5onblackscroll1 = document.querySelector(".sect5onblackscroll1");
const sect5onblackscroll2 = document.querySelector(".sect5onblackscroll2");
const smartphoto = document.querySelectorAll(".smartphoto");
const sect6infoTxt = document.querySelectorAll(".sect6infoTxt");
const quickshotsvid = document.getElementById("quickshotsvid");
const blackquickshotsvid = document.querySelector(".blackquickshotsvid");
const rightBar2 = document.querySelector(".rightBar2");
const leftBar2 = document.querySelector(".leftBar2");
const topBar2 = document.querySelector(".topBar2");
const bottomBar2 = document.querySelector(".bottomBar2");
const barCont2 = document.querySelector(".barCont2");
const sect8txtCont = document.querySelector(".sect8txtCont");
const sect8onblackscroll1 = document.querySelector(".sect8onblackscroll1");
const tracking = document.querySelectorAll(".tracking");
const sect9infoTxt = document.querySelectorAll(".sect9infoTxt");
const hyperlapse = document.querySelectorAll(".hyperlapse");
const quickshots = document.querySelectorAll(".quickshots");
const OcuSync2p0vid = document.getElementById("OcuSync2p0vid");
const blackOcuSync2p0vid = document.querySelector(".blackOcuSync2p0vid");
const rightBar3 = document.querySelector(".rightBar3");
const leftBar3 = document.querySelector(".leftBar3");
const topBar3 = document.querySelector(".topBar3");
const bottomBar3 = document.querySelector(".bottomBar3");
const barCont3 = document.querySelector(".barCont3");
const sect12txtCont = document.querySelector(".sect12txtCont");
const sect12onblackscroll1 = document.querySelector(".sect12onblackscroll1");
const signal = document.querySelectorAll(".signal");
const obstacle = document.querySelectorAll(".obstacle");
const sect15infoTxt = document.querySelectorAll(".sect15infoTxt");

qualityvid.addEventListener("loadedmetadata", function() {
  // Set the height of the container to match the video's height
  rightBar1.style.height = qualityvid.clientHeight + "px";
  leftBar1.style.height = qualityvid.clientHeight + "px";
  topBar1.style.width = qualityvid.clientWidth + "px";
  bottomBar1.style.width = qualityvid.clientWidth + "px";
  barCont1.style.height = qualityvid.clientHeight + "px";
  blackqualityvid.style.height = qualityvid.clientHeight + "px";
});

quickshotsvid.addEventListener("loadedmetadata", function() {
  // Set the height of the container to match the video's height
  rightBar2.style.height = quickshotsvid.clientHeight + "px";
  leftBar2.style.height = quickshotsvid.clientHeight + "px";
  topBar2.style.width = quickshotsvid.clientWidth + "px";
  bottomBar2.style.width = quickshotsvid.clientWidth + "px";
  barCont2.style.height = quickshotsvid.clientHeight + "px";
  blackquickshotsvid.style.height = quickshotsvid.clientHeight + "px";
});

OcuSync2p0vid.addEventListener("loadedmetadata", function() {
  // Set the height of the container to match the video's height
  rightBar3.style.height = OcuSync2p0vid.clientHeight + "px";
  leftBar3.style.height = OcuSync2p0vid.clientHeight + "px";
  topBar3.style.width = OcuSync2p0vid.clientWidth + "px";
  bottomBar3.style.width = OcuSync2p0vid.clientWidth + "px";
  barCont3.style.height = OcuSync2p0vid.clientHeight + "px";
  blackOcuSync2p0vid.style.height = OcuSync2p0vid.clientHeight + "px";
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems1 = document.querySelectorAll(".menu-item1");
    const highlightLine1 = document.querySelector(".highlight-line1");
    let currentIndex1 = 0;

    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine1();
    }, 100);

    // Function to update the line position
    function updateHighlightLine1() {
        const menuItem1 = menuItems1[currentIndex1];
        const menuItem1Rect = menuItem1.getBoundingClientRect();
        highlightLine1.style.width = menuItem1Rect.width + "px";
        highlightLine1.style.transform = `translateX(${menuItem1Rect.left}px)`;
        //console.log(currentIndex1); // <--
    }
    
    // Event listener for menu item clicks
    menuItems1.forEach((menuItem1, index) => {
        menuItem1.addEventListener("click", () => {
            currentIndex1 = index;
            for (i = 0; i < menuItems1.length; i++) {
                menuItems1[i].classList.remove("active");
            }
            menuItems1[currentIndex1].classList.add("active");
            for (i = 0; i < smartphoto.length; i++) {
                smartphoto[i].classList.remove("active");
            }
            smartphoto[currentIndex1].classList.add("active");
            for (i = 0; i < sect6infoTxt.length; i++) {
                sect6infoTxt[i].classList.remove("active");
            }
            sect6infoTxt[currentIndex1].classList.add("active");
            smartphoto[currentIndex1].currentTime = 0;
            smartphoto[currentIndex1].play();
            updateHighlightLine1();
        });
    });

    smartphoto[0].addEventListener("timeupdate", function() {
        if (smartphoto[currentIndex1].ended) {
            currentIndex1++;
            for (i = 0; i < menuItems1.length; i++) {
                menuItems1[i].classList.remove("active");
            }
            menuItems1[currentIndex1].classList.add("active");
            for (i = 0; i < smartphoto.length; i++) {
                smartphoto[i].classList.remove("active");
            }
            smartphoto[currentIndex1].classList.add("active");
            for (i = 0; i < sect6infoTxt.length; i++) {
                sect6infoTxt[i].classList.remove("active");
            }
            sect6infoTxt[currentIndex1].classList.add("active");
            smartphoto[currentIndex1].currentTime = 0;
            smartphoto[currentIndex1].play();
            updateHighlightLine1();
        }
    });
    
    smartphoto[1].addEventListener("timeupdate", function() {
        if (smartphoto[currentIndex1].ended) {
            currentIndex1 = 0;
            for (i = 0; i < menuItems1.length; i++) {
                menuItems1[i].classList.remove("active");
            }
            menuItems1[currentIndex1].classList.add("active");
            for (i = 0; i < smartphoto.length; i++) {
                smartphoto[i].classList.remove("active");
            }
            smartphoto[currentIndex1].classList.add("active");
            for (i = 0; i < sect6infoTxt.length; i++) {
                sect6infoTxt[i].classList.remove("active");
            }
            sect6infoTxt[currentIndex1].classList.add("active");
            smartphoto[currentIndex1].currentTime = 0;
            smartphoto[currentIndex1].play();
            updateHighlightLine1();
        }
    });

    // const slider1 = document.querySelector(".slider1");
    // const smartphotoVid = document.querySelector("#smartphoto1");
    // slider1.style.height = 30 + smartphotoVid.getBoundingClientRect().height + "px";

    const menuItems2 = document.querySelectorAll(".menu-item2");
    const highlightLine2 = document.querySelector(".highlight-line2");
    let currentIndex2 = 0;

    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine2();
    }, 100);

    // Function to update the line position
    function updateHighlightLine2() {
        const menuItem2 = menuItems2[currentIndex2];
        const menuItem2Rect = menuItem2.getBoundingClientRect();
        highlightLine2.style.width = menuItem2Rect.width + "px";
        highlightLine2.style.transform = `translateX(${menuItem2Rect.left}px)`;
        //console.log(currentIndex2); // <--
    }
    
    // Event listener for menu item clicks
    menuItems2.forEach((menuItem2, index) => {
        menuItem2.addEventListener("click", () => {
            currentIndex2 = index;
            for (i = 0; i < menuItems2.length; i++) {
                menuItems2[i].classList.remove("active");
            }
            menuItems2[currentIndex2].classList.add("active");
            for (i = 0; i < tracking.length; i++) {
                tracking[i].classList.remove("active");
            }
            tracking[currentIndex2].classList.add("active");
            for (i = 0; i < sect9infoTxt.length; i++) {
                sect9infoTxt[i].classList.remove("active");
            }
            sect9infoTxt[currentIndex2].classList.add("active");
            tracking[currentIndex2].currentTime = 0;
            tracking[currentIndex2].play();
            updateHighlightLine2();
        });
    });

    tracking[0].addEventListener("timeupdate", function() {
        if (tracking[currentIndex2].ended) {
            currentIndex2++;
            for (i = 0; i < menuItems2.length; i++) {
                menuItems2[i].classList.remove("active");
            }
            menuItems2[currentIndex2].classList.add("active");
            for (i = 0; i < tracking.length; i++) {
                tracking[i].classList.remove("active");
            }
            tracking[currentIndex2].classList.add("active");
            for (i = 0; i < sect9infoTxt.length; i++) {
                sect9infoTxt[i].classList.remove("active");
            }
            sect9infoTxt[currentIndex2].classList.add("active");
            tracking[currentIndex2].currentTime = 0;
            tracking[currentIndex2].play();
            updateHighlightLine2();
        }
    });
    
    tracking[1].addEventListener("timeupdate", function() {
        if (tracking[currentIndex2].ended) {
            currentIndex2++;
            for (i = 0; i < menuItems2.length; i++) {
                menuItems2[i].classList.remove("active");
            }
            menuItems2[currentIndex2].classList.add("active");
            for (i = 0; i < tracking.length; i++) {
                tracking[i].classList.remove("active");
            }
            tracking[currentIndex2].classList.add("active");
            for (i = 0; i < sect9infoTxt.length; i++) {
                sect9infoTxt[i].classList.remove("active");
            }
            sect9infoTxt[currentIndex2].classList.add("active");
            tracking[currentIndex2].currentTime = 0;
            tracking[currentIndex2].play();
            updateHighlightLine2();
        }
    });
    
    tracking[2].addEventListener("timeupdate", function() {
        if (tracking[currentIndex2].ended) {
            currentIndex2 = 0;
            for (i = 0; i < menuItems2.length; i++) {
                menuItems2[i].classList.remove("active");
            }
            menuItems2[currentIndex2].classList.add("active");
            for (i = 0; i < tracking.length; i++) {
                tracking[i].classList.remove("active");
            }
            tracking[currentIndex2].classList.add("active");
            for (i = 0; i < sect9infoTxt.length; i++) {
                sect9infoTxt[i].classList.remove("active");
            }
            sect9infoTxt[currentIndex2].classList.add("active");
            tracking[currentIndex2].currentTime = 0;
            tracking[currentIndex2].play();
            updateHighlightLine2();
        }
    });

    // --------------------------

    const menuItems3 = document.querySelectorAll(".menu-item3");
    const highlightLine3 = document.querySelector(".highlight-line3");
    let currentIndex3 = 0;

    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine3();
    }, 100);

    // Function to update the line position
    function updateHighlightLine3() {
        const menuItem3 = menuItems3[currentIndex3];
        const menuItem3Rect = menuItem3.getBoundingClientRect();
        highlightLine3.style.width = menuItem3Rect.width + "px";
        highlightLine3.style.transform = `translateX(${menuItem3Rect.left}px)`;
        //console.log(currentIndex3); // <--
    }
    
    // Event listener for menu item clicks
    menuItems3.forEach((menuItem3, index) => {
        menuItem3.addEventListener("click", () => {
            currentIndex3 = index;
            for (i = 0; i < menuItems3.length; i++) {
                menuItems3[i].classList.remove("active");
            }
            menuItems3[currentIndex3].classList.add("active");
            for (i = 0; i < hyperlapse.length; i++) {
                hyperlapse[i].classList.remove("active");
            }
            hyperlapse[currentIndex3].classList.add("active");
            hyperlapse[currentIndex3].currentTime = 0;
            hyperlapse[currentIndex3].play();
            updateHighlightLine3();
        });
    });

    hyperlapse[0].addEventListener("timeupdate", function() {
        if (hyperlapse[currentIndex3].ended) {
            currentIndex3++;
            for (i = 0; i < menuItems3.length; i++) {
                menuItems3[i].classList.remove("active");
            }
            menuItems3[currentIndex3].classList.add("active");
            for (i = 0; i < hyperlapse.length; i++) {
                hyperlapse[i].classList.remove("active");
            }
            hyperlapse[currentIndex3].classList.add("active");
            hyperlapse[currentIndex3].currentTime = 0;
            hyperlapse[currentIndex3].play();
            updateHighlightLine3();
        }
    });
    
    hyperlapse[1].addEventListener("timeupdate", function() {
        if (hyperlapse[currentIndex3].ended) {
            currentIndex3++;
            for (i = 0; i < menuItems3.length; i++) {
                menuItems3[i].classList.remove("active");
            }
            menuItems3[currentIndex3].classList.add("active");
            for (i = 0; i < hyperlapse.length; i++) {
                hyperlapse[i].classList.remove("active");
            }
            hyperlapse[currentIndex3].classList.add("active");
            hyperlapse[currentIndex3].currentTime = 0;
            hyperlapse[currentIndex3].play();
            updateHighlightLine3();
        }
    });
    
    hyperlapse[2].addEventListener("timeupdate", function() {
        if (hyperlapse[currentIndex3].ended) {
            currentIndex3++;
            for (i = 0; i < menuItems3.length; i++) {
                menuItems3[i].classList.remove("active");
            }
            menuItems3[currentIndex3].classList.add("active");
            for (i = 0; i < hyperlapse.length; i++) {
                hyperlapse[i].classList.remove("active");
            }
            hyperlapse[currentIndex3].classList.add("active");
            hyperlapse[currentIndex3].currentTime = 0;
            hyperlapse[currentIndex3].play();
            updateHighlightLine3();
        }
    });
    
    hyperlapse[3].addEventListener("timeupdate", function() {
        if (hyperlapse[currentIndex3].ended) {
            currentIndex3 = 0;
            for (i = 0; i < menuItems3.length; i++) {
                menuItems3[i].classList.remove("active");
            }
            menuItems3[currentIndex3].classList.add("active");
            for (i = 0; i < hyperlapse.length; i++) {
                hyperlapse[i].classList.remove("active");
            }
            hyperlapse[currentIndex3].classList.add("active");
            hyperlapse[currentIndex3].currentTime = 0;
            hyperlapse[currentIndex3].play();
            updateHighlightLine3();
        }
    });
    
    // --------------------------

    const menuItems4 = document.querySelectorAll(".menu-item4");
    const highlightLine4 = document.querySelector(".highlight-line4");
    let currentIndex4 = 0;

    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine4();
    }, 100);

    // Function to update the line position
    function updateHighlightLine4() {
        const menuItem4 = menuItems4[currentIndex4];
        const menuItem4Rect = menuItem4.getBoundingClientRect();
        highlightLine4.style.width = menuItem4Rect.width + "px";
        highlightLine4.style.transform = `translateX(${menuItem4Rect.left}px)`;
        //console.log(currentIndex4); // <--
    }
    
    // Event listener for menu item clicks
    menuItems4.forEach((menuItem4, index) => {
        menuItem4.addEventListener("click", () => {
            currentIndex4 = index;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        });
    });

    quickshots[0].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4++;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });
    
    quickshots[1].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4++;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });
    
    quickshots[2].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4++;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });
    
    quickshots[3].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4++;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });
    
    quickshots[4].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4++;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });
    
    quickshots[5].addEventListener("timeupdate", function() {
        if (quickshots[currentIndex4].ended) {
            currentIndex4 = 0;
            for (i = 0; i < menuItems4.length; i++) {
                menuItems4[i].classList.remove("active");
            }
            menuItems4[currentIndex4].classList.add("active");
            for (i = 0; i < quickshots.length; i++) {
                quickshots[i].classList.remove("active");
            }
            quickshots[currentIndex4].classList.add("active");
            quickshots[currentIndex4].currentTime = 0;
            quickshots[currentIndex4].play();
            updateHighlightLine4();
        }
    });

    // --------------------------

    const menuItems5 = document.querySelectorAll(".menu-item5");
    const highlightLine5 = document.querySelector(".highlight-line5");
    let currentIndex5 = 0;

    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine5();
    }, 100);

    // Function to update the line position
    function updateHighlightLine5() {
        const menuItem5 = menuItems5[currentIndex5];
        const menuItem5Rect = menuItem5.getBoundingClientRect();
        highlightLine5.style.width = menuItem5Rect.width + "px";
        highlightLine5.style.transform = `translateX(${menuItem5Rect.left}px)`;
        //console.log(currentIndex5); // <--
    }
    
    // Event listener for menu item clicks
    menuItems5.forEach((menuItem5, index) => {
        menuItem5.addEventListener("click", () => {
            currentIndex5 = index;
            for (i = 0; i < menuItems5.length; i++) {
                menuItems5[i].classList.remove("active");
            }
            menuItems5[currentIndex5].classList.add("active");
            for (i = 0; i < signal.length; i++) {
                signal[i].classList.remove("active");
            }
            signal[currentIndex5].classList.add("active");
            updateHighlightLine5();
        });
    });

    function slider5Interval() {
        if (currentIndex5 == 0) {
            currentIndex5++;
        }
        else {
            currentIndex5 = 0;
        }
        for (i = 0; i < menuItems5.length; i++) {
            menuItems5[i].classList.remove("active");
        }
        menuItems5[currentIndex5].classList.add("active");
        for (i = 0; i < signal.length; i++) {
            signal[i].classList.remove("active");
        }
        signal[currentIndex5].classList.add("active");
        updateHighlightLine5();
    }

    setInterval(slider5Interval, 5000);

    // --------------------------
    
    const menuItems6 = document.querySelectorAll(".menu-item6");
    const highlightLine6 = document.querySelector(".highlight-line6");
    let currentIndex6 = 0;
    
    // Initialize the line under the first menu item\
    setTimeout(() => {
        updateHighlightLine6();
    }, 100);
    
    // Function to update the line position
    function updateHighlightLine6() {
        const menuItem6 = menuItems6[currentIndex6];
        const menuItem6Rect = menuItem6.getBoundingClientRect();
        highlightLine6.style.width = menuItem6Rect.width + "px";
        highlightLine6.style.transform = `translateX(${menuItem6Rect.left}px)`;
        //console.log(currentIndex6); // <--
    }
    
    // Event listener for menu item clicks
    menuItems6.forEach((menuItem6, index) => {
        menuItem6.addEventListener("click", () => {
            currentIndex6 = index;
            for (i = 0; i < menuItems6.length; i++) {
                menuItems6[i].classList.remove("active");
            }
            menuItems6[currentIndex6].classList.add("active");
            for (i = 0; i < obstacle.length; i++) {
                obstacle[i].classList.remove("active");
            }
            obstacle[currentIndex6].classList.add("active");
            for (i = 0; i < sect15infoTxt.length; i++) {
                sect15infoTxt[i].classList.remove("active");
            }
            sect15infoTxt[currentIndex6].classList.add("active");
            updateHighlightLine6();
        });
    });
    
    function slider6Interval() {
        if (currentIndex6 == 0) {
            currentIndex6++;
        }
        else if (currentIndex6 == 1) {
            currentIndex6++;
        }
        else {
            currentIndex6 = 0;
        }
        for (i = 0; i < menuItems6.length; i++) {
            menuItems6[i].classList.remove("active");
        }
        menuItems6[currentIndex6].classList.add("active");
        for (i = 0; i < obstacle.length; i++) {
            obstacle[i].classList.remove("active");
        }
        obstacle[currentIndex6].classList.add("active");
        for (i = 0; i < sect15infoTxt.length; i++) {
            sect15infoTxt[i].classList.remove("active");
        }
        sect15infoTxt[currentIndex6].classList.add("active");
        updateHighlightLine6();
    }
    
    setInterval(slider6Interval, 5000);
});

window.addEventListener('scroll', function(){

    // -=- cords -=-
    // const cords = document.getElementById("cords");
    // cords.innerHTML = this.scrollY;
    
    // -=- section one move on scroll -=-
    const bghome = document.getElementById("bghome");
    const mounthome = document.getElementById("mounthome");
    const titlehome = document.getElementById("titlehome");
    const subtitlehome = document.getElementById("subtitlehome");
    let value = window.scrollY;
    bghome.style.top = value * 0.5 + 'px';
    mounthome.style.top = value * 0.15 + 'px';
    titlehome.style.top = value * 0.48 + 'px';
    subtitlehome.style.top = value * 0.48 + 'px';
    titlehome.style.opacity = 1-(value/100 * 0.1);
    subtitlehome.style.opacity = 1-(value/100 * 0.1);

    // -=- opan drone play (1) -=-
    const openvid = document.getElementById("openvid");
    if ((openvid.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight) && boolscroll1 == false)) { //value < 100 && boolscroll1 == false [ || (openvid.getBoundingClientRect().bottom > 0 && boolscroll1 == true)]
        openvid.currentTime = 0;
        boolscroll1 = true;
    }
    if ((openvid.getBoundingClientRect().top <= 500 && boolscroll1 == true)) { //value >= 100 && boolscroll1 == true [(window.innerHeight || document.documentElement.clientHeight) && boolscroll1 == true] -=|=- [ || (openvid.getBoundingClientRect().bottom >= 0 && boolscroll1 == true)]
        openvid.play();
        boolscroll1 = false;
    }
    
    // -=- barriers image quality (2) -=-
    if (topBar1.getBoundingClientRect().top > 0 && boolscroll2 == false) { //value < 1785 && boolscroll2 == false
        boolscroll2 = true;
        blackqualityvid.style.opacity = 0;
        setTimeout(() => {
            rightBar1.style.width = 20 + "%";
            leftBar1.style.width = 20 + "%";
            topBar1.style.height = 20 + "%";
            bottomBar1.style.height = 20 + "%";
        }, 100);
        setTimeout(() => {
            sect3txtCont.style.opacity = 1;
        }, 800);
        // console.log(boolscroll2);
        sect3onblackscroll1.style.opacity = 0;
    }
    if (topBar1.getBoundingClientRect().top <= 0 && boolscroll2 == true) { //value >= 1785 && boolscroll2 == true
        boolscroll2 = false;
        rightBar1.style.width = 0 + "px";
        leftBar1.style.width = 0 + "px";
        topBar1.style.height = 0 + "px";
        bottomBar1.style.height = 0 + "px";
        setTimeout(() => {
            blackqualityvid.style.opacity = 0.5;
        }, 250);
        sect3txtCont.style.opacity = 0;
        // console.log(boolscroll2);
        setTimeout(() => {
            sect3onblackscroll1.style.opacity = 1;
        }, 800);
    }

    // -=- barriers image quality (2_1) -=-
    /*if (value < 1785 && boolscroll2_1 == false) {
        boolscroll2_1 = true;
        sect3onblackscroll1.style.opacity = 0;
    }
    if (value >= 1785 && boolscroll2_1 == true) {
        boolscroll2_1 = false;
        setTimeout(() => {
            sect3onblackscroll1.style.opacity = 1;
        }, 800);
    }*/
    
    // -=- barriers image quality (2_2) -=-
    if (sect3onblackscroll1.getBoundingClientRect().top >= 80 && boolscroll2_2 == false) { //value < 2500 && boolscroll2_2 == false
        boolscroll2_2 = true;
        sect3onblackscroll2.style.opacity = 0;
        setTimeout(() => {
            sect3onblackscroll1.style.opacity = 1;
        }, 0);//600
    }
    if (sect3onblackscroll1.getBoundingClientRect().top < 80 && boolscroll2_2 == true) { //value >= 2500 && boolscroll2_2 == true
        sect3onblackscroll1.style.opacity = 0;
        boolscroll2_2 = false;
        setTimeout(() => { // 1785
            sect3onblackscroll2.style.opacity = 1; // 2840
        }, 0);//600
    }

    // -=- hdr drone play (3) -=-
    const hdrvid = document.getElementById("hdrvid");
    const hdrRestartBtn = document.getElementById("hdrRestartBtn");
    if (hdrvid.getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll3 == false) { //value < 3350 && boolscroll3 == false
        boolscroll3 = true;
        hdrRestartBtn.style.display = "none";
    }
    if (hdrvid.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll3 == true) { //value >= 3350 && boolscroll3 == true
        boolscroll3 = false;
        hdrvid.play();
        hdrvid.addEventListener("ended", function() {
            hdrRestartBtn.style.display = "block";
        });
    }
    
    const mpstartb = document.getElementById("sect5imgstartback").getBoundingClientRect();
    const mpstart = document.getElementById("sect5imgstart");
    if (mpstartb.top <= 0) {
        mpstart.style.width = "100%";
        mpstart.style.height = "100vh";
        mpstart.style.borderRadius = "0px";
        blackmpvid.style.width = "100%";
        blackmpvid.style.height = "100vh";
        blackmpvid.style.borderRadius = "0px";
        blackmpvid.style.opacity = 0.5;
    }
    if (mpstartb.top > 0) {
        mpstart.style.width = "60%";
        mpstart.style.height = "60vh";
        mpstart.style.borderRadius = "10px";
        blackmpvid.style.width = "60%";
        blackmpvid.style.height = "60vh";
        blackmpvid.style.borderRadius = "10px";
        blackmpvid.style.opacity = 0;
    }
    
    // -=- ... quality (4_1) -=-
    if (sect5onblackscroll1.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight) - 140 && boolscroll4_1 == false) { //value < 4845 && boolscroll4_1 == false
        boolscroll4_1 = true;
        sect5onblackscroll1.style.opacity = 0;
    }
    if (sect5onblackscroll1.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - 140 && boolscroll4_1 == true) { //value >= 4845 && boolscroll4_1 == true
        boolscroll4_1 = false;
        setTimeout(() => {
            sect5onblackscroll1.style.opacity = 1;
        }, 400);
    }
    
    // -=- ... quality (4_2) -=-
    if (sect5onblackscroll1.getBoundingClientRect().top >= 80 && boolscroll4_2 == false) { //value < 5560 && boolscroll4_2 == false
        boolscroll4_2 = true;
        sect5onblackscroll2.style.opacity = 0;
        setTimeout(() => {
            sect5onblackscroll1.style.opacity = 1;
        }, 0);//600
    }
    if (sect5onblackscroll1.getBoundingClientRect().top < 80 && boolscroll4_2 == true) { //value >= 5560 && boolscroll4_2 == true
        sect5onblackscroll1.style.opacity = 0;
        boolscroll4_2 = false;
        setTimeout(() => { // 1785
            sect5onblackscroll2.style.opacity = 1; // 2840
        }, 0);//600
    }
    
    
    if (smartphoto[0].getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll5 == false) {
        boolscroll5 = true;
    }
    if (smartphoto[0].getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll5 == true) {
        boolscroll5 = false;
        smartphoto[0].play();
    }
    
    // -=- barriers quickshots video (6) -=-
    if (topBar2.getBoundingClientRect().top > 0 && boolscroll6 == false) { //value < 1785 && boolscroll6 == false
        boolscroll6 = true;
        blackquickshotsvid.style.opacity = 0;
        setTimeout(() => {
            rightBar2.style.width = 20 + "%";
            leftBar2.style.width = 20 + "%";
            topBar2.style.height = 20 + "%";
            bottomBar2.style.height = 20 + "%";
        }, 100);
        setTimeout(() => {
            sect8txtCont.style.opacity = 1;
        }, 800);
        // console.log(boolscroll6);
        sect8onblackscroll1.style.opacity = 0;
    }
    if (topBar2.getBoundingClientRect().top <= 0 && boolscroll6 == true) { //value >= 1785 && boolscroll6 == true
        boolscroll6 = false;
        rightBar2.style.width = 0 + "px";
        leftBar2.style.width = 0 + "px";
        topBar2.style.height = 0 + "px";
        bottomBar2.style.height = 0 + "px";
        setTimeout(() => {
            blackquickshotsvid.style.opacity = 0.5;
        }, 250);
        sect8txtCont.style.opacity = 0;
        // console.log(boolscroll6);
        setTimeout(() => {
            sect8onblackscroll1.style.opacity = 1;
        }, 800);
    }
    
    if (tracking[0].getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll7 == false) {
        boolscroll7 = true;
    }
    if (tracking[0].getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll7 == true) {
        boolscroll7 = false;
        tracking[0].play();
    }
    
    if (hyperlapse[0].getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll8 == false) {
        boolscroll8 = true;
    }
    if (hyperlapse[0].getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll8 == true) {
        boolscroll8 = false;
        hyperlapse[0].play();
    }
    
    if (quickshots[0].getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll9 == false) {
        boolscroll9 = true;
    }
    if (quickshots[0].getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll9 == true) {
        boolscroll9 = false;
        quickshots[0].play();
    }
    
    // -=- barriers OcuSync2p0 video (10) -=-
    if (topBar3.getBoundingClientRect().top > 0 && boolscroll10 == false) { //value < 1785 && boolscroll10 == false
        boolscroll10 = true;
        blackOcuSync2p0vid.style.opacity = 0;
        setTimeout(() => {
            rightBar3.style.width = 20 + "%";
            leftBar3.style.width = 20 + "%";
            topBar3.style.height = 20 + "%";
            bottomBar3.style.height = 20 + "%";
        }, 100);
        setTimeout(() => {
            sect12txtCont.style.opacity = 1;
        }, 800);
        // console.log(boolscroll10);
        sect12onblackscroll1.style.opacity = 0;
    }
    if (topBar3.getBoundingClientRect().top <= 0 && boolscroll10 == true) { //value >= 1785 && boolscroll10 == true
        boolscroll10 = false;
        rightBar3.style.width = 0 + "px";
        leftBar3.style.width = 0 + "px";
        topBar3.style.height = 0 + "px";
        bottomBar3.style.height = 0 + "px";
        setTimeout(() => {
            blackOcuSync2p0vid.style.opacity = 0.5;
        }, 250);
        sect12txtCont.style.opacity = 0;
        // console.log(boolscroll10);
        setTimeout(() => {
            sect12onblackscroll1.style.opacity = 1;
        }, 800);
    }
    
    // -=- apas drone play (11) -=-
    const apasvid = document.getElementById("apasvid");
    const apasRestartBtn = document.getElementById("apasRestartBtn");
    if (apasvid.getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight) && boolscroll11 == false) { //value < 3350 && boolscroll11 == false
        boolscroll11 = true;
        apasRestartBtn.style.display = "none";
    }
    if (apasvid.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) && boolscroll11 == true) { //value >= 3350 && boolscroll11 == true
        boolscroll11 = false;
        apasvid.play();
        apasvid.addEventListener("ended", function() {
            apasRestartBtn.style.display = "block";
        });
    }
})

function restartVid(x, y, z) {
    const xVid = document.getElementById(x);
    const yRestartBtn = document.getElementById(y);
    xVid.play();
    yRestartBtn.style.display = "none";
    if (z == 3) {
        boolscroll3 = true;
    }
    if (z == 11) {
        boolscroll11 = true;
    }
}