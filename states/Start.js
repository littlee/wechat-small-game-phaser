window.PIXI = require('../js/libs/pixi.min');
window.p2 = require('../js/libs/p2.min');
window.Phaser = require('../js/libs/phaser-split.min');

class Start extends window.Phaser.State {
  init() {
    this.stage.backgroundColor = '#fff';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }

  preload() {
    this.load.image('bg', 'images/bg.jpg');
    this.load.image('hero', 'images/hero.png');
  }

  create() {
    this.startBtn = this.add.text(
      this.world.centerX,
      this.world.centerY,
      'Start Game',
      {
        font: 'Arial',
        fill: '#333',
        fontSize: 64
      }
    );
    this.startBtn.anchor.setTo(0.5);
    this.startBtn.inputEnabled = true;
    this.startBtn.events.onInputDown.add(function() {
      this.state.start('Game');
    }, this);
  }
}

export default Start;
