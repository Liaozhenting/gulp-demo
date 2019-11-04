const unique = arr => [...new Set(arr)];
export default unique;

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