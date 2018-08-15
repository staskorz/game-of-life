const twoDtoOneD = require("./two-d-to-one-d")

describe("two-d-to-one-d", () => {
  it("correctly converts 2D array to 1D", () => {
    expect(twoDtoOneD([[0, 1, 1], [0, 0, 1]])).toStrictEqual([0, 1, 1, 0, 0, 1])
  })
})
