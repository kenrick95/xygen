// @ts-check
class Encoder {
  // #TIL class is ES2015, static method is ES2015; but static property is [stage 3](https://github.com/tc39/proposal-class-fields)
  constructor(map) {
    // Should be using "private field"
    this._map = new Map(map)
  }

  /**
   * @param {string} input
   * @return Array<Array<Array<keyof COLORS>>>>
   */
  encode(input) {
    return input.split("").map(char => {
      return this._map.get(char) || []
    })
  }
}

export default Encoder
