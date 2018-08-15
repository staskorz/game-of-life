const allAlterations = [
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
]

const horizontalAndVerticalAlterations = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
]

const emptyArray = []

const alwaysReturnArray = arr => (arr ? arr : emptyArray)

const countLiveNeighbors = ({ alterations, grid, x, y }) =>
  alterations.reduce(
    (acc, alt) =>
      alwaysReturnArray(grid[y + alt.y])[x + alt.x] === 1 ? acc + 1 : acc,
    0,
  )

module.exports = {
  all: ({ grid, x, y }) =>
    countLiveNeighbors({ alterations: allAlterations, grid, x, y }),

  horizontalAndVertical: ({ grid, x, y }) =>
    countLiveNeighbors({
      alterations: horizontalAndVerticalAlterations,
      grid,
      x,
      y,
    }),
}
