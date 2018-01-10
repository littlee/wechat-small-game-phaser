import './js/libs/weapp-adapter'
import './js/libs/symbol'
import './js/libs/stub'

window.PIXI = require('./js/libs/pixi')
window.p2 = require('./js/libs/p2')
window.Phaser = require('./js/libs/phaser-split')

var aspect = window.innerWidth / window.innerHeight
var gameWidth = 640
var gameHeight = gameWidth / aspect

var game = new Phaser.Game({
  width: gameWidth,
  height: gameHeight,
  renderer: Phaser.CANVAS,
  canvas: canvas,
  state: {
    preload: function () {
      this.load.image('bg', 'images/bg.jpg')
      this.load.image('hero', 'images/hero.png')
    },

    create: function () {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true

      this.bg = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'bg')
      this.hero = this.add.sprite(this.world.centerX, this.world.centerY, 'hero')
      this.hero.anchor.setTo(0.5)
      this.hero.inputEnabled = true
      this.hero.input.enableDrag()
    },

    update: function () {
      this.bg.tilePosition.y += 1
    }
  }
})

