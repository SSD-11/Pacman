var Pantallas = {

    ready: {},

    puntos: [],
    puntosGrandes: [],
    posicionPuntos: new Point(72, 34),
    colliders: [],

    start: function () {

        this.ready = new Image("ready", ctx);
        this.ready.load("images/ready.png", true);
        this.ready.transform.setPosition(new Point(315, 437));
        miJerarquia.Add(this.ready);

        for (var i = 0; i < 26; i++) {
            for (var x = 0; x < 29; x++) {
                if (casillasPuntos[x][i] === 1) {
                    var punto = new Image("punto" + i, ctx);
                    punto.load("images/punto.png");
                    punto.transform.tag = "punto";
                    punto.transform.name = i + "_" + x;
                    punto.clip = new Rectangle(0, 0, 9, 8);
                    punto.transform.setSize(new Size(4, 4));
                    punto.transform.setPosition(new Point(this.posicionPuntos.x + (i * 26), this.posicionPuntos.y + (x * 26)));
                    punto.punto = {value: 10, img: punto};
                    this.puntos.push(punto.punto);
                    miJerarquia.Add(punto);

                    var wakaWaka = new AudioSource("sonidoWakaWaka", "audios/come.mp3", punto);
                    wakaWaka.spacial = false;
                    wakaWaka.volume = 0.3;
                    wakaWaka.onAwaike = false;
                    wakaWaka.loop = false;
                    wakaWaka.load();

                    new Collider("puntoCollider_" + i + "_" + x, punto);
                }

                if (casillasPuntos[x][i] === 2) {
                    var punto = new Image("punto" + i, ctx);
                    punto.load("images/punto-grande.png", true);
                    punto.transform.tag = "puntoGrande";
                    punto.transform.setPosition(new Point(this.posicionPuntos.x + (i * 26) - 8, this.posicionPuntos.y + (x * 26) - 8));
                    punto.punto = {value: 50, img: punto};
                    this.puntos.push(punto.punto);
                    miJerarquia.Add(punto);

                    var wakaWaka = new AudioSource("sonidowakaWaka", "audios/come.mp3", punto);
                    wakaWaka.spacial = false;
                    wakaWaka.volume = 0.3;
                    wakaWaka.onAwaike = false;
                    wakaWaka.loop = false;
                    wakaWaka.load();

                    new Collider("puntoGrandeCollider_" + i + "_" + x, punto);
                }
            }
        }
        var index = 0
        var colliders = [1000];

        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p1.png", true);
        colliders[index].transform.setPosition(new Point(307, 630));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p2.png", true);
        colliders[index].transform.setPosition(new Point(384, 658));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p1.png", true);
        colliders[index].transform.setPosition(new Point(307, 165));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p2.png", true);
        colliders[index].transform.setPosition(new Point(384, 196));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p1.png", true);
        colliders[index].transform.setPosition(new Point(307, 473));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p2.png", true);
        colliders[index].transform.setPosition(new Point(384, 505));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p3.png", true);
        colliders[index].transform.setPosition(new Point(229, 550));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p3.png", true);
        colliders[index].transform.setPosition(new Point(462, 550));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p4.png", true);
        colliders[index].transform.setPosition(new Point(99, 705));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p5.png", true);
        colliders[index].transform.setPosition(new Point(229, 630));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p4b.png", true);
        colliders[index].transform.setPosition(new Point(462, 705));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p5b.png", true);
        colliders[index].transform.setPosition(new Point(538, 630));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p6.png", true);
        colliders[index].transform.setPosition(new Point(99, 550));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p7.png", true);
        colliders[index].transform.setPosition(new Point(151, 582));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p8.png", true);
        colliders[index].transform.setPosition(new Point(617, 550));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p7.png", true);
        colliders[index].transform.setPosition(new Point(617, 582));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p9.png", true);
        colliders[index].transform.setPosition(new Point(229, 396));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p9.png", true);
        colliders[index].transform.setPosition(new Point(539, 396));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p10.png", true);
        colliders[index].transform.setPosition(new Point(307, 321));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p11.png", true);
        colliders[index].transform.setPosition(new Point(474, 321));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p12.png", true);
        colliders[index].transform.setPosition(new Point(326, 410));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p13.png", true);
        colliders[index].transform.setPosition(new Point(326, 321));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p14.png", true);
        colliders[index].transform.setPosition(new Point(432, 321));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p15.png", true);
        colliders[index].transform.setPosition(new Point(229, 165));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p16.png", true);
        colliders[index].transform.setPosition(new Point(261, 242));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p17.png", true);
        colliders[index].transform.setPosition(new Point(538, 165));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p18.png", true);
        colliders[index].transform.setPosition(new Point(462, 242));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p19.png", true);
        colliders[index].transform.setPosition(new Point(100, 165));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p19.png", true);
        colliders[index].transform.setPosition(new Point(617, 165));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p20.png", true);
        colliders[index].transform.setPosition(new Point(100, 61));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p21.png", true);
        colliders[index].transform.setPosition(new Point(229, 61));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p21.png", true);
        colliders[index].transform.setPosition(new Point(462, 61));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p20.png", true);
        colliders[index].transform.setPosition(new Point(617, 61));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);


        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p22.png", true);
        colliders[index].transform.setPosition(new Point(36, 0));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p23.png", true);
        colliders[index].transform.setPosition(new Point(746, 0));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p24.png", true);
        colliders[index].transform.setPosition(new Point(56, 0));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p25.png", true);
        colliders[index].transform.setPosition(new Point(53, 783));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p26.png", true);
        colliders[index].transform.setPosition(new Point(36, 242));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p26.png", true);
        colliders[index].transform.setPosition(new Point(36, 396));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p27.png", true);
        colliders[index].transform.setPosition(new Point(617, 242));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p27.png", true);
        colliders[index].transform.setPosition(new Point(617, 396));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p28.png", true);
        colliders[index].transform.setPosition(new Point(53, 628));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p28b.png", true);
        colliders[index].transform.setPosition(new Point(695, 628));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p29.png", true);
        colliders[index].transform.setPosition(new Point(35, 489));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p30.png", true);
        colliders[index].transform.setPosition(new Point(746, 487));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/p31.png", true);
        colliders[index].transform.setPosition(new Point(384, 15));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        new Collider("pCollider" + index, colliders[index]);
        miJerarquia.Add(colliders[index]);

        index++;
        colliders[index] = new Image("p" + index, ctx);
        colliders[index].load("images/linea.png", true);
        colliders[index].transform.setPosition(new Point(367, 327));
        colliders[index].transform.bodyRectGross = 3;
        colliders[index].transform.resolutionRect = 2;
        colliders[index].transform.run();
        miJerarquia.Add(colliders[index]);


    },

    quedanPuntos: function () {
        for (var i = 0; i < this.puntos.length; i++) {
            if (this.puntos[i].img.transform.enabled) {
                return true;
            }
        }
        for (var i = 0; i < this.puntosGrandes.length; i++) {
            if (this.puntosGrandes[i].img.transform.enabled) {
                return true;
            }
        }
        return false;
    },

};


var casillasPuntos = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [2, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


document.addEventListener("onColliderEnter", function (e) {

    if (e.sender.obj.transform.tag === "pacman" && e.collider.obj.transform.tag === "punto") {
        e.collider.obj.transform.enabled = false;
        e.collider.obj.transform.audioSources[0].Play();
        Pacman.score += e.collider.obj.punto.value;
    }

    if (e.sender.obj.transform.tag === "pacman" && e.collider.obj.transform.tag === "puntoGrande") {

        if (Fantasmas.isModoHuida) return;

        e.collider.obj.transform.enabled = false;
        Pacman.score += e.collider.obj.punto.value;
        Fantasmas.activarModoHuida();

    }


}, false);




