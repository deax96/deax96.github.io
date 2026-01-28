let nameStr = nameBox.value;
let nameColor = nameColorPick.value;
let lastMessage = null;

scrollBottom();

typeBox.addEventListener("keypress", e => {
    if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault();
        if(checkName() || checkTime()){ sendName(); }
        lastMessage = Date.now();
        sendMessage();
    }
});

function checkName(){
    if (nameStr == nameBox.value && nameColor == nameColorPick.value){ return false; }
    nameStr = nameBox.value;
    nameColor = nameColorPick.value;
    return true;
    
}

function checkTime(){
    if (lastMessage == null || (Date.now() - lastMessage) / 1000 > 10){ return true; }
    return false;
}

function sendName(){
    let newMessage = document.createElement("b");
    newMessage.setAttribute( "class", "name" );
    newMessage.innerHTML = nameStr;
    newMessage.style.color = nameColor;
    messageScreen.appendChild(newMessage);

    scrollBottom();
}

function sendMessage(){
    let messageStr = typeBox.value;
    typeBox.value = "";
    let newMessage = document.createElement("p");
    newMessage.setAttribute( "class", "message" );
    newMessage.innerHTML = messageStr;
    messageScreen.appendChild(newMessage);
    

    scrollBottom();
}

function scrollBottom(){
    messageScreen.scrollTop = messageScreen.scrollHeight;
}