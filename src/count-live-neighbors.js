const horizontalAndVerticalAlterations = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
]

const diagonalAlterations = [
  { x: -1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
]

const emptyArray = []

const alwaysReturnArray = arr => (arr ? arr : emptyArray)

const countLiveNeighbors = ({ alterations, grid, x, y }) =>
  alterations.reduce(
    (acc, alt) =>
      alwaysReturnArray(grid[y + alt.y])[x + alt.x] === 1 ? acc + 1 : acc,
    0,
  )

module.exports = ({ grid, x, y }) => {
  const horizontalAndVertical = countLiveNeighbors({
    alterations: horizontalAndVerticalAlterations,
    grid,
    x,
    y,
  })

  const diagonal = countLiveNeighbors({
    alterations: diagonalAlterations,
    grid,
    x,
    y,
  })

  return {
    horizontalAndVertical,
    diagonal,
  }
}
