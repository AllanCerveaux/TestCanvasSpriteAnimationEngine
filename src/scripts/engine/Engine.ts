import { AnimsOption, Loader } from './Loader'

import { Canvas } from './Canvas'
import { Sprite } from './Sprite'

export class Engine {
  isRuning: boolean = true
  private _loader: Loader
  canvas: Canvas
  sprites: Sprite[]
  constructor() {
    this.canvas = new Canvas()
    this.loader = new Loader()
    this.sprites = []
  }

  set loader(value: Loader) {
    this._loader = value
  }
  get loader(): Loader {
    return this._loader
  }

  get scene() {
    return {
      sprite: {
        add: (title: string, src: string) => this.loader.add(title, src)
      },
      anims: {
        add: ({ key, name, startAt, row, frames, frameRate, repeat = false }: AnimsOption) =>
          this.loader.anims({ key, name, startAt, row, frames, frameRate, repeat })
      },
      addToScene: (sprite: Sprite) => this.addToScene(sprite)
    }
  }

  init() {
    this.loop()
  }

  loop() {
    this.canvas.context?.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)

    this.sprites.forEach(sprite => {
      sprite.render()
      sprite.update()
    })

    if (this.isRuning) {
      requestAnimationFrame(this.loop.bind(this))
    }
  }

  addToScene(sprite: Sprite) {
    this.sprites.push(sprite)
  }
}
