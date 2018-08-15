const parseArgv = require("./parse-argv")

describe("parse-argv", () => {
  it("correctly parses argv", () => {
    const argv = ["node.exe", "script.js", "2", "3", "3", "6", "1 0 0 1 1 1"]

    expect(parseArgv(argv)).toStrictEqual({
      width: 2,
      height: 3,
      infectAfter: 3,
      maxGenerations: 6,
      seed: [[1, 0], [0, 1], [1, 1]],
    })
  })
})
