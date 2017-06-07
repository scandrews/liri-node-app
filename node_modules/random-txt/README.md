# random-txt
Generate URL safe random string from numeric value

Features:
- generate url safe random string from numeric value
- numeric salt
- default generation from time stamp
- With 3 number salt, generated strings have 10 millions (+/- 1) unique values (see test.js)
- Not totally random generation, random-txt uses pattern and randomness to ensure most unique result
- No dependencies
- ES6

# Install
```sh
$ npm install random-txt
```

# How to use
```JavaScript
const randomTxt = require('random-txt')
const salt = 867
const randomNumber = new Date().valueOf()

console.log(randomTxt())
console.log(randomTxt(salt))
console.log(randomTxt(salt, randomNumber))

// GsXvQ5
// zXTljizg
// YFJmWXck
```

# License
MIT