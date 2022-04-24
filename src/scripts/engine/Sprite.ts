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
  frames: number
  frameIndex: number
  row: number
  ticksPerFrame: number
  tickCount: number
  loop?: boolean
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

  constructor({
    context,
    x,
    y,
    width,
    height,
    frames,
    frameIndex,
    row,
    ticksPerFrame,
    tickCount,
    loop = true,
    options
  }: ISprite) {
    this.options = options
    this.context = context
    this.src = this.context.loader.sprites[this.options.name]
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.frames = frames
    this.frameIndex = frameIndex
    this.row = row
    this.ticksPerFrame = ticksPerFrame
    this.tickCount = tickCount
    this.loop = loop
  }

  update() {
    this.tickCount += 1
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0
      if (this.frameIndex < this.frames - 1) {
        this.frameIndex += 1
      } else if (this.loop) {
        this.frameIndex = 0
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
