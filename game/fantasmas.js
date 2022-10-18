var Fantasmas = {

    velocidadFantasmaAnim: 100,

    enemigo: [4],
    fantasmasActivos: false,
    velocidadFantasmasPersiguen: 3.6,
    velocidadFantasmasHuyen: 3.2,
    velocidadFantasmas: 3.6,
    puntosPorFantasma: 500,
    puntosPor4Fantasma: 1000,

    ojos: [4],
    start: function () {

        this.enemigo[0] = new Image("fRojo", ctx);
        this.enemigo[0].load("images/fantasma-rojo.png");
        this.enemigo[0].clip = new Rectangle(0, 0, 56, 56);
        this.enemigo[0].transform.tag = "fantasma";
        this.enemigo[0].transform.setSize(new Size(40, 40));
        this.enemigo[0].transform.setPosition(new Point(375, 284));
        this.ojos[0] = new Image("ojos0", ctx);
        this.ojos[0].load("images/ojos.png", true);
        this.ojos[0].transform.tag = "ojos";
        this.ojos[0].transform.enabled = false;
        var rigiOjos0 = new Rigibody("rigiOjos0", this.ojos[0]);
        rigiOjos0.gravity = false;
        rigiOjos0.run();
        miJerarquia.Add(this.ojos[0]);

        var fRojoAnim = new Animator("fRojoAnim1", this.enemigo[0]);
        var fRojoAnimDerecha = new Animation();
        fRojoAnimDerecha.id = "fRojoAnimDerecha";
        fRojoAnimDerecha.clip = new Rectangle(0, 0, 56, 56);
        fRojoAnimDerecha.maxFrames = 2;
        fRojoAnimDerecha.jumpFrames = 56;
        fRojoAnimDerecha.loop = true;
        fRojoAnimDerecha.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimDerecha);

        var fRojoAnimIzquierda = new Animation();
        fRojoAnimIzquierda.id = "fRojoAnimIzquierda";
        fRojoAnimIzquierda.clip = new Rectangle(0, 112, 56, 56);
        fRojoAnimIzquierda.maxFrames = 2;
        fRojoAnimIzquierda.jumpFrames = 56;
        fRojoAnimIzquierda.loop = true;
        fRojoAnimIzquierda.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimIzquierda);

        var fRojoAnimArriba = new Animation();
        fRojoAnimArriba.id = "fRojoAnimArriba";
        fRojoAnimArriba.clip = new Rectangle(0, 168, 56, 56);
        fRojoAnimArriba.maxFrames = 2;
        fRojoAnimArriba.jumpFrames = 56;
        fRojoAnimArriba.loop = true;
        fRojoAnimArriba.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimArriba);

        var fRojoAnimAbajo = new Animation();
        fRojoAnimAbajo.id = "fRojoAnimAbajo";
        fRojoAnimAbajo.clip = new Rectangle(0, 56, 56, 56);
        fRojoAnimAbajo.maxFrames = 2;
        fRojoAnimAbajo.jumpFrames = 56;
        fRojoAnimAbajo.loop = true;
        fRojoAnimAbajo.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimAbajo);

        var fRojoAnimHuidaAzul = new Animation();
        fRojoAnimHuidaAzul.id = "fRojoAnimHuidaAzul";
        fRojoAnimHuidaAzul.clip = new Rectangle(0, 224, 56, 56);
        fRojoAnimHuidaAzul.maxFrames = 2;
        fRojoAnimHuidaAzul.jumpFrames = 56;
        fRojoAnimHuidaAzul.loop = true;
        fRojoAnimHuidaAzul.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimHuidaAzul);

        var fRojoAnimHuidaBlanco = new Animation();
        fRojoAnimHuidaBlanco.id = "fRojoAnimHuidaBlanco";
        fRojoAnimHuidaBlanco.clip = new Rectangle(0, 280, 56, 56);
        fRojoAnimHuidaBlanco.maxFrames = 2;
        fRojoAnimHuidaBlanco.jumpFrames = 56;
        fRojoAnimHuidaBlanco.loop = true;
        fRojoAnimHuidaBlanco.velocityFrames = this.velocidadFantasmaAnim;
        fRojoAnim.addAnimation(fRojoAnimHuidaBlanco);

        fRojoAnim.setAnimation(2);
        fRojoAnim.Run();
        this.enemigo[0].collider = new Collider("fRojoCollider", this.enemigo[0]);
        this.enemigo[0].rigibody = new Rigibody("fRojoRigibody", this.enemigo[0]);
        this.enemigo[0].rigibody.gravity = false;
        this.enemigo[0].rigibody.run();

        miJerarquia.Add(this.enemigo[0]);

        this.enemigo[1] = new Image("fAzul", ctx);
        this.enemigo[1].load("images/fantasma-azul.png");
        this.enemigo[1].clip = new Rectangle(0, 0, 56, 56);
        this.enemigo[1].transform.tag = "fantasma";
        this.enemigo[1].transform.setSize(new Size(40, 40));
        this.enemigo[1].transform.setPosition(new Point(380, 365));
        this.ojos[1] = new Image("ojos1", ctx);
        this.ojos[1].load("images/ojos.png", true);
        this.ojos[1].transform.tag = "ojos";
        this.ojos[1].transform.enabled = false;
        var rigiOjos1 = new Rigibody("rigiOjos1", this.ojos[1]);
        rigiOjos1.gravity = false;
        rigiOjos1.run();
        miJerarquia.Add(this.ojos[1]);

        var fAzulAnim = new Animator("fAzulAnim1", this.enemigo[1]);
        var fAzulAnimDerecha = new Animation();
        fAzulAnimDerecha.id = "fAzulAnimDerecha";
        fAzulAnimDerecha.clip = new Rectangle(0, 0, 56, 56);
        fAzulAnimDerecha.maxFrames = 2;
        fAzulAnimDerecha.jumpFrames = 56;
        fAzulAnimDerecha.loop = true;
        fAzulAnimDerecha.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimDerecha);

        var fAzulAnimIzquierda = new Animation();
        fAzulAnimIzquierda.id = "fAzulAnimIzquierda";
        fAzulAnimIzquierda.clip = new Rectangle(0, 112, 56, 56);
        fAzulAnimIzquierda.maxFrames = 2;
        fAzulAnimIzquierda.jumpFrames = 56;
        fAzulAnimIzquierda.loop = true;
        fAzulAnimIzquierda.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimIzquierda);

        var fAzulAnimArriba = new Animation();
        fAzulAnimArriba.id = "fAzulAnimArriba";
        fAzulAnimArriba.clip = new Rectangle(0, 168, 56, 56);
        fAzulAnimArriba.maxFrames = 2;
        fAzulAnimArriba.jumpFrames = 56;
        fAzulAnimArriba.loop = true;
        fAzulAnimArriba.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimArriba);

        var fAzulAnimAbajo = new Animation();
        fAzulAnimAbajo.id = "fAzulAnimAbajo";
        fAzulAnimAbajo.clip = new Rectangle(0, 56, 56, 56);
        fAzulAnimAbajo.maxFrames = 2;
        fAzulAnimAbajo.jumpFrames = 56;
        fAzulAnimAbajo.loop = true;
        fAzulAnimAbajo.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimAbajo);

        var fAzulAnimHuidaAzul = new Animation();
        fAzulAnimHuidaAzul.id = "fAzulAnimHuidaAzul";
        fAzulAnimHuidaAzul.clip = new Rectangle(0, 224, 56, 56);
        fAzulAnimHuidaAzul.maxFrames = 2;
        fAzulAnimHuidaAzul.jumpFrames = 56;
        fAzulAnimHuidaAzul.loop = true;
        fAzulAnimHuidaAzul.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimHuidaAzul);

        var fAzulAnimHuidaBlanco = new Animation();
        fAzulAnimHuidaBlanco.id = "fAzulAnimHuidaBlanco";
        fAzulAnimHuidaBlanco.clip = new Rectangle(0, 280, 56, 56);
        fAzulAnimHuidaBlanco.maxFrames = 2;
        fAzulAnimHuidaBlanco.jumpFrames = 56;
        fAzulAnimHuidaBlanco.loop = true;
        fAzulAnimHuidaBlanco.velocityFrames = this.velocidadFantasmaAnim;
        fAzulAnim.addAnimation(fAzulAnimHuidaBlanco);

        fAzulAnim.setAnimation(2);
        fAzulAnim.Run();
        this.enemigo[1].collider = new Collider("fAzulCollider", this.enemigo[1]);
        this.enemigo[1].rigibody = new Rigibody("fAzulRigibody", this.enemigo[1]);
        this.enemigo[1].rigibody.gravity = false;
        this.enemigo[1].rigibody.run();

        miJerarquia.Add(this.enemigo[1]);

        this.enemigo[2] = new Image("fNaranja", ctx);
        this.enemigo[2].load("images/fantasma-Naranja.png");
        this.enemigo[2].clip = new Rectangle(0, 0, 56, 56);
        this.enemigo[2].transform.tag = "fantasma";
        this.enemigo[2].transform.setSize(new Size(40, 40));
        this.enemigo[2].transform.setPosition(new Point(370, 365));
        this.ojos[2] = new Image("ojos2", ctx);
        this.ojos[2].load("images/ojos.png", true);
        this.ojos[2].transform.tag = "ojos";
        this.ojos[2].transform.enabled = false;
        var rigiOjos2 = new Rigibody("rigiOjos2", this.ojos[2]);
        rigiOjos2.gravity = false;
        rigiOjos2.run();
        miJerarquia.Add(this.ojos[2]);

        var fNaranjaAnim = new Animator("fNaranjaAnim1", this.enemigo[2]);
        var fNaranjaAnimDerecha = new Animation();
        fNaranjaAnimDerecha.id = "fNaranjaAnimDerecha";
        fNaranjaAnimDerecha.clip = new Rectangle(0, 0, 56, 56);
        fNaranjaAnimDerecha.maxFrames = 2;
        fNaranjaAnimDerecha.jumpFrames = 56;
        fNaranjaAnimDerecha.loop = true;
        fNaranjaAnimDerecha.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimDerecha);

        var fNaranjaAnimIzquierda = new Animation();
        fNaranjaAnimIzquierda.id = "fNaranjaAnimIzquierda";
        fNaranjaAnimIzquierda.clip = new Rectangle(0, 112, 56, 56);
        fNaranjaAnimIzquierda.maxFrames = 2;
        fNaranjaAnimIzquierda.jumpFrames = 56;
        fNaranjaAnimIzquierda.loop = true;
        fNaranjaAnimIzquierda.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimIzquierda);

        var fNaranjaAnimArriba = new Animation();
        fNaranjaAnimArriba.id = "fNaranjaAnimArriba";
        fNaranjaAnimArriba.clip = new Rectangle(0, 168, 56, 56);
        fNaranjaAnimArriba.maxFrames = 2;
        fNaranjaAnimArriba.jumpFrames = 56;
        fNaranjaAnimArriba.loop = true;
        fNaranjaAnimArriba.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimArriba);

        var fNaranjaAnimAbajo = new Animation();
        fNaranjaAnimAbajo.id = "fNaranjaAnimAbajo";
        fNaranjaAnimAbajo.clip = new Rectangle(0, 56, 56, 56);
        fNaranjaAnimAbajo.maxFrames = 2;
        fNaranjaAnimAbajo.jumpFrames = 56;
        fNaranjaAnimAbajo.loop = true;
        fNaranjaAnimAbajo.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimAbajo);

        var fNaranjaAnimHuidaAzul = new Animation();
        fNaranjaAnimHuidaAzul.id = "fNaranjaAnimHuidaAzul";
        fNaranjaAnimHuidaAzul.clip = new Rectangle(0, 224, 56, 56);
        fNaranjaAnimHuidaAzul.maxFrames = 2;
        fNaranjaAnimHuidaAzul.jumpFrames = 56;
        fNaranjaAnimHuidaAzul.loop = true;
        fNaranjaAnimHuidaAzul.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimHuidaAzul);

        var fNaranjaAnimHuidaBlanco = new Animation();
        fNaranjaAnimHuidaBlanco.id = "fNaranjaAnimHuidaBlanco";
        fNaranjaAnimHuidaBlanco.clip = new Rectangle(0, 280, 56, 56);
        fNaranjaAnimHuidaBlanco.maxFrames = 2;
        fNaranjaAnimHuidaBlanco.jumpFrames = 56;
        fNaranjaAnimHuidaBlanco.loop = true;
        fNaranjaAnimHuidaBlanco.velocityFrames = this.velocidadFantasmaAnim;
        fNaranjaAnim.addAnimation(fNaranjaAnimHuidaBlanco);

        fNaranjaAnim.setAnimation(2);
        fNaranjaAnim.Run();
        this.enemigo[2].collider = new Collider("fNaranjaCollider", this.enemigo[2]);
        this.enemigo[2].rigibody = new Rigibody("fNaranjaRigibody", this.enemigo[2]);
        this.enemigo[2].rigibody.gravity = false;
        this.enemigo[2].rigibody.run();

        miJerarquia.Add(this.enemigo[2]);

        this.enemigo[3] = new Image("fRosa", ctx);
        this.enemigo[3].load("images/fantasma-Rosa.png");
        this.enemigo[3].clip = new Rectangle(0, 0, 56, 56);
        this.enemigo[3].transform.tag = "fantasma";
        this.enemigo[3].transform.setSize(new Size(40, 40));
        this.enemigo[3].transform.setPosition(new Point(425, 365));
        this.ojos[3] = new Image("ojos3", ctx);
        this.ojos[3].load("images/ojos.png", true);
        this.ojos[3].transform.tag = "ojos";
        this.ojos[3].transform.enabled = false;
        var rigiOjos3 = new Rigibody("rigiOjos3", this.ojos[3]);
        rigiOjos3.gravity = false;
        rigiOjos3.run();
        miJerarquia.Add(this.ojos[3]);

        var fRosaAnim = new Animator("fRosaAnim1", this.enemigo[3]);
        var fRosaAnimDerecha = new Animation();
        fRosaAnimDerecha.id = "fRosaAnimDerecha";
        fRosaAnimDerecha.clip = new Rectangle(0, 0, 56, 56);
        fRosaAnimDerecha.maxFrames = 2;
        fRosaAnimDerecha.jumpFrames = 56;
        fRosaAnimDerecha.loop = true;
        fRosaAnimDerecha.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimDerecha);

        var fRosaAnimIzquierda = new Animation();
        fRosaAnimIzquierda.id = "fRosaAnimIzquierda";
        fRosaAnimIzquierda.clip = new Rectangle(0, 112, 56, 56);
        fRosaAnimIzquierda.maxFrames = 2;
        fRosaAnimIzquierda.jumpFrames = 56;
        fRosaAnimIzquierda.loop = true;
        fRosaAnimIzquierda.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimIzquierda);

        var fRosaAnimArriba = new Animation();
        fRosaAnimArriba.id = "fRosaAnimArriba";
        fRosaAnimArriba.clip = new Rectangle(0, 168, 56, 56);
        fRosaAnimArriba.maxFrames = 2;
        fRosaAnimArriba.jumpFrames = 56;
        fRosaAnimArriba.loop = true;
        fRosaAnimArriba.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimArriba);

        var fRosaAnimAbajo = new Animation();
        fRosaAnimAbajo.id = "fRosaAnimAbajo";
        fRosaAnimAbajo.clip = new Rectangle(0, 56, 56, 56);
        fRosaAnimAbajo.maxFrames = 2;
        fRosaAnimAbajo.jumpFrames = 56;
        fRosaAnimAbajo.loop = true;
        fRosaAnimAbajo.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimAbajo);

        var fRosaAnimHuidaAzul = new Animation();
        fRosaAnimHuidaAzul.id = "fRosaAnimHuidaAzul";
        fRosaAnimHuidaAzul.clip = new Rectangle(0, 224, 56, 56);
        fRosaAnimHuidaAzul.maxFrames = 2;
        fRosaAnimHuidaAzul.jumpFrames = 56;
        fRosaAnimHuidaAzul.loop = true;
        fRosaAnimHuidaAzul.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimHuidaAzul);

        var fRosaAnimHuidaBlanco = new Animation();
        fRosaAnimHuidaBlanco.id = "fRosaAnimHuidaBlanco";
        fRosaAnimHuidaBlanco.clip = new Rectangle(0, 280, 56, 56);
        fRosaAnimHuidaBlanco.maxFrames = 2;
        fRosaAnimHuidaBlanco.jumpFrames = 56;
        fRosaAnimHuidaBlanco.loop = true;
        fRosaAnimHuidaBlanco.velocityFrames = this.velocidadFantasmaAnim;
        fRosaAnim.addAnimation(fRosaAnimHuidaBlanco);

        fRosaAnim.setAnimation(2);
        fRosaAnim.Run();
        this.enemigo[3].collider = new Collider("fRosaCollider", this.enemigo[3]);
        this.enemigo[3].rigibody = new Rigibody("fRosaRigibody", this.enemigo[3]);
        this.enemigo[3].rigibody.gravity = false;
        this.enemigo[3].rigibody.run();

        miJerarquia.Add(this.enemigo[3]);

        this.timerOjos = requestAnimationFrame(this.moverOjos);
        this.timerFantasmas = setTimeout(this.moverFantasmas.bind(this), this.resolutionsTimerFantasmas);

    },

    timerFantasmas: null,
    resolutionsTimerFantasmas: 1,
    direccionRojo: Direcction.Left,
    moviendoRojo: new Point(0, 0),
    direccionFantasma: [Direcction.Left, Direcction.Left, Direcction.Left, Direcction.Left],
    moviendoFantasma: [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
    fantasmaFuera: [true, false, false, false],

    moverFantasmas: function () {
        if (Fantasmas.fantasmasActivos) {

            for (var i = 0; i < Fantasmas.enemigo.length; i++) {

                Fantasmas.enemigo[i].x = Fantasmas.enemigo[i].transform.position.x;
                Fantasmas.enemigo[i].y = Fantasmas.enemigo[i].transform.position.y;

                Fantasmas.enemigo[i].transform.rigibody.move(Fantasmas.velocidadFantasmas, Fantasmas.direccionFantasma[i]);

                if (Fantasmas.enemigo[i].transform.position.x <= 0) {
                    Fantasmas.enemigo[i].transform.setPosition(new Point(800, Fantasmas.enemigo[i].transform.position.y));
                }
                if (Fantasmas.enemigo[i].transform.position.x >= 820) {
                    Fantasmas.enemigo[i].transform.setPosition(new Point(0, Fantasmas.enemigo[i].transform.position.y));
                }

                if (Fantasmas.enemigo[i].x === Fantasmas.enemigo[i].transform.position.x &&
                    Fantasmas.enemigo[i].y === Fantasmas.enemigo[i].transform.position.y) {
                    var r = aleatorio(0, 4);
                    if (r === 0) Fantasmas.direccionFantasma[i] = Direcction.Left;
                    if (r === 1) Fantasmas.direccionFantasma[i] = Direcction.Up;
                    if (r === 2) Fantasmas.direccionFantasma[i] = Direcction.Down;
                    if (r === 3) Fantasmas.direccionFantasma[i] = Direcction.Right;
                    if (!Fantasmas.isModoHuida) {
                        Fantasmas.enemigo[i].transform.animator.setAnimation(Fantasmas.direccionFantasma[i]);
                    }

                }

                if (!Fantasmas.fantasmaFuera[i] && Fantasmas.enemigo[i].transform.position.x > 375 &&
                    Fantasmas.enemigo[i].transform.position.x < 435 && Fantasmas.enemigo[i].transform.position.y < 360) {
                    Fantasmas.direccionFantasma[i] = Direcction.Up;
                    Fantasmas.fantasmaFuera[i] = true;
                }

                if (Fantasmas.fantasmaFuera[i] && Fantasmas.enemigo[i].transform.position.x > 335 &&
                    Fantasmas.enemigo[i].transform.position.x < 480 && Fantasmas.enemigo[i].transform.position.y > 360) {
                    Fantasmas.fantasmaFuera[i] = false;

                }

            }


        }
        Fantasmas.timerFantasmas = requestAnimationFrame(Fantasmas.moverFantasmas);
    },

    isModoHuida: false,
    timerModoHuida: null,
    timeParpadeo: 180,
    timeDuracionModoHuida: 6000,
    fantasmasComidos: 0,
    fantasmasMuertos: [false, false, false, false],

    activarModoHuida: function () {
        if (this.isModoHuida) return;
        this.isModoHuida = true;
        Fantasmas.fantasmasComidos = 0;
        Fantasmas.velocidadFantasmas = Fantasmas.velocidadFantasmasHuyen;
        for (var i = 0; i < Fantasmas.fantasmasMuertos.length; i++) {
            Fantasmas.fantasmasMuertos[i] = false;
        }
        Pacman.pararSonidos();
        Pacman.bola.transform.audioSources[AUDIOS_PACMAN.FantasmasHuyen].Play();
        this.timerModoHuida = setTimeout(this.isModoHuida, 1);
        clearTimeout(t);
        var t = setTimeout(this.salirModoHuida, this.timeDuracionModoHuida);
    },

    salirModoHuida: function () {
        Pacman.pararSonidos();
        Pacman.bola.transform.audioSources[AUDIOS_PACMAN.Fantasmas].Play();
        clearTimeout(Fantasmas.timerModoHuida);
        Fantasmas.isModoHuida = false;
        Fantasmas.velocidadFantasmas = Fantasmas.velocidadFantasmasPersiguen;
    },

    modoHuida: function () {
        for (var i = 0; i < Fantasmas.enemigo.length; i++) {
            if (!Fantasmas.fantasmasMuertos[i]) {
                if (Fantasmas.enemigo[i].transform.animator.currentAnimation === 4) {
                    Fantasmas.enemigo[i].transform.animator.setAnimation(5);
                } else {
                    Fantasmas.enemigo[i].transform.animator.setAnimation(4);
                }
            } else {
                Fantasmas.enemigo[i].transform.animator.setAnimation(0);
            }
        }
        Fantasmas.timerModoHuida = setTimeout(Fantasmas.modoHuida.bind(this), Fantasmas.timeParpadeo);
    },

    timerOjos: null,
    moviendoOjos: [false, false, false, false],
    destinoOjos: new Point(400, 370),
    moverOjos: function () {
        for (var i = 0; i < Fantasmas.moviendoOjos.length; i++) {

            if (Fantasmas.moviendoOjos[i]) {
                var dist = Fantasmas.ojos[i].transform.rigibody.moveTo(4, Fantasmas.destinoOjos);
                if (dist <= 1) {
                    Fantasmas.ojos[i].transform.enabled = false;
                    Fantasmas.moviendoOjos[i] = false;
                    Fantasmas.enemigo[i].transform.setPosition(new Point(Fantasmas.destinoOjos.x, Fantasmas.destinoOjos.y));
                    Fantasmas.enemigo[i].transform.enabled = true;
                }
            }
        }
        Fantasmas.timerOjos = requestAnimationFrame(Fantasmas.moverOjos);
    }


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("onRigibodyColliderEnter", function (e) {

    if (e.sender.obj.transform.tag == "pacman" && e.collider.transform.tag == "fantasma") {
        if (!e.collider.obj.transform.enabled) return;
        if (Fantasmas.isModoHuida) {

            e.collider.obj.transform.enabled = false;
            var ind = 0;
            switch (e.collider.obj.transform.id) {
                case "fRojo":
                    ind = 0;
                    break;
                case "fAzul":
                    ind = 1;
                    break;
                case "fNaranja":
                    ind = 2;
                    break;
                case "fRosa":
                    ind = 3;
                    break;
            }
            Fantasmas.ojos[ind].transform.setPosition(new Point(e.collider.obj.transform.position.x, e.collider.obj.transform.position.y));
            Fantasmas.ojos[ind].transform.enabled = true;
            Fantasmas.moviendoOjos[ind] = true;
            Fantasmas.fantasmasMuertos[ind] = true;
            Pacman.bola.transform.audioSources[AUDIOS_PACMAN.ComeFantasma].Play();

            var texto = new Text("Puntuacion", ctx);
            texto.text = Fantasmas.puntosPorFantasma;
            texto.foreColor = "orange";
            texto.fontSize = 18;
            var posTxt = new Point(e.collider.obj.transform.position.x, e.collider.obj.transform.position.y);
            texto.transform.setPosition(posTxt);
            miJerarquia.Add(texto);
            Destroy(texto, 2);
            Pacman.score += Fantasmas.puntosPorFantasma;

        } else {

            e.collider.obj.transform.enabled = false;
            Fantasmas.fantasmasActivos = false;
            Pacman.enabled = false;
            Pacman.animator.setAnimation(4);
            Pacman.pararSonidos();
            Pacman.bola.transform.audioSources[AUDIOS_PACMAN.Muerte].Play();

        }
    }

}, false);