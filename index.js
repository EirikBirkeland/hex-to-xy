const hueToXy = require('@q42philips/hue-color-converter')
const hexToRgb = require('hex-rgb')

/**
 *
 * @param {string} colorname - e.g. black, jade, blue, green
 * @returns {*|number[]}
 */
const xy = (hex) => {
    const rgb = hexToRgb(hex)
    const xy = hueToXy.calculateXY(...rgb)
    return xy
}

module.exports = xy