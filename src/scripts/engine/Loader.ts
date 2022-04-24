export interface AnimsOption {
  row: number
  key: string
  name: string
  startAt: number
  frames: number
  frameRate: number
  repeat?: boolean
}

export class Loader {
  sprites: {
    [key: string]: CanvasImageSource
  }
  animations: {
    [key: string]: {
      row: number
      name: string
      startAt: number
      frames: number
      frameRate: number
      repeat: boolean
    }
  }

  constructor() {
    this.sprites = {}
    this.animations = {}
  }

  add(key: string, src: string): void {
    const image = new Image()
    image.src = src
    this.sprites[key] = image
  }

  anims({ key, name, startAt, row, frames, frameRate, repeat = false }: AnimsOption): void {
    this.animations[key] = {
      row,
      name,
      startAt,
      frames,
      frameRate,
      repeat
    }
  }
}
