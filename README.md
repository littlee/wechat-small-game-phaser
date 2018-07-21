# Wechat Small Game with Phaser.js

## Currently Using Phaser-CE Build

v2.11.0

## Main Idea

"Thanks to" the WeChat Small Game runtime environment, directly importing 'phaser' will get lots of errors.

## Solution

Stub some global variables which Phaser required, that's what 'js/libs/stub.js' does.

```js
import './js/libs/stub';
```

Use Phaser's split custom build instead of the standard version, which can expose PIXI, p2 and Phaser to global.

```js
window.PIXI = require('./js/libs/pixi');
window.p2 = require('./js/libs/p2');
window.Phaser = require('./js/libs/phaser-split');
```

Create the game instance with an object instead of multiple parameters, specify the `canvas` option.

```js
var game = new Phaser.Game({
  width: gameWidth,
  height: gameHeight,
  renderer: Phaser.CANVAS,
  canvas: canvas,
  state: {}
});
```

## Caveats

### Input Pointer

If the game size is not the same as the canvas', you should set scale mode to make Phaser calculate input pointer correctly.

```js
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true; // optional
this.scale.pageAlignVertically = true; // optional
```

### Audio Playing

The Phaser built-in audio API won't work, however, we can use the Audio API from the adapter.

```js
let au = new Audio('path/to/audio.mp3');
au.play();
au.pause();
```

### Loading JSON files

Loading JSON file with a relative path won't work, you have to put the JSON file on the server and load it with a URL.

```js
this.load.json('version', './a.json'); // ERROR T_T
this.load.json('version', 'http://phaser.io/version.json'); // WORKS YoY
```
