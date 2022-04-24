import { Engine } from '../engine/Engine'
import { Sprite } from '../engine/Sprite'

export class Mog extends Sprite {
  constructor(
    context: Engine,
    x: number,
    y: number,
    options: {
      name: string
      key: string
    },
    row: number,
    loop?: boolean
  ) {
    super({
      options,
      context,
      x,
      y,
      width: 90,
      height: 76,
      frameIndex: 0,
      row,
      tickCount: 0,
      ticksPerFrame: 10,
      frames: 5,
      loop
    })
    this.context.scene.addToScene(this)
  }
}
