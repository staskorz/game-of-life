const transitionRules = require("./transition-rules")
const produceNextGeneration = require("./produce-next-generation")

const chooseRules = ({ generationCount, infectAfter }) =>
  generationCount < infectAfter
    ? transitionRules.original
    : transitionRules.infected

const runGame = ({
  generationCount,
  maxGenerations,
  infectAfter,
  grid,
  printGridFn,
}) => {
  const newGrid = produceNextGeneration({
    grid,
    rulesFn: chooseRules({ generationCount, infectAfter }),
  })

  printGridFn(newGrid)

  if (generationCount < maxGenerations - 1) {
    runGame({
      generationCount: generationCount + 1,
      maxGenerations,
      infectAfter,
      grid: newGrid,
      printGridFn,
    })
  }
}

module.exports = ({
  generationCount = 1,
  maxGenerations,
  infectAfter,
  grid,
  printGridFn,
}) => {
  printGridFn(grid)

  runGame({ generationCount, maxGenerations, infectAfter, grid, printGridFn })
}
