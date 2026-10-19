let readText = "";
let arr = [];
let pages = [];
let pageSize = 1.0;

plusSize.addEventListener("click", () => plusSizeFun());
minusSize.addEventListener("click", () => minusSizeFun());
importButton.addEventListener("click", () => importText());

fetch("default.txt").then(response => response.text()).then(textFile => {
    readText = textFile.replace(/(?:\r\n|\r|\n)/g, '<br>')
    arr = adaptText(readText)
    createPages(arr)
} )

function adaptText(importText){

    let auxArr = []

    let box = document.createElement("div");
    box.setAttribute( "class", "test" );
    bgDiv.appendChild(box)
    let pageHeight = box.offsetHeight;


    let pageTest = document.createElement("p");
    box.appendChild(pageTest)

    let auxText = importText;
    let point = 1500

    while (auxText){

        let init = 0;

        if (auxText.substring(0,1) == ">") {init = 1;}
        while (auxText.substring(init,init+1) == "<") {init += 4}
        while (auxText.substring(init,init+1) == " ") {init++;}
        
        pageTest.innerHTML = auxText.substring(init, point);
        while (point <= auxText.length && pageTest.offsetHeight <= pageHeight ) {
            point++;
            pageTest.innerHTML = auxText.substring(init, point);		
        }
        point--;
        while (point > 0 && pageTest.offsetHeight > pageHeight ) {
            point--;	
            pageTest.innerHTML = auxText.substring(init, point);			
        }

        while (point > 0 && auxText.substring(point-1, point).toLowerCase() != auxText.substring(point-1, point).toUpperCase() ) {
            point--;	
            pageTest.innerHTML = auxText.substring(init, point);			
        }
        if (auxText.substring(point-1, point) == "<") {point--;}


        auxArr.push(auxText.substring(init, point))
        auxText = auxText.substring(point);
    }
    
    box.remove();

    return auxArr;

}

function plusSizeFun(){
    if(pageSize < 2.5){
        pageSize += 0.1;
        document.documentElement.style.setProperty("--main-size", pageSize)
    }
    resetText();
}

function minusSizeFun(){
    if(pageSize > 0.2){
        pageSize -= 0.1;
        document.documentElement.style.setProperty("--main-size", pageSize);
    }
    resetText();
}

function createPages(arrText){
    for (i in arrText){
        if (i > pages.length-1){
            let page = document.createElement("div");
            page.setAttribute( "class", "page" );
            bgDiv.appendChild(page)
            let pageText = document.createElement("p");
            page.appendChild(pageText)
            pages.push(pageText)
        }
        pages[i].innerHTML = arrText[i];
    }

    for (let i = pages.length-1; i > arrText.length-1; i--){
        pages[i].parentNode.remove()
        pages.pop()
    }
}

function resetText(){
    arr = adaptText(readText)
    createPages(arr)
}


window.onresize = function () { 
    resetText();
}


function importText(){
    let aux = document.createElement('input');
    aux.type = 'file';
    aux.accept = '.txt';
    aux.onchange = () => { 
        const reader = new FileReader
        reader.onload = () => {
            readText = reader.result.replace(/(?:\r\n|\r|\n)/g, '<br>');
            resetText();
        };
        reader.readAsText(aux.files[0], 'UTF-8')
        
    }
    aux.click();

}