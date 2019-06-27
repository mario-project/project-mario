var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{ 
    this.load.image('bckgrd',"#666666")
    this.load.image('platform1','../asset/maps/map1-1/map-1-platform-part-1.png')
    this.load.image('platform2','../asset/maps/map1-1/map-1-platform-part-2.png')
    this.load.image('platform3','../asset/maps/map1-1/map-1-platform-part-3.png')
    this.load.image('platform4','../asset/maps/map1-1/map-1-platform-part-4.png')
    this.load.image('platform5','../asset/maps/map1-1/map-1-platform-part-5.png')
    this.load.image('platform6','../asset/maps/map1-1/map-1-platform-part-6.png')
    this.load.spritesheet('frog-mario','../asset/sprites/mario-frog-layer-1.png',{frameWidth: 35, frameHeight: 44})
    this.load.spritesheet('left-mario','../asset/sprites/mario-frog-walk-right.png',{frameWidth: 32, frameHeight: 48})
}

function create ()
{
    platforms = this.physics.add.staticGroup()
    platforms.create(600, 480, 'platform1');


    player = this.physics.add.sprite(300, 250, 'frog-mario').setDisplaySize(100, 100);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
}

function update (){
    
}

