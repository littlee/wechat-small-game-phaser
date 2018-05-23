echo 'Getting latest version of Phaser-CE from unpkg.com ...'
curl -L -s https://unpkg.com/phaser-ce@latest/build/custom/pixi.min.js -o ./js/libs/pixi.min.js
curl -L -s https://unpkg.com/phaser-ce@latest/build/custom/p2.min.js -o ./js/libs/p2.min.js
curl -L -s https://unpkg.com/phaser-ce@latest/build/custom/phaser-split.min.js -o ./js/libs/phaser-split.min.js
echo 'Update finished'