const { app, Menu, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'logo.ico',
    });
    window.loadURL('https://control.pinoynodes.net');
});
