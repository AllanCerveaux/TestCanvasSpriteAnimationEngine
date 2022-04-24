export class Loader {
  sprites: {
    [key: string]: CanvasImageSource
  }

  constructor() {
    this.sprites = {}
  }

  add(title: string, src: string) {
    const image = new Image()
    image.src = src
    this.sprites[title] = image
  }
}
