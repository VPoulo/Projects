## Octopawn AI Solver

### Course: Artificial Intelligence

[Professor Bart Massey](https://www.pdx.edu/profile/bart-massey) helped with the assignment as needed and created the provided a file that we could test against to make sure we got the expected output.

#### Run Instructions

1. Run: <code>python3 octopawn.py</code>

2. Check the generated 4pawn.json file for the output!

#### Description

Octopawn is a 4x4 version of [Hexapawn](https://en.wikipedia.org/wiki/Hexapawn).

In this program, I wrote a state-based AI function that finds the best possible move for each round. I then use this function to play for both sides, which essentially assumes both players in the game play optimally. Then, for every possible board configuration the program finds what the outcome of the game would be. A json file called 4pawn.json is generated with the results. The key is the board state and the value is who would win with optimal play. In the json file, an outcome of 1 represents a win for player W, and an outcome of -1 represents a win for player B.
