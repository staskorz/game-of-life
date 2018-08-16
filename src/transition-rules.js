module.exports = {
  original: ({ isAlive, liveNeighborsCount }) => {
    if (isAlive) {
      if (liveNeighborsCount < 2) {
        return 0
      } else if (liveNeighborsCount > 3) {
        return 0
      } else {
        return 1
      }
    } else {
      if (liveNeighborsCount === 3) {
        return 1
      } else {
        return 0
      }
    }
  },

  infected: ({ isAlive, liveNeighborsCount, liveHorizontalNeighborsCount }) => {
    if (isAlive) {
      if (liveHorizontalNeighborsCount === 0) {
        return 0
      } else {
        return 1
      }
    } else {
      if (liveNeighborsCount === 1) {
        return 1
      } else {
        return 0
      }
    }
  },
}
