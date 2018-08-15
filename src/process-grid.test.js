const processGrid = require("./process-grid")

describe("process-grid", () => {
  const grid = [[0, 0, 0], [1, 0, 0], [1, 0, 1]]

  it("correctly processes grid", () => {
    const processedGrid = processGrid({
      grid,
      fn: ({ grid, x, y }) => (grid[y][x] === 1 ? 0 : 1),
    })

    expect(processedGrid[0][0]).toBe(1)
    expect(processedGrid[1][0]).toBe(0)
  })
})
