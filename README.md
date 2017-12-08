# t-checkbox
Vue checkbox wrapper

## Usage

install package: `npm install t-checkbox`

import & register Vue component like this:
```javascript
var Vue = require("vue"),
    TChexkbox = require("t-checkbox");

Vue.component("t-checkbox", TCheckbox);
```
or import __checkbox.js__ file in your html head tag
```html
<script src="/path/to/checkbox.js"></script>
```

additionally you can use default style by importing __checkbox.css__ file
```html
<link rel="stylesheet" href="/path/to/checkbox.css">
```

after that you can use vue component in your vue template

example
```html
<label for="test">Click to check</label>
<t-checkbox c-id="test" v-model="myModel"></t-checkbox>
```
