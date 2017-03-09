const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let window

//comment out the line below to see that app works without chilkat
var chilkat = require('chilkat_node7_win32')

function createWindow () {
  //swap two lines below to see that app works without chilkat
  window = new BrowserWindow({width: 800, height: 600, title: chilkat.version })
  //window = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', function () {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (window === null) {
    createWindow()
  }
})

