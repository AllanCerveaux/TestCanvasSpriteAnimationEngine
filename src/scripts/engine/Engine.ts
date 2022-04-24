import { Canvas } from './Canvas'
import { Loader } from './Loader'
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
      add: (title: string, src: string) => this.loader.add(title, src),
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
