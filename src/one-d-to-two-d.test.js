const oneDtoTwoD = require("./one-d-to-two-d")

describe("one-d-to-two-d", () => {
  it("correctly converts 1D array to 2D array", () => {
    expect(
      oneDtoTwoD({ arr: [0, 0, 0, 1, 0, 0, 1, 0, 1], width: 3 }),
    ).toStrictEqual([[0, 0, 0], [1, 0, 0], [1, 0, 1]])
  })
})
