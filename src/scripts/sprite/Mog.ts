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
    }
  ) {
    super({
      options,
      context,
      x,
      y,
      width: 90,
      height: 76
    })
    this.context.scene.addToScene(this)
  }
}
