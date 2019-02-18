// @ts-check
import { COLORS } from './constants.js'

class Encoder {
    // #TIL class is ES2015, static method is ES2015; but static property is [stage 3](https://github.com/tc39/proposal-class-fields)
    constructor() {
        // Should be using "private field"
        this._dict = new Map()
    }

    /**
     * @param {string} input
     * @return Array<Array<keyof COLORS>>
     */
    encode(input) {
        return [];
    }
}

export default Encoder;