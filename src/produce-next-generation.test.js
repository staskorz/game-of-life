const produceNextGeneration = require("./produce-next-generation")
const transitionRules = require("./transition-rules")

describe("produce-next-generation", () => {
  const grid = [
    [0, 0, 0], // comment to keep the code on a separate line
    [1, 0, 0], // comment to keep the code on a separate line
    [1, 0, 1],
  ]

  it("correctly produces a next generation grid according to the rules", () => {
    expect(
      produceNextGeneration({ grid, rulesFn: transitionRules.original }),
    ).toEqual([
      [0, 0, 0], // comment to keep the code on a separate line
      [0, 1, 0], // comment to keep the code on a separate line
      [0, 1, 0],
    ])
  })
})
