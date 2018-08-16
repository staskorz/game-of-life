const countLiveNeighbors = require("./count-live-neighbors")

describe("count-live-neighbors", () => {
  const grid = [
    [0, 0, 0], // comment to keep the code on a separate line
    [1, 0, 0], // comment to keep the code on a separate line
    [1, 0, 1],
  ]

  it("correctly counts live neighbors at (0, 0)", () => {
    expect(countLiveNeighbors({ grid, x: 0, y: 0 })).toEqual({
      horizontalAndVertical: 1,
      diagonal: 0,
    })
  })

  it("correctly counts live neighbors at (1, 1)", () => {
    expect(countLiveNeighbors({ grid, x: 1, y: 1 })).toEqual({
      horizontalAndVertical: 1,
      diagonal: 2,
    })
  })

  it("correctly counts live neighbors at (1, 0)", () => {
    expect(countLiveNeighbors({ grid, x: 1, y: 0 })).toEqual({
      horizontalAndVertical: 0,
      diagonal: 1,
    })
  })

  it("correctly counts horizontal and vertical live neighbors at (1, 2)", () => {
    expect(countLiveNeighbors({ grid, x: 1, y: 2 })).toEqual({
      horizontalAndVertical: 2,
      diagonal: 1,
    })
  })
})
