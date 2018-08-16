module.exports = {
  original: ({
    isAlive,
    liveNeighborsCount: { horizontalAndVertical, diagonal },
  }) => {
    const allLiveNeighborsCount = horizontalAndVertical + diagonal

    if (isAlive) {
      if (allLiveNeighborsCount < 2) {
        return 0
      } else if (allLiveNeighborsCount > 3) {
        return 0
      } else {
        return 1
      }
    } else {
      if (allLiveNeighborsCount === 3) {
        return 1
      } else {
        return 0
      }
    }
  },

  infected: ({
    isAlive,
    liveNeighborsCount: { horizontalAndVertical, diagonal },
  }) => {
    const allLiveNeighborsCount = horizontalAndVertical + diagonal

    if (isAlive) {
      if (horizontalAndVertical === 0) {
        return 0
      } else {
        return 1
      }
    } else {
      if (allLiveNeighborsCount === 1) {
        return 1
      } else {
        return 0
      }
    }
  },
}
