import { Engine } from './Engine'
import { Loader } from './Loader'
interface ISprite {
  options: {
    name: string
    key: string
  }
  context: Engine
  x: number
  y: number
  width: number
  height: number
}

export class Sprite implements ISprite {
  options: {
    name: string
    key: string
  }
  context: Engine
  src: CanvasImageSource
  x: number
  y: number
  width: number
  height: number
  frames: number
  frameIndex: number
  row: number
  ticksPerFrame: number
  tickCount: number
  loop: boolean
  loader: Loader

  constructor({ context, x, y, width, height, options }: ISprite) {
    this.options = options

    const { key } = this.options

    this.context = context
    this.src = this.context.loader.sprites[key]
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.frames = this.context.loader.animations[key].frames
    this.frameIndex = this.context.loader.animations[key].startAt
    this.row = this.context.loader.animations[key].row
    this.ticksPerFrame = this.context.loader.animations[key].frameRate
    this.tickCount = this.context.loader.animations[key].startAt
    this.loop = this.context.loader.animations[key].repeat
  }

  update() {
    this.tickCount += 1
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0
      if (this.frameIndex < this.frames - 1) {
        this.frameIndex += 1
      } else if (this.loop) {
        this.frameIndex = this.context.loader.animations[this.options.key].startAt
      }
    }
  }

  render() {
    this.context.canvas.context?.drawImage(
      this.src,
      this.frameIndex * this.width,
      this.row * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}
