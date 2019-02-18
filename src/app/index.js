// @ts-check
import Encoder from './encoder.js'

(function () {
    // The ampersand code in "X&Y" cover has made me wonder which Baudot Code standard did they use... until I found out that someone pointed out that it's a coding error; and they actually defined a set of characters and colors at their album booklet.
    function main() {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        // get input
        // transform to baudot code
        // draw x&y
    }
    document.addEventListener('DOMContentLoaded', main);
})();
