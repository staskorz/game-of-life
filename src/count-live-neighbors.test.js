const countLiveNeighbors = require("./count-live-neighbors")

describe("count-live-neighbors", () => {
  const grid = [[0, 0, 0], [1, 0, 0], [1, 0, 1]]

  it("correctly counts all live neighbors at (0, 0)", () => {
    expect(countLiveNeighbors.all({ grid, x: 0, y: 0 })).toBe(1)
  })

  it("correctly counts all live neighbors at (1, 1)", () => {
    expect(countLiveNeighbors.all({ grid, x: 1, y: 1 })).toBe(3)
  })

  it("correctly counts horizontal and vertical live neighbors at (1, 0)", () => {
    expect(countLiveNeighbors.horizontalAndVertical({ grid, x: 1, y: 0 })).toBe(
      0,
    )
  })

  it("correctly counts horizontal and vertical live neighbors at (1, 2)", () => {
    expect(countLiveNeighbors.horizontalAndVertical({ grid, x: 1, y: 2 })).toBe(
      2,
    )
  })
})
