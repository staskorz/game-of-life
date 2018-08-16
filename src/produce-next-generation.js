const processGrid = require("./process-grid")
const countLiveNeighbors = require("./count-live-neighbors")

module.exports = ({ grid, rulesFn }) =>
  processGrid({
    grid,
    cellTransformationFn: ({ grid, x, y }) =>
      rulesFn({
        isAlive: grid[y][x],
        liveNeighborsCount: countLiveNeighbors({ grid, x, y }),
      }),
  })
