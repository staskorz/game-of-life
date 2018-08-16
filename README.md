# Game of Life

## How to run

1. Clone: `git clone https://github.com/staskorz/game-of-life`
1. Navigate to project folder: `cd game-of-life`
1. Install dependencies: `yarn`
1. Run tests: `yarn test` (in verbose mode: `yarn test --verbose`)
1. Run (in dev mode - will restart on every code modification, terminate with "Ctrl+C"): `yarn start`

   with sample arguments: `yarn start 3 3 2 3 "0 0 0 1 0 0 1 0 1"`

1. Run in normal mode: `node src/index.js`

   with sample arguments: `node src/index.js 3 3 2 3 "0 0 0 1 0 0 1 0 1"`

## Arguments

1. width - int - The width of the world
1. height - int - The height of the world
1. infect-after - int - The number of generations after which the
   infection stage will start
1. max-generations - int - The maximum number of generations that can
   be created. Including all phases of the game
1. seed - [] int - The initial state of the world
