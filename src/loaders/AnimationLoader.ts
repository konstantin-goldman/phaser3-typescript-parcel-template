import AnimationKeys from "~/constants/AnimationKeys";
import SpriteKeys from "~/constants/SpriteKeys";

class AnimationLoader {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    loadAnimations() {
        this.loadZombie()
    }

    loadZombie() {
        this.scene.anims.create({
            key: AnimationKeys.ZOMBIE,
            frames: this.scene.anims.generateFrameNames(SpriteKeys.ZOMBIE, {
                start: 0,
                end: 9,
                prefix: 'zombiewalk-',
                suffix: '.png'
            }),
            frameRate: 7,
            repeat: -1
        })
    }
}


export default AnimationLoader