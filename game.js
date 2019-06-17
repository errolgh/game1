//configures our physics
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200}
    }
  },
    scene: [Example1]
};

//This creates a new instance of a Phaser game
window.onload = function(){
  var game = new Phaser.Game(config);
}
