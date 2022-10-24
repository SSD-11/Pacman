var UIHead = new UI();
UIHead.x = 0;
UIHead.y = 0;

var tituloNivel = new UIText("tituloNivel", "absolute", (window.innerWidth/2) - (canvasWidth/2) + 40, 815, "150px", "25px", "SCORE" , "Verdana", 30, "yellow", "");
UIHead.add(tituloNivel);
var scorePuntos = new UIText("scoreQuedan", "absolute", (window.innerWidth/2) - (canvasWidth/2) + 160, 815, "400px", "25px", "0" , "Verdana", 30, "white", "");
UIHead.add(scorePuntos);

var tituloPantallas = new UIText("tituloNivel", "absolute", (window.innerWidth/2) - (canvasWidth/2) + 640, 815, "150px", "25px", "NIVEL" , "Verdana", 30, "cyan", "");
UIHead.add(tituloPantallas);
var scorePantallas = new UIText("scorePantallas", "absolute", (window.innerWidth/2) - (canvasWidth/2) + 740, 815, "100px", "25px", "0" , "Verdana", 30, "white", "");
UIHead.add(scorePantallas);

UIHead.start();
UIHead.visible(false);

var UIDialogoStart = new UI();
var anchoD = 500;
var alto = 500;
UIDialogoStart.x = (parseInt(window.innerWidth) / 2) - (anchoD / 2);
UIDialogoStart.y = 150;

var panelDialogBorde = new UIPanel("panelDialog", "absolute", 0,0, anchoD + "px", alto + "px", "#000D");
UIDialogoStart.add(panelDialogBorde);
var panelDialog = new UIPanel("panelDialog", "absolute", 2,2, (anchoD - 4) + "px", (alto - 4) + "px", "#00BBFF99");
UIDialogoStart.add(panelDialog);

var d_tituloSpace = new UIText("tituloSpace", "absolute", 120, 20, "250px" , "25px", "PACMAN", "Verdana", 60, "yellow", "");
UIDialogoStart.add(d_tituloSpace);

var d_tituloInfo = new UIText("tituloSpace", "absolute", 50, 380, "500px", "25px", "PULSA PARA JUGAR", "Verdana", 40, "orange", "");
UIDialogoStart.add(d_tituloInfo);

var btnJugar = new UIButton("btnAceptar", "absolute", 180, 250, "140px", "45px", "JUGAR", "center", "Verdana", 18, "", "green");
UIDialogoStart.add(btnJugar);
function onclick_btnAceptar() {
    Main.pantallasCompletas = 0;
    UIDialogoStart.visible(false);
    Main.comienzaPartida();
}

UIDialogoStart.start();
UIDialogoStart.visible(false);




var UIDialogoContinuar = new UI();
var anchoD = 500;
var alto = 500;
UIDialogoContinuar.x = (parseInt(window.innerWidth) / 2) - (anchoD / 2);
UIDialogoContinuar.y = 150;

var panelDialogBordeCont = new UIPanel("panelDialog", "absolute", 0,0, anchoD + "px", alto + "px", "#000D");
UIDialogoContinuar.add(panelDialogBordeCont);
var panelDialogCont = new UIPanel("panelDialog", "absolute", 2,2, (anchoD - 4) + "px", (alto - 4) + "px", "#FFBBFF99");
UIDialogoContinuar.add(panelDialogCont);

var d_tituloSpaceCont = new UIText("tituloSpace", "absolute", 110, 20, "250px" , "25px", "PACMAN", "Verdana", 60, "yellow", "");
UIDialogoContinuar.add(d_tituloSpaceCont);

var d_tituloInfoCont = new UIText("tituloSpace", "absolute", 40, 380, "600px", "25px", "PULSA PARA CONTINUAR", "Verdana", 32, "black", "");
UIDialogoContinuar.add(d_tituloInfoCont);
var d_tituloInfoCont2 = new UIText("tituloSpace", "absolute", 43, 383, "600px", "25px", "PULSA PARA CONTINUAR", "Verdana", 32, "white", "");
UIDialogoContinuar.add(d_tituloInfoCont2);

var btnCont = new UIButton("btnContinuar", "absolute", 180, 250, "140px", "45px", "CONTINUAR", "center", "Verdana", 18, "", "blue");
UIDialogoContinuar.add(btnCont);
function onclick_btnContinuar() {
    Main.pantallasCompletas++;
    UIDialogoContinuar.visible(false);
    Main.comienzaPartida();
}

UIDialogoContinuar.start();
UIDialogoContinuar.visible(false);

var UILoad = new UI();
var anchoD = 500;
var alto = 500;
UILoad.x = (parseInt(window.innerWidth) / 2) - (anchoD / 2);
UILoad.y = 150;

var tituloLoading = new UIText("tituloSpace", "absolute", 118, 200, "250px", "25px", "Cargando...", "Black Han Sans", 60, "yellow", "");
UILoad.add(tituloLoading);

UILoad.start();
UILoad.visible(true);