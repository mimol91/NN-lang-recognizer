# Description
This module tries to recognize programming language using neural network.

## How to generate learning data
For each programming language create separate directory in `dataset`, where name of directory is a extension of file which should be analysed. 
Inside this directories put your learning data files.

Example:
```
+---dataset
|   \---java
|       |---testFile.java
|       \---test.java
|   \---js
|       \---test.js
```

Currently application supports only `java, js, php, python` but adding a new language is extremely easy:
- Create a new file named as a programming language and save into `src/keywords/langs` (for example `src/keywords/langs/c.js`)
- Export array of keywords which is used by given language.

To generate learning data:

`node --harmony-async-await filesData.js` - to generate data required to train neural network.

It generates `filesData.json` which is required to train neural network.


## How to train neural network
To train neural network simply type:

`node --harmony-async-await train.js`

It generates `netData.json` which store neural network data and is used to determine programming language.


## How to test results
To test your neural network type:

`node --harmony-async-await tester.js filePath`

Where `filePath` is path to test file.

#### Requirements
- Node v7
- `yarn install` to install dependencies