window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame; 
}

function startGame() {
    alert("Ready");
    clearScreen(); 
    addBox();
    timeStart();
}

function timeStart() {
    var seconds = 5; 
    var x = document.getElementById('clock');
    x.innerHTML = seconds + " seconds left"; 
    startTimer(seconds, x); 
}

function startTimer(seconds, x) {
    var TIMER_TICK = 1000; 
    var timer = setInterval(function() {
        seconds--;
        x.innerHTML = seconds + " seconds left"; 

        if (seconds <= 0) {
            clearInterval(timer);
            alert("Game over! Time's up.");
            clearScreen();
        } else {
            var allbox = document.querySelectorAll("#layer div");
            if (allbox.length === 0) {
                clearInterval(timer);
                alert("You win!");
                clearScreen(); 
            }
        }
    }, TIMER_TICK);
}

function addBox() {
    var numbox = parseInt(document.getElementById('numbox').value); 
    var gameLayer = document.getElementById("layer"); 
    var colorDrop = document.getElementById('color').value; 

    if (isNaN(numbox) || numbox <= 0) {
        alert("Please enter a valid number of boxes.");
        return;
    }

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div"); 
        tempbox.className = "box"; 
        tempbox.id = "box" + i; 
        tempbox.style.width = "25px"; 
        tempbox.style.height = "25px"; 
        tempbox.style.position = "absolute"; 
        tempbox.style.left = Math.random() * (500 - 25) + "px"; 
        tempbox.style.top = Math.random() * (500 - 25) + "px"; 
        tempbox.style.backgroundColor = colorDrop; 

        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        box.parentNode.removeChild(box); 
    }
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div"); 
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
