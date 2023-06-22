import AnimationKeys from "~/constants/AnimationKeys";

export default class Zombie extends Phaser.GameObjects.Container
{
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene);

        const sprite = scene.add.sprite(x, y, 'zombie', 'zombiewalk-1.png')
        sprite.scale = 2
        sprite.play(AnimationKeys.ZOMBIE)
    }
}