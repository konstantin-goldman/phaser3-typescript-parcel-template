import Phaser from 'phaser'
import AnimationKeys from '~/constants/AnimationKeys'
import SceneKeys from '~/constants/SceneKeys'
import SpriteKeys from '~/constants/SpriteKeys'

export default class Preloader extends Phaser.Scene {

    constructor() {
        super(SceneKeys.PRELOADER)
    }

    preload() {
        this.loadAssets()
    }

    create() {
        this.scene.start(SceneKeys.MAIN)
    }

    private loadAssets() {
        this.load.image(SpriteKeys.SKY, 'assets/background/space3.png')
        this.load.image(SpriteKeys.LOGO, 'assets/sprites/phaser3-logo.png')
        this.load.image(SpriteKeys.RED, 'assets/particles/red.png')
        this.load.atlas(SpriteKeys.ZOMBIE, 'assets/animations/zombie-0.png', 'assets/animations/zombie-0.json')
    }
}