var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 720,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{ 
    this.load.image('backgrd','../asset/maps/1-1.png')
    this.load.spritesheet('frog-mario','../asset/sprites/mario-frog-layer-1.png',{frameWidth: 32, frameHeight: 48})
    this.load.spritesheet('left-mario','../asset/spites/mario-frog-walk-right.png',{frameWidth: 32, frameHeight: 48})
}

function create ()
{
    this.add.image(2850, 360,'backgrd')
}

function update ()
{
}

//Listens for when the game size changes
window.addEventListener('resize', function (event) {

    game.scale.setMaxZoom();

}, false);