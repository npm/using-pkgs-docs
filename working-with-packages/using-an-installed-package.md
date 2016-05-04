# Using an Installed Package

Once the package is in `node_modules`, you can use it in your code. For example, if you
are creating a Node.js module, you can `require` it.

#### Example:

Create a file named index.js, with the following code:

```javascript
// index.js
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

Run the code using `node index.js`. It should output `[2, 3]`.

If you had not properly installed `lodash`, you would receive this error:

```
module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'
```

To fix this, run `npm install lodash` in the same directory as your `index.js`.
