import * as Phaser from 'phaser';
import { Game } from 'phaser';

import { SpinePlugin } from '@esotericsoftware/spine-phaser';
// import 'phaser/plugins/spine/dist/SpinePlugin';

export class MyGame {
  game: Game | null = null;
  constructor() {
    this.initGame();
  }

  async initGame() {
    this.game = new Game({
      type: Phaser.WEBGL,
      canvas: document.querySelector('#my-game') as HTMLCanvasElement,
      width: 640, // smart phone vertical
      height: 480,
      backgroundColor: '#000000',
      physics: {
        default: 'matter',
        matter: {
          debug: true, // TODO (johnedvard) remove debug if production
          gravity: { x: 0, y: 0 },
          autoUpdate: false,
        },
      },
      input: {
        gamepad: true,
      },
      plugins: {
        scene: [
          { key: 'SpinePlugin', plugin: SpinePlugin, mapping: 'spine' },
          // {
          //   key: 'MatterGravityFixPlugin',
          //   plugin: MatterGravityFixPlugin,
          //   mapping: 'matterGravityFix',
          //   start: true,
          // },
          // {
          //   key: 'MatterFixedStepPlugin',
          //   plugin: MatterFixedStepPlugin,
          //   start: true,
          // },
        ],
      },
      scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });
    // addScenes(this.game);
    // setGame(this.game);
    this.preventScroll();
  }
  preventScroll() {
    window.addEventListener('wheel', (event) => event.preventDefault(), {
      passive: false,
    });

    window.addEventListener('keydown', (event) => {
      if (['ArrowUp', 'ArrowDown', ' '].includes(event.key)) {
        event.preventDefault();
      }
    });
  }

  destroyGame() {
    if (this.game) {
      // destroyMusicAndSfx();
      this.game.destroy(true);
    }
    this.game = null;
  }
}
