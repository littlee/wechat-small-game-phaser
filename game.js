import './js/libs/weapp-adapter';
import './js/libs/symbol';
import './js/libs/stub';

window.PIXI = require('./js/libs/pixi.min');
window.p2 = require('./js/libs/p2.min');
window.Phaser = require('./js/libs/phaser-split.min');

import StartState from './states/Start.js';
import GameState from './states/Game.js';

var aspect = window.innerWidth / window.innerHeight;
var gameWidth = 640;
var gameHeight = gameWidth / aspect;

var game = new Phaser.Game({
  width: gameWidth,
  height: gameHeight,
  renderer: Phaser.CANVAS,
  canvas: canvas
});

game.state.add('Start', StartState, false);
game.state.add('Game', GameState, false);
game.state.start('Start');
