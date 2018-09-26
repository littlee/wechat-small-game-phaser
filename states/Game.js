class Game extends window.Phaser.State {
  create() {
    this.bg = this.add.tileSprite(
      0,
      0,
      this.world.width,
      this.world.height,
      'bg'
    );
    this.hero = this.add.sprite(this.world.centerX, this.world.centerY, 'hero');
    this.hero.anchor.setTo(0.5);
    this.hero.inputEnabled = true;
    this.hero.input.enableDrag();
  }

  update() {
    this.bg.tilePosition.y += 1;
  }
}

export default Game;
