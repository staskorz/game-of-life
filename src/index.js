const parseArgv = require("./parse-argv")
const twoDtoOneD = require("./two-d-to-one-d")
const runGame = require("./run-game")

const args = parseArgv(process.argv)

if (!args) {
  throw new Error("Bad arguments")
}

const { infectAfter, maxGenerations, seed } = args

const printGridFn = grid => {
  /* eslint-disable-next-line no-console */
  console.log(twoDtoOneD(grid).join(" "))
}

runGame({
  maxGenerations,
  infectAfter,
  grid: seed,
  printGridFn,
})
