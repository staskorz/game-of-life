const runGame = require("./run-game")

describe("run-game", () => {
  const grid = [
    [0, 0, 0], // comment to keep the code on a separate line
    [1, 0, 0], // comment to keep the code on a separate line
    [1, 0, 1],
  ]

  it("correctly runs the game", () => {
    const printGridFn = jest.fn()

    runGame({ maxGenerations: 3, infectAfter: 2, grid, printGridFn })

    expect(printGridFn).toHaveBeenNthCalledWith(1, [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
    ])

    expect(printGridFn).toHaveBeenNthCalledWith(2, [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ])

    expect(printGridFn).toHaveBeenNthCalledWith(3, [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ])

    expect(printGridFn.mock.calls[3]).toBeUndefined()
  })
})
