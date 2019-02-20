// @ts-check
import Encoder from "./encoder.js"
import Renderer from "./renderer.js"
import { COLDPLAY_MAP } from "./constants.js"

class Main {
  constructor() {
    this._main = document.getElementById("main")

    this._canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")

    this._encoder = new Encoder(COLDPLAY_MAP)
    this._renderer = new Renderer(context, {
      width: canvas.width,
      height: canvas.height,
      bgcolor: "#051724"
    })

    this.text = "X&Y"
    this.bgcolor = "#051724"
  }

  set text(newText) {
    this._text = newText
    this._renderer.code = this._encoder.encode(this._text)
  }

  set bgcolor(newColor) {
    this._bgcolor = newColor
    this._renderer.bgcolor = newColor
    this._main.style.backgroundColor = newColor
  }
}

;(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const main = new Main()

    document.getElementById("text").addEventListener("input", e => {
      main.text = e.target.value
    })

    document.getElementById("bgcolor").addEventListener("input", e => {
      main.bgcolor = e.target.value
    })
  })
})()
