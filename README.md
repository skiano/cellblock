# Cellblock

A function to help you understand the relative size of columns in a grid.

## Usage

Without arguments, `cellblock()` returns a root column (the outer grid). When you create more columns you specify what column you want to insert them into like so `cellblock(targetColumn)`.

All the column widths are stored as “relative” dimensions. In other words, I store how they relate to the size of the outer viewport and grid rather than a fixed dimension. This way its easy to ask for their exact size once you know those values (or ask again if they change).

```js
import cellblock from 'cellblock'

// create the root
const rootColumn = cellblock();

// insert a 1/2 column into the root
const childColumn_A = cellblock(rootColumn, '1/2');

// insert another 1/2 column into the root
const childColumn_B = cellblock(rootColumn, '1/2');

// Example of changing a width...
// update child B to be 1/3 (all descendants would also update)
childColumn_B.setWidth('1/3'); 

// Example of getting width...
// given a grid width and gutter size, retrieve child A's width
const OUTER_WIDTH = 1280;
const GUTTER_WIDTH = 20;

childColumn_A.getWidth(1280, 20); // returns (1280 - 20) / 2 => 640 (how wide)
```
