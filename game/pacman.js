var AUDIOS_PACMAN = {
    Fantasmas: 0,
    Muerte: 1,
    FantasmasHuyen: 2,
    ComeFantasma: 3,
    ComeALos4: 4,
    MusicaIntro: 5
}

var Pacman = {

    bola: {},
    direccion: -1,
    velocidadPacmanAnim: 30,
    velocidadPacman: 3.5,
    velocidadPacmanRapido: 3.5,
    velocidadPacmanLento: 2,
    rigibody: {},
    collider: {},
    animator: {},
    enabled: false,
    score: 0,

    start: function () {

        this.bola = new Image("pacman", ctx);
        this.bola.load("images/pacman.png")
        this.bola.transform.tag = "pacman";
        this.bola.clip = new Rectangle(0, 0, 52, 52);
        this.bola.transform.setSize(new Size(44, 44));
        this.bola.transform.setPosition(new Point(380, 586));
        this.bola.transform.bodyRectGross = 3;
        this.bola.transform.resolutionRect = 2;
        this.bola.transform.marginLeft = 1;
        this.bola.transform.marginRight = 1;
        this.bola.transform.marginUp = 1;
        this.bola.transform.marginDown = 1;

        this.animator = new Animator("PacmanAnim1", this.bola);
        var pacmanDerecha = new Animation();
        pacmanDerecha.id = "pacmanDerecha";
        pacmanDerecha.clip = new Rectangle(0,0,52,52);
        pacmanDerecha.maxFrames = 4;
        pacmanDerecha.jumpFrames = 52;
        pacmanDerecha.loop = true;
        pacmanDerecha.velocityFrames = this.velocidadPacmanAnim;
        this.animator.addAnimation(pacmanDerecha);


        var pacmanIzquierda = new Animation();
        pacmanIzquierda.id = "pacmanIzquierda";
        pacmanIzquierda.clip = new Rectangle(0,52,52,52);
        pacmanIzquierda.maxFrames = 4;
        pacmanIzquierda.jumpFrames = 52;
        pacmanIzquierda.loop = true;
        pacmanIzquierda.velocityFrames = this.velocidadPacmanAnim;
        this.animator.addAnimation(pacmanIzquierda);

        var pacmanArriba = new Animation();
        pacmanArriba.id = "pacmanArriba";
        pacmanArriba.clip = new Rectangle(0,104,52,52);
        pacmanArriba.maxFrames = 4;
        pacmanArriba.jumpFrames = 52;
        pacmanArriba.loop = true;
        pacmanArriba.velocityFrames = this.velocidadPacmanAnim;
        this.animator.addAnimation(pacmanArriba);

        var pacmanAbajo = new Animation();
        pacmanAbajo.id = "pacmanAbajo";
        pacmanAbajo.clip = new Rectangle(0,156,52,52);
        pacmanAbajo.maxFrames = 4;
        pacmanAbajo.jumpFrames = 52;
        pacmanAbajo.loop = true;
        pacmanAbajo.velocityFrames = this.velocidadPacmanAnim;
        this.animator.addAnimation(pacmanAbajo);

        var pacmanMuere = new Animation();
        pacmanMuere.id = "pacmanMuere";
        pacmanMuere.clip = new Rectangle(0,208,60,52);
        pacmanMuere.maxFrames = 12;
        pacmanMuere.jumpFrames = 60;
        pacmanMuere.loop = false;
        pacmanMuere.velocityFrames = this.velocidadPacmanAnim;
        this.animator.addAnimation(pacmanMuere)

        this.animator.setAnimation(Direcction.Left);

        this.collider = new Collider("pacmanCollider", this.bola);
        this.rigibody = new Rigibody("rigiPacman", this.bola);
        this.rigibody.gravity = false;
        this.rigibody.run();

        miJerarquia.Add(this.bola)

        var sonidoFantasmas1 = new AudioSource("sonidoFantasmas1", "audios/fantasmas.mp3", this.bola);
        sonidoFantasmas1.spacial = false;
        sonidoFantasmas1.volume = 0.1;
        sonidoFantasmas1.onAwaike = false;
        sonidoFantasmas1.loop = true;
        sonidoFantasmas1.load();

        var sonidoMuerto = new AudioSource("sonidoMuerto", "audios/muere.mp3", this.bola);
        sonidoMuerto.spacial = false;
        sonidoMuerto.volume = 0.2;
        sonidoMuerto.onAwaike = false;
        sonidoMuerto.loop = false;
        sonidoMuerto.load();

        var sonidoFantasmasHuyen = new AudioSource("sonidoFantasmasHuyen", "audios/fantasmasHuyen.mp3", this.bola);
        sonidoFantasmasHuyen.spacial = false;
        sonidoFantasmasHuyen.volume = 0.3;
        sonidoFantasmasHuyen.onAwaike = false;
        sonidoFantasmasHuyen.loop = true;
        sonidoFantasmasHuyen.load();

        var sonidoComeFantasma = new AudioSource("sonidoComeFantasma", "audios/comeFantasma.mp3", this.bola);
        sonidoComeFantasma.spacial = false;
        sonidoComeFantasma.volume = 0.3;
        sonidoComeFantasma.onAwaike = false;
        sonidoComeFantasma.loop = false;
        sonidoComeFantasma.load();

        var sonidoCome4Fantasma = new AudioSource("sonidoCome4Fantasma", "audios/comeALosCuatro.mp3", this.bola);
        sonidoCome4Fantasma.spacial = false;
        sonidoCome4Fantasma.volume = 0.3;
        sonidoCome4Fantasma.onAwaike = false;
        sonidoCome4Fantasma.loop = false;
        sonidoCome4Fantasma.load();

        var sonidoStart = new AudioSource("sonidoStart", "audios/start.mp3", this.bola);
        sonidoStart.spacial = false;
        sonidoStart.volume = 0.3;
        sonidoStart.onAwaike = false;
        sonidoStart.loop = false;
        sonidoStart.load();

        this.move();
    },

    timerPacman: null,
    pulsaTecha: false,
    move: function () {
        if (Pacman.enabled) {

            if (!Pantallas.quedanPuntos()) {
                Main.pantallaCompletada();
                return;
            }

            if (Keyboard.keys["arrowLeft"]) {
                if (!Pacman.rigibody.blockXLeft && !Pacman.pulsaTecha) {
                    Pacman.pulsaTecha = true;
                    Pacman.direccion = Direcction.Left;
                    Pacman.animator.setAnimation(Direcction.Left);
                }
            }

            if (Keyboard.keys["arrowRight"]) {
                if (!Pacman.rigibody.blockXRight && !Pacman.pulsaTecha) {
                    Pacman.pulsaTecha = true;
                    Pacman.direccion = Direcction.Right;
                    Pacman.animator.setAnimation(Direcction.Right);
                }
            }

            if (Keyboard.keys["arrowUp"]) {
                if (!Pacman.rigibody.blockYUp && !Pacman.pulsaTecha) {
                    Pacman.pulsaTecha = true;
                    Pacman.direccion = Direcction.Up;
                    Pacman.animator.setAnimation(Direcction.Up);
                }
            }

            if (Keyboard.keys["arrowDown"]) {
                if (!Pacman.rigibody.blockYDown && !Pacman.pulsaTecha) {
                    Pacman.pulsaTecha = true;
                    Pacman.direccion = Direcction.Down;
                    Pacman.animator.setAnimation(Direcction.Down);
                }
            }

            if (!Keyboard.keys["arrowLeft"] && !Keyboard.keys["arrowRight"] && !Keyboard.keys["arrowUp"] && !Keyboard.keys["arrowDown"]){
                Pacman.pulsaTecha = false;
            }

            Pacman.rigibody.move(Pacman.velocidadPacman,Pacman.direccion);

            if (Pacman.bola.transform.position.x <= 0){
                Pacman.bola.transform.setPosition(new Point(800, Pacman.bola.transform.position.y));
            }

            if (Pacman.bola.transform.position.x >= 820){
                Pacman.bola.transform.setPosition(new Point(0, Pacman.bola.transform.position.y));
            }

        }
        Pacman.timerPacman = requestAnimationFrame(Pacman.move);
    },

    pararSonidos: function () {

        for (var i = 0; i < this.bola.transform.audioSources.length;i++){
            this.bola.transform.audioSources[i].Stop();
        }
    }

}

document.addEventListener("onAnimationTerminated", function (e) {

    if (e.sender.obj.transform.tag==="pacman" && e.animation.id==="pacmanMuere"){
        Pacman.bola.transform.enabled = false;
        UIDialogoStart.visible(true);
    }

}, false);
