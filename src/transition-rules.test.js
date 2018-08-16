const transitionRules = require("./transition-rules")

describe("transition-rules", () => {
  describe("original", () => {
    it("correctly kills a live cell that has 1 live neighbor", () => {
      expect(
        transitionRules.original({
          isAlive: 1,
          liveNeighborsCount: {
            horizontalAndVertical: 1,
            diagonal: 0,
          },
        }),
      ).toBe(0)
    })

    it("correctly keeps a live cell alive if it has 2 live neighbors", () => {
      expect(
        transitionRules.original({
          isAlive: 1,
          liveNeighborsCount: {
            horizontalAndVertical: 1,
            diagonal: 1,
          },
        }),
      ).toBe(1)
    })

    it("correctly kills a live cell that has 4 live neighbors", () => {
      expect(
        transitionRules.original({
          isAlive: 1,
          liveNeighborsCount: {
            horizontalAndVertical: 2,
            diagonal: 2,
          },
        }),
      ).toBe(0)
    })

    it("correctly revives a dead cell that has 3 live neighbors", () => {
      expect(
        transitionRules.original({
          isAlive: 0,
          liveNeighborsCount: {
            horizontalAndVertical: 1,
            diagonal: 2,
          },
        }),
      ).toBe(1)
    })

    it("correctly leaves a dead cell as is if it has 2 live neighbors", () => {
      expect(
        transitionRules.original({
          isAlive: 0,
          liveNeighborsCount: {
            horizontalAndVertical: 2,
            diagonal: 0,
          },
        }),
      ).toBe(0)
    })
  })

  describe("infected", () => {
    it("correctly revives a dead cell that has 1 live neighbor", () => {
      expect(
        transitionRules.infected({
          isAlive: 0,
          liveNeighborsCount: {
            horizontalAndVertical: 1,
            diagonal: 0,
          },
        }),
      ).toBe(1)
    })

    it("correctly leaves a dead cell as is if its live neighbor count is not exactly 1", () => {
      expect(
        transitionRules.infected({
          isAlive: 0,
          liveNeighborsCount: {
            horizontalAndVertical: 0,
            diagonal: 0,
          },
        }),
      ).toBe(0)

      expect(
        transitionRules.infected({
          isAlive: 0,
          liveNeighborsCount: {
            horizontalAndVertical: 1,
            diagonal: 1,
          },
        }),
      ).toBe(0)
    })

    it("correctly kills a live cell with no horizontal or vertical live neighbors", () => {
      expect(
        transitionRules.infected({
          isAlive: 1,
          liveNeighborsCount: {
            horizontalAndVertical: 0,
            diagonal: 2,
          },
        }),
      ).toBe(0)
    })

    it("correctly leaves a live cell as is if it has horizontal or vertical live neighbors", () => {
      expect(
        transitionRules.infected({
          isAlive: 1,
          liveNeighborsCount: {
            horizontalAndVertical: 2,
            diagonal: 0,
          },
        }),
      ).toBe(1)
    })
  })
})
