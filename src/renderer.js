import { SEP_COLOR } from "./constants.js"

//@ts-check

/**
 * Terminologies:
 *
 * - pixel: browser pixel
 * - cell: 7x7 px
 * - block: 4x4 cell, single unit of color
 * - dot: 2 blocks, single "dot" of the 5 digit Baudot codes
 * - char: 5 dots (one row)
 * - item: group of char, for alphabets, it's one char; but for special characters and number, it's two chars
 */

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
const PADDING = 10
/**
 * in px
 */
const BLOCK_PADDING = 4
/**
 * between dot[1] and dot[2] of each item
 * in px
 */
const SECOND_PADDING = 16

class Renderer {
  constructor(
    context,
    { width, height, bgcolor } = { width: 320, height: 480, bgcolor: "#000" }
  ) {
    this._context = context
    this._width = width
    this._height = height
    this._bgcolor = bgcolor

    this._code = []
  }

  set code(newCode) {
    this._code = newCode
    this.render()
  }
  set bgcolor(newBgcolor) {
    this._bgcolor = newBgcolor
    this.render()
  }

  _fillRect(x, y, w, h, color) {
    this._context.save()
    this._context.beginPath()
    this._context.fillStyle = color
    this._context.fillRect(x, y, w, h)
    this._context.restore()
  }

  render() {
    this._fillRect(0, 0, this._width, this._height, this._bgcolor)

    let x = PADDING

    for (let i = 0; i < this._code.length; i++) {
      const item = this._code[i]

      if (!item) {
        // null means space
        x += CELL_WIDTH * BLOCK_WIDTH

        continue
      }

      // Paint separator between dot[1] and dot[2]
      this._fillRect(
        x + CELL_WIDTH + 1,
        PADDING + CELL_HEIGHT * BLOCK_HEIGHT * 4 + BLOCK_PADDING * 2 + 4,
        14 + (item.length - 1) * CELL_WIDTH * BLOCK_WIDTH,
        3,
        SEP_COLOR.ACTIVE
      )

      for (let j = 0; j < item.length; j++) {
        const char = item[j]
        for (let k = 0; k < char.length; k++) {
          const dot = char[k]
          for (let l = 0; l < dot.length; l++) {
            const blockColor = dot[l]
            this._fillRect(
              x,
              PADDING +
                CELL_HEIGHT * BLOCK_HEIGHT * (k * dot.length + l) +
                BLOCK_PADDING * k +
                (k >= 2 ? SECOND_PADDING : 0),
              CELL_WIDTH * BLOCK_WIDTH,
              CELL_HEIGHT * BLOCK_HEIGHT,
              blockColor
            )
          }
        }
        x += CELL_WIDTH * BLOCK_WIDTH
      }
    }
  }
}
export default Renderer
