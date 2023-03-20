

export default class HelloScene extends Phaser.Scene {
    constructor() {
        super('hello');
    }

    preload() {

        // load static from our public dir
        this.load.image('vite-phaser-logo', 'assets/images/vite-phaser.png');

        // load static assets from url
        this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
        this.load.image('red', 'https://labs.phaser.io/assets/particles/red.png');
    }

    create() {
        const { width, height } = this.scale;
        const centerX = width * 0.5;
        const centerY = height * 0.5;

        this.add.image(400, 300, 'sky');
        const particles = this.add.particles('red');
        const logo = this.add.image(centerX, centerY, 'vite-phaser-logo');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        emitter.startFollow(logo);
    }
}