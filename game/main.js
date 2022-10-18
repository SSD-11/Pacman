


var Main = {
    pantallasCompletas: 0,

    start: function () {

    },

    comienzaPartida: function () {
        Pantallas.ready.transform.enabled = true;

        Pacman.bola.transform.setPosition(new Point(380, 587));
        Pacman.bola.transform.enabled = true;
        Pacman.direccion = Direcction.Left;
        Pacman.bola.transform.audioSources[AUDIOS_PACMAN.MusicaIntro].Play();

        for (var i = 0; i < Pantallas.puntos.length; i++) {
            Pantallas.puntos[i].img.transform.enabled = true;
        }
        for (var i = 0; i < Pantallas.puntosGrandes.length; i++) {
            Pantallas.puntosGrandes[i].img.transform.enabled = true;
        }

        for (var i = 0; i < Fantasmas.enemigo.length; i++) {
            Fantasmas.enemigo[i].transform.enabled = true;
        }
        Fantasmas.enemigo[0].transform.setPosition(new Point(375, 284));
        Fantasmas.enemigo[1].transform.setPosition(new Point(380, 365));
        Fantasmas.enemigo[2].transform.setPosition(new Point(370, 365));
        Fantasmas.enemigo[3].transform.setPosition(new Point(425, 365));

        setTimeout(this.activarTodo, 4500);

    },

    activarTodo: function () {

        Pantallas.ready.transform.enabled = false;
        Pacman.bola.transform.animator.Run();
        Pacman.enabled = true;
        Pacman.pararSonidos();
        Pacman.bola.transform.audioSources[AUDIOS_PACMAN.Fantasmas].Play();
        Fantasmas.fantasmasActivos = true;

    },

    pantallaCompletada: function () {

        Fantasmas.fantasmasActivos = false;
        Pacman.enabled = false;
        UIDialogoContinuar.visible(true);

    }
}