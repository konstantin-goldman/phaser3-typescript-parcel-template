import Phaser from 'phaser'
import Zombie from '~/characters/zombie'
import AnimationKeys from '~/constants/AnimationKeys'
import AnimationLoader from '~/loaders/AnimationLoader'

export default class MainScene extends Phaser.Scene
{
	constructor()
	{
		super('main')
	}

	preload()
    {
        this.loadAssets()
    }

    create()
    {
        // this.add.image(400, 300, 'sky')


        const kon = new Zombie(this, 300, 300)
        const kon2 = new Zombie(this, 400, 400)

        // const particles = this.add.particles('red')

        // const emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // })

        // const logo = this.physics.add.image(400, 100, 'logo')

        // logo.setVelocity(100, 200)
        // logo.setBounce(1, 1)
        // logo.setCollideWorldBounds(true)

        // emitter.startFollow(logo)
    }

    update() {
        // new Zombie(this, Math.random() * 500, Math.random() * 500)
    }

    private loadAssets() {
        const loader = new AnimationLoader(this)
        loader.loadAnimations()
    }
}
