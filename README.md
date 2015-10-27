# cellblock

A function that helps understand the shape and dimensions of a grid

## usage

```js
import cellblock from 'cellblock'

const rootColumn = cellblock(); // calling with no arguments makes a root
const childColumnA = cellblock(rootColumn, '1/2') // nests a column inside the root that is 1/2
const childColumnB = cellblock(rootColumn, '1/2') // nests a column inside the root that is 1/2

childColumnB.setWidth('1/3'); // updates child B to be 1/3 (all children would also update)

const OUTER_WIDTH = 1280;
const GUTTER_WIDTH = 20;

childColumnA.getWidth(1280, 20); // returns (1280 - 20) / 2 => 640 (how wide)
```

