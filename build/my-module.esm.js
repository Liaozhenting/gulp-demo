import { createHashHistory } from 'history';

var unique = arr => [...new Set(arr)];
/*********************************************/

/**  packages/module.js */
// export default {
//   unique: arr => [...new Set(arr)]
// };

/**  index.js */
// import { unique } from "./packages/module";
// 👆这种写法不被支持
// 正确是 import {default as unique} from "./packages/module";

/*********************************************/

var arr = [1, 2, 3, 4, 5, 5, 5, 5];
console.log(createHashHistory);
console.log(unique(arr).toString());
