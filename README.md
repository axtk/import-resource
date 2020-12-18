```js
import {importScript, importStyle} from 'import-resource';

try {
    await importScript('./extra.js');
    await importStyle('./extra.css');
}
catch(e) {}
```
