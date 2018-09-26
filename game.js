import './js/libs/weapp-adapter';
import './js/libs/symbol';
import './js/libs/stub';

import './js/phaserGlobals';

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
