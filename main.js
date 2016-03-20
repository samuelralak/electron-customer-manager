// modiule to controll application life
var app = require('app');

// module to create native browser window
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// This method will be called when electron has finished
// initializing and is ready to create browser windows.
app.on('ready', function () {
	// Create the browser window
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	// and add the index.html of the app
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	// Open the devtools.
	// mainWindow.openDevTools();
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
});