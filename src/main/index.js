import { app, shell, BrowserWindow, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import url from 'url'


let aboutWindow
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  const mainMenu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(mainMenu)

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

const templateMenu = [{
  label: 'File',
  submenu: [{
    label: "Salir",
    click() {
      app.quit()
    }
  }]
},
{
  label: "Vista",
  submenu: [{
    label: "Recargar",
    accelerator: 'Ctrl+R',
    role: 'reload'
  }, {
    label: "Pantalla completa",
    accelerator: "F11",
    role: 'togglefullscreen'
  }]
},
{
  label: "Ayuda",
  submenu: [{
    label: "Acerca De"
    , click() {
      //
      acercaDeWindow()
    }
  }]
}
]

function acercaDeWindow() {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Acerca de",
  })
  aboutWindow.setMenu(null)
  console.log(join(__dirname, './about.html'));
  if (is.dev) {
    aboutWindow.loadFile(join(__dirname, './about.html'))
  } else {
    aboutWindow.loadFile(join(__dirname, './about.html'))
  }
  aboutWindow.on('closed', () => {
    aboutWindow = null;
  })
}

if (process.env.NODE_ENV != 'production') {
  templateMenu.push({
    label: "DevTools",
    submenu: [{
      label: "Show/Hide DevTools",
      click(item, focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    }, {
      role: 'reload'
    }]
  })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
