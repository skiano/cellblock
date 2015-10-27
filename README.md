# Cellblock

A function to help you understand the relative size of columns in a grid.

## Usage

Without arguments, `cellblock()` returns a root column (the outer grid). When you create more columns you specify what column you want to insert them into like so `cellblock(targetColumn)`.

```js
import cellblock from 'cellblock'

const rootColumn = cellblock(); // calling with no arguments makes a root
const childColumn_A = cellblock(rootColumn, '1/2') // nests a column inside the root that is 1/2
const childColumn_B = cellblock(rootColumn, '1/2') // nests a column inside the root that is 1/2

// updating width...
// update child B to be 1/3 (all descendants would also update)
childColumn_B.setWidth('1/3'); 

// getting width...
// given a grid width and gutter size, retrieve child A's width

const OUTER_WIDTH = 1280;
const GUTTER_WIDTH = 20;

childColumn_A.getWidth(1280, 20); // returns (1280 - 20) / 2 => 640 (how wide)
```

