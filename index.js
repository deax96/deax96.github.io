let cmd = ""
let helpList = ["'help' : provides a list of available commands", "'apps' : provides a list of available apps", "'run dopamine' : opens app dopamine generator 0.8.1", "'run chatself' : opens app chatself 0.1"]
let appList = [["dopamine generator 0.8.1", "dopamine-generator/dopamine-generator.html", "An incremental game I'm currently working on"], 
                ["chatself 0.1", "chatself/chatself.html", "A chat/journal application"]]
let cursorBar = ""

setInterval(cursorTimer, 600);

document.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        applyCommand();
        cmd = "";
    }
    else{ cmd += e.key }

    cursorBar = "|"
    updatePrompt();
});

document.addEventListener("keydown", e => {
    if (e.key != "Backspace" ) { return; }
    cmd = cmd.substring(0, cmd.length - 1);
    updatePrompt();
});

function applyCommand(){
    let newEntry = document.createElement("p");
    newEntry.innerHTML = "> " + cmd;
    document.body.insertBefore(newEntry, promptText);
    if (cmd == "help"){
        help();
    }
    else if (cmd == "apps"){
        apps();
    }
    else if (cmd.startsWith("run") ){
        run();
    }
    else{
        newEntry = document.createElement("p");
        newEntry.innerHTML = "Command not found, please type 'help' to get a list of available commands";
        document.body.insertBefore(newEntry, promptText);
    }

    newEntry = document.createElement("br");
    document.body.insertBefore(newEntry, promptText);
    window.scrollTo(0, document.body.scrollHeight);
    return
}

function help(){
    for (let i in helpList){
        let newEntry = document.createElement("p");
        newEntry.innerHTML = helpList[i];
        document.body.insertBefore(newEntry, promptText);
    }
    
}

function apps(){
    for (let i in appList){
        let newEntry = document.createElement("p");
        

        let newLink = document.createElement("a");
        newLink.innerHTML = appList[i][0];
        newLink.href = appList[i][1]; 

        newEntry.appendChild(newLink);
        newEntry.insertAdjacentHTML('beforeend', "  "+appList[i][2]);
        document.body.insertBefore(newEntry, promptText);
    }
    
}

function run(){
    let thisApp = cmd.replace("run ", "")
    if (thisApp == "dopamine"){ window.open("dopamine-generator/dopamine-generator.html","_self"); }
    else if (thisApp == "chatself"){ window.open("chatself/chatself.html","_self"); }
    else{
        newEntry = document.createElement("p");
        newEntry.innerHTML = "App not found, please type 'help' to get a list of available commands";
        document.body.insertBefore(newEntry, promptText);
    }
}

function cursorTimer(){
    if (cursorBar == ""){ cursorBar = "|"; }
    else { cursorBar = ""; }
    updatePrompt();
}

function updatePrompt(){
    promptText.innerHTML = "> " + cmd + cursorBar;
}
