let totalScore = 0n;
let currentScore = 0n;
let scrollerCooldown = true;
let scrollerSpeed = 1000;
let minVideoDuration = 3000;
let maxVideoDuration = 10000;
let randomImage = -1
let numVideosWatched = 0n;
let differentVideosWatched = [];
let maxPerks = 3;
let activePerks = 0;
let scrollingAnim = false;
let likedVideo = false;
let numLikedVideos = 0n;
let baseDopamine = 1n;
let resetTime = 0;
let focusChargeVal = 100;
let focusSpeed = 1;
let focusTimer;

let scrollerBaseupgrade07 = 0n;
let multUpgrade01 = 1n;
let scrollerSpeedUpgrade03 = 1;
let multUpgrade06 = 1n;
let gameSpeedUpgrade06 = 1;
let multUpgrade15 = 4n;
let gameSpeedUpgrade16 = 1;

const varUpgrade01 = {initCost : 10n, currentCost: 10n, costMult: 10n, locked: false}
const varUpgrade03 = {initCost : 200n, currentCost: 200n, costMult: 25n, locked: false}
const varUpgrade06 = {initCost : 100000n, currentCost: 100000n, costMult: 10000000000n, locked: false}
const varUpgrade07 = {initCost : 5n, currentCost: 5n, costMult: 2n, locked: false}
const varUpgrade09 = {initCost : 50000n, currentCost: 50000n, costMult: 5n, locked: true}
const varUpgrade10 = {initCost : 20000n, currentCost: 20000n, costMult: 5n, locked: true}
const varUpgrade15 = {initCost : 5000000000000000000000000000n, currentCost: 5000000000000000000000000000n, costMult: 200n, locked: true}
const varUpgrade16 = {initCost : 1000000000000n, currentCost: 1000000000000n, costMult: 5000n, locked: true}

const upgradesMap = new Map();

upgradesMap.set("01", varUpgrade01);
upgradesMap.set("03", varUpgrade03);
upgradesMap.set("06", varUpgrade06);
upgradesMap.set("07", varUpgrade07);
upgradesMap.set("09", varUpgrade09);
upgradesMap.set("10", varUpgrade10);
upgradesMap.set("15", varUpgrade15);
upgradesMap.set("16", varUpgrade16);

let multPerk04 = 1n;
let multPerk05 = 1n;
let multPerk11 = 1n;
let multPerk12 = 1n;
let gameSpeedPerk12 = 1;
let multPerk13 = 1n;
let gameSpeedPerk13 = 1;
let multPerk14 = 1n;

const varPerk02 = {cost : 200n, active: false, bought: false, locked: false}
const varPerk04 = {cost : 3000n, active: false, bought: false, locked: false}
const varPerk05 = {cost : 1000n, active: false, bought: false, locked: false}
const varPerk08 = {cost : 50n, active: false, bought: false, locked: false}
const varPerk11 = {cost : 1000000n, active: false, bought: false, locked: true}
const varPerk12 = {cost : 2000000000000000000n, active: false, bought: false, locked: true}
const varPerk13 = {cost : 2000000000000000000n, active: false, bought: false, locked: true}
const varPerk14 = {cost : 10000n, active: false, bought: false, locked: true}

const perksMap = new Map();

perksMap.set("02", varPerk02);
perksMap.set("04", varPerk04);
perksMap.set("05", varPerk05);
perksMap.set("08", varPerk08);
perksMap.set("11", varPerk11);
perksMap.set("12", varPerk12);
perksMap.set("13", varPerk13);
perksMap.set("14", varPerk14);


let multPrestige01 = 1n;
let multPrestige08 = 1n;

const varPrestige01 = {cost : 1n, bought: false}
const varPrestige02 = {cost : 2n, bought: false}
const varPrestige03 = {cost : 5n, bought: false}
const varPrestige04 = {cost : 10n, bought: false}

const varPrestige05 = {cost : 100n, bought: false}
const varPrestige06 = {cost : 200n, bought: false}
const varPrestige07 = {cost : 500n, bought: false}
const varPrestige08 = {cost : 1000n, bought: false}

const varPrestige09 = {cost : 10000n, bought: false}
const varPrestige10 = {cost : 20000n, bought: false}
const varPrestige11 = {cost : 50000n, bought: false}
const varPrestige12 = {cost : 100000n, bought: false}

const varPrestige13 = {cost : 1000000n, bought: false}
const varPrestige14 = {cost : 2000000n, bought: false}
const varPrestige15 = {cost : 5000000n, bought: false}
const varPrestige16 = {cost : 10000000n, bought: false}

const varPrestige17 = {cost : 100000000n, bought: false}
const varPrestige18 = {cost : 200000000n, bought: false}
const varPrestige19 = {cost : 500000000n, bought: false}
const varPrestige20 = {cost : 1000000000n, bought: false}

const varPrestige21 = {cost : 10000000000n, bought: false}
const varPrestige22 = {cost : 20000000000n, bought: false}
const varPrestige23 = {cost : 50000000000n, bought: false}
const varPrestige24 = {cost : 100000000000n, bought: false}

const varPrestige25 = {cost : 1000000000000n, bought: false}
const varPrestige26 = {cost : 2000000000000n, bought: false}
const varPrestige27 = {cost : 5000000000000n, bought: false}
const varPrestige28 = {cost : 10000000000000n, bought: false}

const varPrestige29 = {cost : 100000000000000n, bought: false}
const varPrestige30 = {cost : 200000000000000n, bought: false}
const varPrestige31 = {cost : 500000000000000n, bought: false}
const varPrestige32 = {cost : 1000000000000000n, bought: false}

const varPrestige33 = {cost : 10000000000000000n, bought: false}
const varPrestige34 = {cost : 20000000000000000n, bought: false}
const varPrestige35 = {cost : 50000000000000000n, bought: false}
const varPrestige36 = {cost : 100000000000000000n, bought: false}

const prestigesMap = new Map();

prestigesMap.set("01", varPrestige01);
prestigesMap.set("02", varPrestige02);
prestigesMap.set("03", varPrestige03);
prestigesMap.set("04", varPrestige04);
prestigesMap.set("05", varPrestige05);
prestigesMap.set("06", varPrestige06);
prestigesMap.set("07", varPrestige07);
prestigesMap.set("08", varPrestige08);
prestigesMap.set("09", varPrestige09);
prestigesMap.set("10", varPrestige10);
prestigesMap.set("11", varPrestige11);
prestigesMap.set("12", varPrestige12);
prestigesMap.set("13", varPrestige13);
prestigesMap.set("14", varPrestige14);
prestigesMap.set("15", varPrestige15);
prestigesMap.set("16", varPrestige16);
prestigesMap.set("17", varPrestige17);
prestigesMap.set("18", varPrestige18);
prestigesMap.set("19", varPrestige19);
prestigesMap.set("20", varPrestige20);
prestigesMap.set("21", varPrestige21);
prestigesMap.set("22", varPrestige22);
prestigesMap.set("23", varPrestige23);
prestigesMap.set("24", varPrestige24);
prestigesMap.set("25", varPrestige25);
prestigesMap.set("26", varPrestige26);
prestigesMap.set("27", varPrestige27);
prestigesMap.set("28", varPrestige28);
prestigesMap.set("29", varPrestige29);
prestigesMap.set("30", varPrestige30);
prestigesMap.set("31", varPrestige31);
prestigesMap.set("32", varPrestige32);
prestigesMap.set("33", varPrestige33);
prestigesMap.set("34", varPrestige34);
prestigesMap.set("35", varPrestige35);
prestigesMap.set("36", varPrestige36);

function resetVariables(){

    clearTimeout(timeOutVar);
    clearInterval(focusTimer); 
    timeOutVar = null;

     currentScore = 0n;
     scrollerCooldown = true;
     scrollerSpeed = 1000;
     minVideoDuration = 3000;
     maxVideoDuration = 10000;
     activePerks = 0;
     scrollingAnim = false;
     likedVideo = false;
     
     if(prestigesMap.get("02").bought){ baseDopamine = 10n; }
     else{ baseDopamine = 1n; }
     
     if(!prestigesMap.get("15").bought){ 
        totalScore = 0n;
        numVideosWatched = 0n;
        numLikedVideos = 0n;
        differentVideosWatched = [];
        resetTime = 0;
     }

     scrollerBaseupgrade07 = 0n;
     multUpgrade01 = 1n;
     scrollerSpeedUpgrade03 = 1;
     multUpgrade06 = 1n;
     gameSpeedUpgrade06 = 1;
     multPerk04 = 1n;
     multPerk05 = 1n;
     multPerk11 = 1n;
     multPerk12 = 1n;
     gameSpeedPerk12 = 1;
     multPerk13 = 1n;
     gameSpeedPerk13 = 1;
     multPerk14 = 1n;
     multUpgrade15 = 4n;
     gameSpeedUpgrade16 = 1;

     focusChargeVal = 100;
     focusSpeed = 1;
     focusButton.src = "images/focus_closed.png"; 
     focusButtonBg.src = "images/focus_closed.png";  
     focusButton.style.maskImage = "linear-gradient(rgba(0, 0, 0, 0) "+(100-focusChargeVal)+"%, black "+(100-focusChargeVal)+"%)";

     for (var [key, value] of upgradesMap) {
        value.currentCost = value.initCost;
    }

    for (var [key, value] of perksMap) {
        document.getElementById("perk"+key).style.background = "rgb(36, 36, 36)";
        document.getElementById("perk"+key).style = "disabled: background-color: black;";
        document.getElementById("perk"+key).style.color = "rgb(139, 235, 139)";
        value.active = false;
        value.bought = false;
    }

    if(prestigesMap.get("06").bought){
        perksMap.get("02").bought = true;
        perksMap.get("02").active = true;
        document.getElementById("perk02").disabled = true;
        document.getElementById("perk02").style.background = "rgb(139, 235, 139)";
        document.getElementById("perk02").style.color = "rgb(36, 36, 36)";

    }
    barDisplay.style.animation = 'none';
    barDisplay.offsetHeight;
    barDisplay.style.width = "0%";

    imageScroll.style.animation = 'none';
    imageScroll.offsetHeight;
    imageScroll.src = "images/" + images[randomImage];

    imageScrollAux.style.animation = 'none';
    imageScrollAux.offsetHeight;
    imageScrollAux.src = "images/" + images[randomImage];

    scrollButton.style.opacity = "100%";
    scrollButton.style.cursor = "pointer";
    scrollBox.style.cursor = "default";

    //likeButton.style.display = "none";

}

let prestigeMinScore = 10000000000n;
let currentInsomnia = 0n;
let totalInsomnia = 0n;
totalTime = 0;

let timeOutVar = null;
let autoScrollerID = null;
let images = ["da vinki.png", "shubidubidu.png", "subway guy.png", "kngrejo.png", "scar dorada.png", "morning.png", "gamec.png", 
    "gorilla.png", "ohmygad.png", "schlit.png", "tomcandy.png", "unpollo.png", "laaaaaaaaaaaa.png", "uno.png", "fimpleslips.png",
    "tsktsk.png", "acai.png", "blueshirt.png", "diff abby.png", "balloondie.png", "4bigguys.png", "asmrkid.png", "disbelief.png",
    "gotosleep.png"]

newImage();
imageScroll.src = "images/" + images[randomImage];
displayPoints();
var timer = setInterval(tickTimer, 1000);

function tickTimer(){
    resetTime++;
    totalTime++;
    displayPoints();
}

scrollBox.addEventListener('wheel', scrollBoxFun);
scrollButton.addEventListener("click", scrollButtonFun);
focusButton.addEventListener("mousedown", focusDownFun);
focusButton.addEventListener("mouseup", focusUpFun);
likeButton.addEventListener("click", likeFun);
upgradesMenuButton.addEventListener("click", () => changeMenu("upgrades"));
perksMenuButton.addEventListener("click", () => changeMenu("perks"));
prestigeMenuButton.addEventListener("click", () => changeMenu("prestige"));
statsMenuButton.addEventListener("click", () => changeMenu("stats"));
galleryMenuButton.addEventListener("click", () => changeMenu("gallery"));
settingsMenuButton.addEventListener("click", () => changeMenu("settings"));
upgrade01.addEventListener("click", () => upgradeFun("01"));
perk02.addEventListener("click", () => activatePerk("02"));
upgrade03.addEventListener("click", () => upgradeFun("03"));
perk04.addEventListener("click", () => activatePerk("04"));
perk05.addEventListener("click", () => activatePerk("05"));
upgrade06.addEventListener("click", () => upgradeFun("06"));
upgrade07.addEventListener("click", () => upgradeFun("07"));
perk08.addEventListener("click", () => activatePerk("08"));
upgrade09.addEventListener("click", () => upgradeFun("09"));
upgrade10.addEventListener("click", () => upgradeFun("10"));
perk11.addEventListener("click", () => activatePerk("11"));
perk12.addEventListener("click", () => activatePerk("12"));
perk13.addEventListener("click", () => activatePerk("13"));
perk14.addEventListener("click", () => activatePerk("14"));
upgrade15.addEventListener("click", () => upgradeFun("15"));
upgrade16.addEventListener("click", () => upgradeFun("16"));
prestige01.addEventListener("click", () => activatePrestige("01"));
prestige02.addEventListener("click", () => activatePrestige("02"));
prestige03.addEventListener("click", () => activatePrestige("03"));
prestige04.addEventListener("click", () => activatePrestige("04"));
prestige05.addEventListener("click", () => activatePrestige("05"));
prestige06.addEventListener("click", () => activatePrestige("06"));
prestige07.addEventListener("click", () => activatePrestige("07"));
prestige08.addEventListener("click", () => activatePrestige("08"));
prestige09.addEventListener("click", () => activatePrestige("09"));
prestige10.addEventListener("click", () => activatePrestige("10"));
prestige11.addEventListener("click", () => activatePrestige("11"));
prestige12.addEventListener("click", () => activatePrestige("12"));
prestige13.addEventListener("click", () => activatePrestige("13"));
prestige14.addEventListener("click", () => activatePrestige("14"));
prestige15.addEventListener("click", () => activatePrestige("15"));
prestige16.addEventListener("click", () => activatePrestige("16"));
prestige17.addEventListener("click", () => activatePrestige("17"));
prestige18.addEventListener("click", () => activatePrestige("18"));
prestige19.addEventListener("click", () => activatePrestige("19"));
prestige20.addEventListener("click", () => activatePrestige("20"));
prestige21.addEventListener("click", () => activatePrestige("21"));
prestige22.addEventListener("click", () => activatePrestige("22"));
prestige23.addEventListener("click", () => activatePrestige("23"));
prestige24.addEventListener("click", () => activatePrestige("24"));
prestige25.addEventListener("click", () => activatePrestige("25"));
prestige26.addEventListener("click", () => activatePrestige("26"));
prestige27.addEventListener("click", () => activatePrestige("27"));
prestige28.addEventListener("click", () => activatePrestige("28"));
prestige29.addEventListener("click", () => activatePrestige("29"));
prestige30.addEventListener("click", () => activatePrestige("30"));
prestige31.addEventListener("click", () => activatePrestige("31"));
prestige32.addEventListener("click", () => activatePrestige("32"));
prestige33.addEventListener("click", () => activatePrestige("33"));
prestige34.addEventListener("click", () => activatePrestige("34"));
prestige35.addEventListener("click", () => activatePrestige("35"));
prestige36.addEventListener("click", () => activatePrestige("36"));

prestigeButton.addEventListener("click", prestige);

function scrollBoxFun(event){

    if (event.deltaY < 0){ return; }
    
    scroller();
}

function scrollButtonFun(){

    scroller();
}

function getScrollerPoints( videoDuration ){
    let aux = baseDopamine + scrollerBaseupgrade07;
    if (perksMap.get("08").active){
        if (!prestigesMap.get("07").bought){ aux = aux + BigInt(Math.round(videoDuration / 1000) ); }
        else{
            let aux2 = videoDuration;
            if (aux2 > 60000){ aux2 = 60000; }
            if (BigInt(Math.round(aux2 / 1000) ** 3 ) < 1){ aux = aux + 1n}
            else{ aux = aux + BigInt(Math.round(aux2 / 1000) ** 3 ) }
        }
    }
    let totalPoints = multUpgrade01 * multPerk04 * multPerk05 * multUpgrade06 * multPerk11 * multPerk13 * multPerk14  * multPrestige01 * multPrestige08 * aux / multPerk12;
    if (totalPoints < 1) {totalPoints = 1n; }
    return totalPoints;
}

function getScrollerSpeed(){
    return scrollerSpeed / (scrollerSpeedUpgrade03 * gameSpeedUpgrade06 * gameSpeedUpgrade16 * focusSpeed);
}

function getVideoDuration(){
    let duration;
    if (maxVideoDuration < minVideoDuration) { duration = minVideoDuration }
    else{ duration = (Math.random() * (maxVideoDuration - minVideoDuration) ) + minVideoDuration }
    return duration * getVideoSpeed() ;
}

function getVideoSpeed(){
    return gameSpeedPerk12 * gameSpeedPerk13 / (gameSpeedUpgrade06  * gameSpeedUpgrade16 * focusSpeed);
}


function scroller(){

    if (!scrollerCooldown){ return; }
    
    newImage()
    imageScrollAux.src = "images/" + images[randomImage];

    imageScroll.style.animation = 'none';
    imageScroll.offsetHeight;
    imageScroll.style.animation = "scroll-out " + getScrollerSpeed()/1000 + "s linear forwards" ;

    imageScrollAux.style.animation = 'none';
    imageScrollAux.offsetHeight;
    imageScrollAux.style.animation = "scroll-in " + getScrollerSpeed()/1000 + "s linear forwards" ;
    
    scrollerCooldown = false;
    scrollingAnim = true;
    likedVideo = false;
    scrollButton.style.opacity = "33%";
    likeButton.src = "images/heart_blank.png"
    likeButton.style.opacity = "33%";
    //scrollBox.style.background = "rgb(0, 0, 0)";
    scrollButton.style.cursor = "wait";
    scrollBox.style.cursor = "wait";
    likeButton.style.cursor = "default";
    
    barDisplay.style.animation = 'none';
    barDisplay.offsetHeight;
    barDisplay.style.width = "0%";

    timeOutVar = setTimeout(() => {

        if (scrollerCooldown) { return; }

        let videoDuration = getVideoDuration()
        let totalPoints = getScrollerPoints(videoDuration);

        scrollingAnim = false;
        likeButton.style.cursor = "pointer";
        imageScroll.src = "images/" + images[randomImage];
        barDisplay.style.animation = "barAnim " + videoDuration/1000 + "s linear forwards" ;
        likeButton.style.opacity = "100%";

        timeOutVar = setTimeout(() => {

            if (scrollerCooldown) { return; }
    
            scrollerCooldown = true;
            //scrollBox.style.background = null;
            scrollButton.style.opacity = "100%";
            scrollButton.style.cursor = "pointer";
            scrollBox.style.cursor = "default";
            numVideosWatched = numVideosWatched + 1n;
            if (!differentVideosWatched.includes(images[randomImage])){differentVideosWatched.push(images[randomImage]); }
            if (likedVideo){
                totalPoints = totalPoints * multUpgrade15;
                numLikedVideos = numLikedVideos + 1n;
            }
            updatePoints(totalPoints);
    
        }, 
        videoDuration);  

    }, 
    getScrollerSpeed());  
    
}

function updatePoints(p){

    totalScore = totalScore + p;
    currentScore = currentScore + p;
    displayPoints();

}

function newImage(){

    let num = randomImage;
    while (randomImage == num){ num = Math.floor( Math.random() * (images.length) ); }
    randomImage = num;

}

function displayPoints(){

    let aux;

    for (var [key, value] of prestigesMap) {
        if( (value.cost > currentInsomnia) || value.bought ){ document.getElementById("prestige"+key).disabled = true; }
        else{ document.getElementById("prestige"+key).disabled = false; }
    }

    if(prestigesMap.get("01").bought){
        multPrestige01 = 1n + totalInsomnia;
        prestige01.innerHTML = "multiplier based on total insomnia<br><br>purchased!<br><br>current multiplier: x"+notation(multPrestige01); 
    }
    else{ 
        multPrestige01 = 1n;
        prestige01.innerHTML = "multiplier based on total insomnia<br><br>cost: " + notation(prestigesMap.get("01").cost) + " insomnia"; 
    }

    if(prestigesMap.get("02").bought){
        baseDopamine = 10n;
        prestige02.innerHTML = "base dopamine is 10<br><br>purchased!"; 
    }
    else{ prestige02.innerHTML = "base dopamine is 10<br><br>cost: " + notation(prestigesMap.get("02").cost) + " insomnia"; }

    if(prestigesMap.get("03").bought){
        upgradesMap.get("09").locked = false
        upgradesMap.get("10").locked = false
        prestige03.innerHTML = "unlocks 2 new upgrades<br><br>purchased!"; 
    }
    else{ prestige03.innerHTML = "unlocks 2 new upgrades<br><br>cost: " + notation(prestigesMap.get("03").cost) + " insomnia"; }

    if(prestigesMap.get("04").bought){
        if(upgradesMap.get("01").costMult == 10n){
            upgradesMap.get("01").currentCost = upgradesMap.get("01").initCost;
            upgradesMap.get("01").costMult = 8n;
            multUpgrade01 = 1n;
        }
        prestige04.innerHTML = "reduce cost scaling of upgrade 01<br><br>purchased!";
    }
    else{ prestige04.innerHTML = "reduce cost scaling of upgrade 01<br><br>cost: " + notation(prestigesMap.get("04").cost) + " insomnia"; }

    if(prestigesMap.get("05").bought){

        perksMap.get("12").locked = false
        perksMap.get("13").locked = false
        prestige05.innerHTML = "unlocks 2 new perks<br><br>purchased!"; 
    }
    else{ prestige05.innerHTML = "unlocks 2 new perks<br><br>cost: " + notation(prestigesMap.get("05").cost) + " insomnia"; }

    if(prestigesMap.get("06").bought){
        //maxPerks = maxPerks + 1;
        prestige06.innerHTML = "autoscroller is always active and doesn't consume a perk slot<br><br>purchased!"; 
    }
    else{ prestige06.innerHTML = "autoscroller is always active and doesn't consume a perk slot<br><br>cost: " + notation(prestigesMap.get("06").cost) + " insomnia"; }

    if(prestigesMap.get("07").bought){ prestige07.innerHTML = "improve formula of perk 04<br><br>purchased!"; }
    else{ prestige07.innerHTML = "improve formula of perk 04<br><br>cost: " + notation(prestigesMap.get("07").cost) + " insomnia"; }

    if(prestigesMap.get("08").bought){
        multPrestige08 = BigInt(Math.ceil(resetTime/10) );
        if (multPrestige08  < 1) {multPrestige08  = 1n;}
        prestige08.innerHTML = "multiplier based on time spent in this reset<br><br>purchased!<br><br>current multiplier: x"+notation(multPrestige08); 
    }
    else{ 
        multPrestige08 = 1n;
        prestige08.innerHTML = "multiplier based on time spent in this reset<br><br>cost: " + notation(prestigesMap.get("08").cost) + " insomnia"; 
    }

    if(prestigesMap.get("09").bought){
        for (const e of ["01","03","06","07"]){
            while (currentScore > upgradesMap.get(e).currentCost){ upgradeFun(e); }
        }
        prestige09.innerHTML = "unlocks autobuyer for the first row of upgrades<br><br>purchased!"; 
    }
    else{ 
        prestige09.innerHTML = "unlocks autobuyer for the first row of upgrades<br><br>cost: " + notation(prestigesMap.get("09").cost) + " insomnia"; 
    }

    if(prestigesMap.get("10").bought){
        likeButton.style.display = "flex"; 
        numLikedVideosText.style.display = "flex";
        prestige10.innerHTML = "unlocks the like button<br><br>purchased!"; 
    }
    else{
        prestige10.innerHTML = "unlocks the like button (liked videos give x4 dopamine)<br><br>cost: " + notation(prestigesMap.get("10").cost) + " insomnia"; 
    }

    if(prestigesMap.get("11").bought){ prestige11.innerHTML = "removes downside from perk 06<br><br>purchased!"; }
    else{ prestige11.innerHTML = "removes downside from perk 06<br><br>cost: " + notation(prestigesMap.get("11").cost) + " insomnia"; }

    if(prestigesMap.get("12").bought){
        upgradesMap.get("15").locked = false
        upgradesMap.get("16").locked = false
        prestige12.innerHTML = "unlocks 2 new upgrades<br><br>purchased!"; 
    }
    else{ prestige12.innerHTML = "unlocks 2 new upgrades<br><br>cost: " + notation(prestigesMap.get("12").cost) + " insomnia"; }

    if(prestigesMap.get("13").bought){ prestige13.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige13.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("13").cost) + " insomnia"; }

    if(prestigesMap.get("14").bought){ prestige14.innerHTML = "unlock 2 more perks (likeperks)<br><br>purchased!"; } //sin implementar
    else{ prestige14.innerHTML = "unlock 2 more perks (likeperks)<br><br>cost: " + notation(prestigesMap.get("14").cost) + " insomnia"; }

    if(prestigesMap.get("15").bought){ prestige15.innerHTML = "stats dont reset between prestiges<br><br>purchased!"; }
    else{ prestige15.innerHTML = "stats dont reset between prestiges<br><br>cost: " + notation(prestigesMap.get("15").cost) + " insomnia"; }

    if(prestigesMap.get("16").bought){ prestige16.innerHTML = "get an extra perk slot<br><br>purchased!"; }
    else{ prestige16.innerHTML = "get an extra perk slot<br><br>cost: " + notation(prestigesMap.get("16").cost) + " insomnia"; }

    if(prestigesMap.get("17").bought){
        for (const e of ["15","09","10","16"]){
            while (currentScore > upgradesMap.get(e).currentCost){ upgradeFun(e); }
        }
        prestige17.innerHTML = "unlocks autobuyer for the first row of upgrades<br><br>purchased!"; 
    }
    else{ prestige17.innerHTML = "unlocks autobuyer for the first row of upgrades<br><br>cost: " + notation(prestigesMap.get("17").cost) + " insomnia"; }

    if(prestigesMap.get("18").bought){ prestige18.innerHTML = "improve perk 4 again<br><br>purchased!"; } //sin implementar
    else{ prestige18.innerHTML = "improve perk 4 again<br><br>cost: " + notation(prestigesMap.get("18").cost) + " insomnia"; }

    if(prestigesMap.get("19").bought){
        focusButton.style.display = "flex"; 
        focusButtonBg.style.display = "flex"; 
        prestige19.innerHTML = "unlocks the focus button (game speed x10 while focusing)<br><br>purchased!"; 
    }
    else{ prestige19.innerHTML = "unlocks the focus button<br><br>cost: " + notation(prestigesMap.get("19").cost) + " insomnia"; }

    if(prestigesMap.get("20").bought){ prestige20.innerHTML = "unlock 2 more upgrades (focus video speed / duration)<br><br>purchased!"; } //sin implementar
    else{ prestige20.innerHTML = "unlock 2 more upgrades (focus video speed / duration)<br><br>cost: " + notation(prestigesMap.get("20").cost) + " insomnia"; }

    if(prestigesMap.get("21").bought){ prestige21.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige21.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("21").cost) + " insomnia"; }

    if(prestigesMap.get("22").bought){ prestige22.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige22.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("22").cost) + " insomnia"; }

    if(prestigesMap.get("23").bought){ prestige23.innerHTML = "unlock 2 more perks<br><br>purchased!"; } //sin implementar
    else{ prestige23.innerHTML = "unlock 2 more perks<br><br>cost: " + notation(prestigesMap.get("23").cost) + " insomnia"; }

    if(prestigesMap.get("24").bought){ prestige24.innerHTML = "improves scaling cost of upgrade 3<br><br>purchased!"; } //sin implementar
    else{ prestige24.innerHTML = "improves scaling cost of upgrade 3<br><br>cost: " + notation(prestigesMap.get("24").cost) + " insomnia"; }

    if(prestigesMap.get("25").bought){ prestige25.innerHTML = "autoliker is always active and doesnt consume perk slot<br><br>purchased!"; } //sin implementar
    else{ prestige25.innerHTML = "autoliker is always active and doesnt consume perk slot<br><br>cost: " + notation(prestigesMap.get("25").cost) + " insomnia"; }

    if(prestigesMap.get("26").bought){ prestige26.innerHTML = "multiplier based on number of resets<br><br>purchased!"; } //sin implementar
    else{ prestige26.innerHTML = "multiplier based on number of resets<br><br>cost: " + notation(prestigesMap.get("26").cost) + " insomnia"; }

    if(prestigesMap.get("27").bought){ prestige27.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige27.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("27").cost) + " insomnia"; }

    if(prestigesMap.get("28").bought){ prestige28.innerHTML = "unlock 2 more upgrades(focus multiplier / cooldown)<br><br>purchased!"; } //sin implementar
    else{ prestige28.innerHTML = "unlock 2 more upgrades(focus multiplier / cooldown)<br><br>cost: " + notation(prestigesMap.get("28").cost) + " insomnia"; }

    if(prestigesMap.get("29").bought){ prestige29.innerHTML = "removes downside from perk 7<br><br>purchased!"; } //sin implementar
    else{ prestige29.innerHTML = "removes downside from perk 7<br><br>cost: " + notation(prestigesMap.get("29").cost) + " insomnia"; }

    if(prestigesMap.get("30").bought){ prestige30.innerHTML = "get one extra perk slot<br><br>purchased!"; } //sin implementar
    else{ prestige30.innerHTML = "get one extra perk slot<br><br>cost: " + notation(prestigesMap.get("30").cost) + " insomnia"; }

    if(prestigesMap.get("31").bought){ prestige31.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige31.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("31").cost) + " insomnia"; }

    if(prestigesMap.get("32").bought){ prestige32.innerHTML = "unlock 2 more perks(autofocus)<br><br>purchased!"; } //sin implementar
    else{ prestige32.innerHTML = "unlock 2 more perks(autofocus)<br><br>cost: " + notation(prestigesMap.get("32").cost) + " insomnia"; }

    if(prestigesMap.get("33").bought){ prestige33.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige33.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("33").cost) + " insomnia"; }

    if(prestigesMap.get("34").bought){ prestige34.innerHTML = "XXXXX<br><br>purchased!"; } //sin implementar
    else{ prestige34.innerHTML = "XXXXX<br><br>cost: " + notation(prestigesMap.get("34").cost) + " insomnia"; }

    if(prestigesMap.get("35").bought){ prestige35.innerHTML = "get one extra perks slot<br><br>purchased!"; } //sin implementar
    else{ prestige35.innerHTML = "get one extra perks slot<br><br>cost: " + notation(prestigesMap.get("35").cost) + " insomnia"; }

    if(prestigesMap.get("36").bought){ prestige36.innerHTML = "unlock the end<br><br>purchased!"; } //sin implementar
    else{ prestige36.innerHTML = "unlock the end<br><br>cost: " + notation(prestigesMap.get("36").cost) + " insomnia"; }






    for (var [key, value] of upgradesMap) {
        if(value.currentCost > currentScore){ document.getElementById("upgrade"+key).disabled = true; }
        else{ document.getElementById("upgrade"+key).disabled = false; }
    }
    
    upgrade01.innerHTML = "dopamine generated x2<br><br>cost: " + notation(upgradesMap.get("01").currentCost) + " dopamine<br><br>current multiplier: x"+notation(multUpgrade01);

    upgrade03.innerHTML = "scroll x1.10 faster<br><br>cost: " + notation(upgradesMap.get("03").currentCost) + " dopamine<br><br>currently: "+notation(getScrollerSpeed()/1000)+" seconds";

    upgrade06.innerHTML = "dopamine generated x20 but game speed x2 slower<br><br>cost: " + notation(upgradesMap.get("06").currentCost) + " dopamine";

    upgrade07.innerHTML = "+1 to base dopamine<br><br>cost: " + notation(upgradesMap.get("07").currentCost) + " dopamine<br><br>currently: "+notation(baseDopamine + scrollerBaseupgrade07)+" base dopamine";

    upgrade09.innerHTML = "minimum video duration x0.95<br><br>cost: " + notation(upgradesMap.get("09").currentCost) + " dopamine<br><br>currently: "+notation(minVideoDuration*getVideoSpeed()/1000)+" seconds";

    if (maxVideoDuration < minVideoDuration) { upgrade10.innerHTML = "maximum video duration x0.9<br><br>cost: " 
    + notation(upgradesMap.get("10").currentCost) + " dopamine<br><br>currently: "+notation(minVideoDuration*getVideoSpeed()/1000)+" seconds (capped)"; }
    else{ upgrade10.innerHTML = "maximum video duration x0.9<br><br>cost: " + notation(upgradesMap.get("10").currentCost) + " dopamine<br><br>currently: "+notation(maxVideoDuration*getVideoSpeed()/1000)+" seconds"; }

    //if (multUpgrade15 < 2) { upgrade15.innerHTML = "unlocks the like button<br><br>cost: " + notation(upgradesMap.get("15").currentCost) + " dopamine"; }
    upgrade15.innerHTML = "liked videos generate more dopamine<br><br>cost: " + notation(upgradesMap.get("15").currentCost) + " dopamine<br><br>current multiplier: x"+notation(multUpgrade15);

    upgrade16.innerHTML = "game speed x1.05 faster<br><br>cost: " + notation(upgradesMap.get("16").currentCost) + " dopamine<br><br>current multiplier: x"+notation(gameSpeedUpgrade16); 







    for (var [key, value] of perksMap) {
        if( (value.cost > currentScore && !value.bought) || (!(maxPerks > activePerks) && value.bought && !value.active) ){ document.getElementById("perk"+key).disabled = true; }
        else{ document.getElementById("perk"+key).disabled = false; }
    }

    if(perksMap.get("02").active && autoScrollerID == null){ autoScrollerID = setInterval(scroller, 1);}
    if(!perksMap.get("02").active && autoScrollerID != null){
        clearInterval(autoScrollerID);
        autoScrollerID = null;
    }
    if(perksMap.get("02").bought){ perk02.innerHTML = "scroller works automatically<br><br>purchased!"; }
    else{ perk02.innerHTML = "scroller works automatically<br><br>cost: " + notation(perksMap.get("02").cost) + " dopamine";}

    aux = big10Log(totalScore) * big10Log(totalScore) - 6n;
    if (aux < 1) {aux = 1n;}
    if(perksMap.get("04").active){ multPerk04 = aux; }
    else{ multPerk04 = 1n; }
    if(perksMap.get("04").bought){ perk04.innerHTML = "dopamine multiplier based on total dopamine<br><br>purchased!<br><br>current multiplier: x" + notation(aux); }
    else{ perk04.innerHTML = "dopamine multiplier based on total dopamine<br><br>cost: " + notation(perksMap.get("04").cost) + " dopamine"; }

    aux = bigRoot(currentScore/10n, 10n) * big10Log(currentScore);
    if (aux < 1) {aux = 1n;}
    if(perksMap.get("05").active){ multPerk05 = aux; }
    else{ multPerk05 = 1n; }
    if(perksMap.get("05").bought){ perk05.innerHTML = "dopamine multiplier based on current dopamine<br><br>purchased!<br><br>current multiplier: x" + notation(aux); }
    else{ perk05.innerHTML = "dopamine multiplier based on current dopamine<br><br>cost: " + notation(perksMap.get("05").cost) + " dopamine"; }

    if(perksMap.get("08").bought){
        if (prestigesMap.get("07").bought){ perk08.innerHTML = "extra base dopamine based on video duration (caps at 60s)<br><br>purchased!<br><br>video seconds ^3";  }
        else{ perk08.innerHTML = "extra base dopamine based on video duration<br><br>purchased!<br><br>+1 dopamine per second";  }
        
    }
    else{ perk08.innerHTML = "extra base dopamine based on video duration<br><br>cost: " + notation(perksMap.get("08").cost) + " dopamine"; }

    if (numVideosWatched < 1) {aux = 1n;}
    else{
        aux = bigRoot(numVideosWatched, 2n);
        if (aux < 1) {aux = 1n;}
    }
    if(perksMap.get("11").active){ multPerk11 = aux; }
    else{ multPerk11 = 1n; }
    if(perksMap.get("11").bought){ perk11.innerHTML = "dopamine multiplier based on videos watched<br><br>purchased!<br><br>current multiplier: x" + notation(aux); }
    else{ perk11.innerHTML = "dopamine multiplier based on videos watched<br><br>cost: " + notation(perksMap.get("11").cost) + " dopamine"; }

    if(perksMap.get("12").active){
        if(!prestigesMap.get("11").bought) {multPerk12 = 3n;}
        gameSpeedPerk12 = 0.2;
    }
    else{  
        multPerk12 = 1n;
        gameSpeedPerk12 = 1;
    }
    if(!prestigesMap.get("11").bought) {
        if(perksMap.get("12").bought){ perk12.innerHTML = "watch videos x5 faster but dopamine generated x0.33<br><br>purchased" }
        else{ perk12.innerHTML = "watch videos x5 faster but dopamine generated x0.33<br><br>cost: " + notation(perksMap.get("12").cost) + " dopamine"; }
    }
    else{
        if(perksMap.get("12").bought){ perk12.innerHTML = "watch videos x5 faster<br><br>purchased" }
    else{ perk12.innerHTML = "watch videos x5 faster<br><br>cost: " + notation(perksMap.get("12").cost) + " dopamine"; }
    }
    

    if(perksMap.get("13").active){ 
        multPerk13 = 100n; 
        gameSpeedPerk13 = 10;
    }
    else{  
        multPerk13 = 1n;
        gameSpeedPerk13 = 1;
    }
    if(perksMap.get("13").bought){ perk13.innerHTML = "watch videos x10 slower but dopamine generated x100<br><br>purchased!"; }
    else{ perk13.innerHTML = "watch videos x10 slower but dopamine generated x100<br><br>cost: " + notation(perksMap.get("13").cost) + " dopamine"; }

    aux = BigInt(differentVideosWatched.length); 
    if (aux < 1) {aux = 1n;}
    if(perksMap.get("14").active){ multPerk14 = aux; }
    else{ multPerk14 = 1n; }
    if(perksMap.get("14").bought){ perk14.innerHTML = "dopamine multiplier based on number of different videos watched<br><br>purchased!<br><br>current multiplier: x" + notation(aux); }
    else{ perk14.innerHTML = "dopamine multiplier based on number of different videos watched<br><br>cost: " + notation(perksMap.get("14").cost) + " dopamine"; }

    if(prestigeMinScore > currentScore){ 
        prestigeButton.disabled = true;
        prestigeButton.innerHTML = "go to sleep and get insomia points<br><br>reach " + notation(prestigeMinScore) + " points"; 
    }
    else{ 
        prestigeButton.disabled = false;
        let auxPrestige = prestigeMinScore;
        while (currentScore > auxPrestige){ auxPrestige = auxPrestige * prestigeMinScore; }
        if (getInsomniaPoints() < 100000000000000000n){ 
            prestigeButton.innerHTML = "go to sleep and get " + notation(getInsomniaPoints()) + " insomia points<br><br>next milestone at " + notation(auxPrestige) + " points"; 
        }
        else{ prestigeButton.innerHTML = "go to sleep and get " + notation(getInsomniaPoints()) + " insomia points (capped)"; }
        
    }






    
    for (var [key, value] of upgradesMap) {

        if( !value.locked ){ continue;}
        document.getElementById("upgrade"+key).disabled = true;
        document.getElementById("upgrade"+key).innerHTML = "locked";
    }

    for (var [key, value] of perksMap) {

        if( !value.locked ){ continue;}
        document.getElementById("perk"+key).disabled = true;
        document.getElementById("perk"+key).innerHTML = "locked";
    }

    if (prestigesMap.get("05").bought){ document.getElementById("perk02").disabled = true; }





    currentDopamineText.innerHTML = "current dopamine: " + notation(currentScore);
    currentInsomniaText.innerHTML = "current insomnia: " + notation(currentInsomnia);

    progressNumber.innerHTML = big10Log(currentScore)+"%";
    progressBarDisplay.style.width = big10Log(currentScore)+"%";
    perksDisplay.innerHTML = "Active perks: "+activePerks+"/"+maxPerks;

    totalDopamineText.innerHTML = "Total dopamine generated: " + notation(totalScore);
    numVodsWatchedText.innerHTML = "Total videos watched: " + notation(numVideosWatched);
    diffVodsWatchedText.innerHTML = "Total different videos watched: " + notation(differentVideosWatched.length);
    numLikedVideosText.innerHTML = "Total liked videos: " + notation(numLikedVideos);
    resetTimeText.innerHTML = "Total time spent: " + timeNotation(resetTime);
    totalInsomniaText.innerHTML = "Total insomnia generated: " + notation(totalInsomnia);

}

function bigRoot(base, root) {
    if(base < 1) {return 1n;}
    let s = base + 1n;
    let k1 = root - 1n;
    let u = base;
    while (u < s) {
        s = u;
        u = ((u*k1) + base / (u ** k1)) / root;
    }
    return s;
}

function big10Log(num){
    return BigInt(num.toString().length) - 1n;
    
}

function upgradeFun(name){
    //if (upgradesMap.get(name).currentCost > currentScore){ return; }
    currentScore = currentScore - upgradesMap.get(name).currentCost;
    upgradesMap.get(name).currentCost = upgradesMap.get(name).currentCost * upgradesMap.get(name).costMult;
    window["upgrade"+name+"Fun"]();
    displayPoints();
}

function upgrade01Fun(){ multUpgrade01 = multUpgrade01 * 2n; }

function upgrade03Fun(){ scrollerSpeedUpgrade03 = scrollerSpeedUpgrade03 * 1.10; }

function upgrade06Fun(){

    multUpgrade06 = multUpgrade06 * 20n;
    gameSpeedUpgrade06 = gameSpeedUpgrade06 / 2;

}

function upgrade07Fun(){ scrollerBaseupgrade07 = scrollerBaseupgrade07 + 1n; }

function upgrade09Fun(){ minVideoDuration = minVideoDuration * 0.95; }

function upgrade10Fun(){ maxVideoDuration = maxVideoDuration * 0.9; }

function upgrade15Fun(){ multUpgrade15 = multUpgrade15 * 2n; }

function upgrade16Fun(){ gameSpeedUpgrade16 = gameSpeedUpgrade16 * 1.05; }

function activatePerk(name){
    
    if(!perksMap.get(name).bought){ 
        //if (perksMap.get(name).cost > currentScore){ return; } //es esto realmente necesario?
        currentScore = currentScore - perksMap.get(name).cost;
        perksMap.get(name).bought = true;
    }
    if(!perksMap.get(name).active){
        if (maxPerks > activePerks){
            activePerks++;
            perksMap.get(name).active = true;
            document.getElementById("perk"+name).style.background = "rgb(139, 235, 139)";
            document.getElementById("perk"+name).style.color = "rgb(36, 36, 36)";
        }
    }
    else{
        activePerks--;
        perksMap.get(name).active = false;
        document.getElementById("perk"+name).style.background = "rgb(36, 36, 36)";
        document.getElementById("perk"+name).style = "disabled: background-color: black;";
        document.getElementById("perk"+name).style.color = "rgb(139, 235, 139)";
    }
    
    displayPoints();
}

function activatePrestige(name){
    
    currentInsomnia = currentInsomnia - prestigesMap.get(name).cost;
    prestigesMap.get(name).bought = true;
    document.getElementById("prestige"+name).style.background = "rgb(139, 235, 139)";
    document.getElementById("prestige"+name).style.color = "rgb(36, 36, 36)";
    
    if( ["06", "16"].includes(name) ){ window["prestige"+name+"Fun"](); }
    displayPoints();
}
differentVideosWatched
function prestige06Fun(){
    perksMap.get("02").bought = true;
    if(perksMap.get("02").active != true){
        perksMap.get("02").active = true;
        document.getElementById("perk02").style.background = "rgb(139, 235, 139)";
        document.getElementById("perk02").style.color = "rgb(36, 36, 36)";
    }
    else{ activePerks--; }   
}

function prestige16Fun(){ maxPerks++; }

function getInsomniaPoints(){
    if (currentScore >= 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n){return 100000000000000000n}
    let auxPoints = Number.parseInt(currentScore).toExponential(2).replace("+","").slice(-2) - 10;
    let auxInsomnia = 1n;

    while (auxPoints >= 10){
        auxInsomnia = auxInsomnia * 100n;
        auxPoints = auxPoints - 10;
    }
    auxInsomnia = auxInsomnia * BigInt(auxPoints + 1);
    return auxInsomnia;
}

function prestige(){
    let auxInsomnia = getInsomniaPoints();
    currentInsomnia = currentInsomnia + auxInsomnia;
    totalInsomnia = totalInsomnia + auxInsomnia;
    currentDopamineText.style.height = "1%";
    currentInsomniaText.style.display = "flex";
    totalInsomniaText.style.display = "flex";

    resetVariables();
    displayPoints();
}

function notation(n){
    if(n < 1000000n) {return n.toLocaleString()}
    else {return Number.parseFloat(n).toExponential(2).replace("+","")}
}

function timeNotation(n){
    //se puede hacer mas bonito pero me da pereza
    let aux;
    let seconds = n % 60;
    aux = Math.floor(n / 60);
    if (aux < 1){ return(seconds+" seconds"); }
    let minutes = aux % 60;
    aux = Math.floor(aux / 60);
    if (aux < 1){ return(minutes+" minutes, "+seconds+" seconds"); }
    let hours = aux % 24;
    aux = Math.floor(aux / 24);
    if (aux < 1){ return(hours+" hours, "+minutes+" minutes, "+seconds+" seconds"); } 
    return(parseInt(aux)+" days, "+hours+" hours, "+minutes+" minutes, "+seconds+" seconds");
}

function likeFun(){
    if (scrollingAnim){ return; }
    if(!likedVideo){
        likedVideo = true;
        likeButton.src = "images/heart_full.png"
    }
    else{
        likedVideo = false;
        likeButton.src = "images/heart_blank.png"
    }
    //likeButton.style.cursor = "default";
    
}

function focusDownFun(){
    clearInterval(focusTimer);
    focusTimer = setInterval(focusActiveFun, 100);
}

function focusUpFun(){
    clearInterval(focusTimer);
    focusTimer = setInterval(focusChargeFun, 100);
}

function focusActiveFun(){
    focusButton.src = "images/focus_open.png"; 
    focusButtonBg.src = "images/focus_open.png";  
    focusSpeed = 10;
    focusChargeVal = focusChargeVal - 1;
    focusButton.style.maskImage = "linear-gradient(rgba(0, 0, 0, 0) "+(100-focusChargeVal)+"%, black "+(100-focusChargeVal)+"%)";

    if (focusChargeVal <= 0){
        focusChargeVal = 0;
        clearInterval(focusTimer);
        focusTimer = setInterval(focusChargeFun, 100);
    }

}

function focusChargeFun(){
    focusButton.src = "images/focus_closed.png"; 
    focusButtonBg.src = "images/focus_closed.png";  
    focusSpeed = 1;
    focusChargeVal = focusChargeVal + 0.1;
    focusButton.style.maskImage = "linear-gradient(rgba(0, 0, 0, 0) "+(100-focusChargeVal)+"%, black "+(100-focusChargeVal)+"%)";

    if (focusChargeVal >= 100){
        focusChargeVal = 100;
        clearInterval(focusTimer); 
    }
    
}



function changeMenu(tab){
    for (const e of ["upgrades", "perks","prestige","stats","gallery","settings"]){
        if (e == tab){ 
            document.getElementById(e+"Tab").style.display = "flex";
            document.getElementById(e+"MenuButton").style.color = "rgb(255, 255, 255)";
        }
        else{ 
            document.getElementById(e+"Tab").style.display = "none";
            document.getElementById(e+"MenuButton").style.color = "rgb(139, 235, 139)";
        }
    }
}
