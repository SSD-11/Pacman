const loop = {
    handle: CreateHandle(),
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function (registroTemporal) {
        loop.idEjecucion = window.requestAnimationFrame(loop.iterar);
        loop.update(registroTemporal);
        loop.play();
        if (registroTemporal - loop.ultimoRegistro > 999) {
            loop.ultimoRegistro = registroTemporal;
            console.log(loop.fps);
            loop.aps = 0;
            loop.fps = 0;
        }
    },

    update: function () {
        loop.aps++;
    },

    play: function () {
        loop.fps++;
        borrarCanvas();
        miJerarquia.paint()
        scorePuntos.inputText(Pacman.score);
        scorePantallas.inputText(Main.pantallasCompletas);


    }

};


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
Gizmos.ctx = ctx;
Gizmos.enabled = true;
var margen = 10;
var canvasTop = 20;
var canvasLeft = (window.innerWidth / 2);
var canvasWidth = 800;
var canvasHeight = 800;
canvas.style.border = "0";


function borrarCanvas() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

function ResizeWindow() {
    canvas.style.top = canvasTop + "px";
    canvasLeft = (window.innerWidth / 2) - (canvasWidth / 2);
    canvas.style.left = canvasLeft + "px";
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
}

Concurrent.Thread.create(InitTimer);
Keyboard.load();
var miJerarquia = new Hierarchy("h1");


window.addEventListener("load", function (e) {
    ResizeWindow();
    //audioCtx = new AudioContext();
    Fantasmas.start();
    Pantallas.start();
    Pacman.start();
    run();
});

var recargas = 0;
var timeRun;

function run() {
    recargas++;

    var colliders = true;
    for (var i = 0; i < Pantallas.colliders.length; i++) {
        if (!Pantallas.colliders[i].isLoaded) {
            colliders = false;
            break;
        }
    }

    var puntos = true;
    for (var i = 0; i < Pantallas.puntos.length; i++) {
        if (!Pantallas.puntos[i].img.isLoaded || !Pantallas.puntos[i].img.transform.audioSources[0].isLoaded) {
            puntos = false;
            break;
        }
    }

    var puntosGrandes = true;
    for (var i = 0; i < Pantallas.puntosGrandes.length; i++) {
        if (!Pantallas.puntosGrandes[i].img.isLoaded || !Pantallas.puntosGrandes[i].img.transform.audioSources[0].isLoaded) {
            puntosGrandes = false;
            break;
        }
    }

    if (
        colliders &&
        puntos &&
        puntosGrandes &&
        Pantallas.ready.isLoaded &&
        Fantasmas.enemigo[0].isLoaded &&
        Fantasmas.enemigo[1].isLoaded &&
        Fantasmas.enemigo[2].isLoaded &&
        Fantasmas.enemigo[3].isLoaded &&
        Fantasmas.ojos[0].isLoaded &&
        Fantasmas.ojos[1].isLoaded &&
        Fantasmas.ojos[2].isLoaded &&
        Fantasmas.ojos[3].isLoaded &&
        Pacman.bola.transform.audioSources[0].isLoaded &&
        Pacman.bola.transform.audioSources[1].isLoaded &&
        Pacman.bola.transform.audioSources[2].isLoaded &&
        Pacman.bola.transform.audioSources[3].isLoaded &&
        Pacman.bola.transform.audioSources[4].isLoaded &&
        Pacman.bola.transform.audioSources[5].isLoaded &&
        Pacman.bola.isLoaded
    ) {
        clearTimeout(timeRun);
        console.log("Recargas del bucle run(): " + recargas);
        console.log("Handles total: " + FirtsHandle);
        console.log("Game Run")
        UILoad.visible(false);
        UIDialogoStart.visible(true);
        UIHead.visible(true);
        loop.iterar();
        return;
    }
    timeRun = setTimeout(run, 100);
}

window.addEventListener("resize", function (e) {
    ResizeWindow();
});

document.addEventListener("onImageLoaded", function (e) {

}, false);




