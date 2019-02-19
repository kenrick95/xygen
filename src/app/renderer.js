import { SEP_COLOR } from "./constants.js"

//@ts-check

/**
 * in px
 */
const CELL_WIDTH = 7

/**
 * in px
 */
const CELL_HEIGHT = 7

/**
 * number of cells
 */
const BLOCK_WIDTH = 4

/**
 * number of cells
 */
const BLOCK_HEIGHT = 4

/**
 * in px
 */
const INTER_ITEM_PADDING = 0
/**
 * in px
 */
const PADDING = 10
/**
 * in px
 */
const BLOCK_PADDING = 4
/**
 * between block[1] and block[2] of each item
 * in px
 */
const SECOND_PADDING = 16

class Renderer {
  constructor(context, { width, height } = { width: 320, height: 480 }) {
    this._context = context
    this._width = width
    this._height = height

    this._code = []
  }

  set code(newCode) {
    this._code = newCode
    this.render()
  }

  render() {
    this._context.clearRect(0, 0, this._width, this._height)

    let x = PADDING

    for (let i = 0; i < this._code.length; i++) {
      const item = this._code[i]

      {
        this._context.save()
        this._context.beginPath()
        this._context.fillStyle = SEP_COLOR.ACTIVE
        this._context.fillRect(
          x + CELL_WIDTH + 1,
          PADDING + CELL_HEIGHT * BLOCK_HEIGHT * 4 + BLOCK_PADDING * 2 + 4,
          14 + (item.length - 1) * CELL_WIDTH * BLOCK_WIDTH,
          3
        )
        this._context.restore()
      }

      for (let j = 0; j < item.length; j++) {
        const char = item[j]
        for (let k = 0; k < char.length; k++) {
          const dot = char[k]
          for (let l = 0; l < dot.length; l++) {
            const block = dot[l]
            this._context.save()
            this._context.beginPath()
            this._context.fillStyle = block
            // x =
            //   PADDING +
            //   CELL_WIDTH * BLOCK_WIDTH * i +
            //   CELL_WIDTH * BLOCK_WIDTH * j +
            //   INTER_ITEM_PADDING * i
            this._context.fillRect(
              x,
              PADDING +
                CELL_HEIGHT * BLOCK_HEIGHT * (k * dot.length + l) +
                BLOCK_PADDING * k +
                (k >= 2 ? SECOND_PADDING : 0),
              CELL_WIDTH * BLOCK_WIDTH,
              CELL_HEIGHT * BLOCK_HEIGHT
            )
            this._context.restore()
          }
        }
        x += CELL_WIDTH * BLOCK_WIDTH
      }

      x += INTER_ITEM_PADDING
    }
  }
}
export default Renderer
