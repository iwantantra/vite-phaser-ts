import Phaser from "phaser";
import HelloScene from "./scenes/HelloScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [
        HelloScene,
    ]
};

export default new Phaser.Game(config);