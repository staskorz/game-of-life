const oneDtoTwoD = require("./one-d-to-two-d")

module.exports = argv => {
  const args = argv.slice(2) // the first two discarded elements are Node.js and script paths
  const [width, height, infectAfter, maxGenerations, seed] = args

  if (seed) {
    const numericWidth = +width
    const numericHeight = +height
    const parsedSeed = seed.split(" ").map(elem => +elem)

    if (numericWidth * numericHeight === parsedSeed.length) {
      return {
        width: numericWidth,
        height: numericHeight,
        infectAfter: +infectAfter,
        maxGenerations: +maxGenerations,
        seed: oneDtoTwoD({ arr: parsedSeed, width: numericWidth }),
      }
    } else {
      return null
    }
  } else {
    return null
  }
}
