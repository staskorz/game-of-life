describe("integration test", () => {
  const originalGlobalConsole = global.console

  beforeEach(() => {
    // @ts-ignore
    global.console = {
      log: jest.fn(),
    }
  })

  it("correctly runs the game", () => {
    process.argv = [
      "node", // Node.js executable, ignored
      "script.js", // script path, ignored
      "3", // width
      "3", // height
      "2", // infect-after
      "3", // max-generations
      "0 0 0 1 0 0 1 0 1", // seed
    ]

    require("./index")

    expect(global.console.log).toHaveBeenNthCalledWith(1, "0 0 0 1 0 0 1 0 1")
    expect(global.console.log).toHaveBeenNthCalledWith(2, "0 0 0 0 1 0 0 1 0")
    expect(global.console.log).toHaveBeenNthCalledWith(3, "1 1 1 0 1 0 0 1 0")

    // @ts-ignore
    expect(global.console.log.mock.calls[3]).toBeUndefined()
  })

  afterAll(() => {
    global.console = originalGlobalConsole
  })
})
