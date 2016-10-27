const {app, BrowserWindow} = require('electron')
const Timer = require('onion-timer')

let win
function createWindow() {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('closed', ()=> {
    win = null;
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', ()=>{
  if (process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', ()=>{
  if (win === null){
    createWindow()
  }
})
let interv = 60;
// let defaultConfig = {
//     seconds: 0,
//     minutes: 0,
//     hours: 1,
//     pattern: '{hh}:{mm}:{ss}', //default .toString() pattern
//     onInit: null,  //called at object initiation
//     onStart: null, //called at .start()
//     onTick: {
//       document.getElementById('counter').innerHTML = timer.toString();
//     },  //called every Second
//     onStop: null,  //called at .stop() or when timer hits 00:00:00
//     onPause: null, //called at .pause()
//     onResume: null //called at .resume()
//   }
let timeLeft = "Smoke now";
let timer = new Timer(interv, {
  onTick: () =>{
    timeLeft = timer.toString();
  }
})
