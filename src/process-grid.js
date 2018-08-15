module.exports = ({ grid, fn }) => {
  const height = grid.length
  const width = grid[0].length
  const processedGrid = []

  for (let y = 0; y < height; y++) {
    processedGrid.push([])

    for (let x = 0; x < width; x++) {
      processedGrid[y].push(fn({ grid, x, y }))
    }
  }

  return processedGrid
}
