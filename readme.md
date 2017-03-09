# chilkat-electron-test
### Testing chilkat_node with Electron apps

## Installation
1) clone repository
2) `npm install`
3) `npm run rebuild`
4) `npm start`

## Expected error message
```
C:\Development\chilkat-electron-test  (chilkat-electron-test@0.0.0)
λ npm start

> chilkat-electron-test@0.0.0 start C:\Development\chilkat-electron-test
> electron .


App threw an error during load
Error: A dynamic link library (DLL) initialization routine failed.
\\?\C:\Development\chilkat-electron-test\node_modules\chilkat_node7_win32\chilkat.node
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:173:20)
    at Object.Module._extensions..node (module.js:598:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:173:20)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (C:\Development\chilkat-electron-test\main.js:10:15)

    at Object.<anonymous> (C:\Development\chilkat-electron-test\main.js:40:3)
```
