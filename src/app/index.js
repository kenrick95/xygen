// @ts-check
import Encoder from "./encoder.js"
import Renderer from "./renderer.js"
import { COLDPLAY_MAP } from "./constants.js"
;(function() {
  // The ampersand code in "X&Y" cover has made me wonder which Baudot Code standard did they use... until I found out that someone pointed out that it's a coding error; and they actually defined a set of characters and colors at their album booklet.
  function main() {
    let text = "X&Y"
    const canvas = document.getElementById("canvas")
    // @ts-ignore
    const context = canvas.getContext("2d")

    const encoder = new Encoder(COLDPLAY_MAP)
    const renderer = new Renderer(context, {
      width: canvas.width,
      height: canvas.height
    })
    renderer.code = encoder.encode(text)

    document.getElementById("text").addEventListener("input", e => {
      text = e.target.value
      const code = encoder.encode(text)
      console.log("code", code)
      renderer.code = code
    })
  }
  document.addEventListener("DOMContentLoaded", main)
})()
