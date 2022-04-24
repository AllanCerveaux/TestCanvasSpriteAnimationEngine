export class Canvas {
  canvas: HTMLCanvasElement
  private _context: CanvasRenderingContext2D | null
  private _width: number
  private _height: number

  constructor(id?: string) {
    this.canvas = id ? (document.getElementById(id) as HTMLCanvasElement) : document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
  }

  set context(ctx: CanvasRenderingContext2D | null) {
    this._context = ctx
  }

  get context(): CanvasRenderingContext2D | null {
    return this._context
  }
}
