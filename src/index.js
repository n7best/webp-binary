const exec = require('child_process').execFile;
const path = require('path');

class WebpLib {
  static Version = '1.0.0';

  static GetBinPath = command => {
    let binPath = path.resolve(require.resolve('webp-binary'), '..', `../lib/libwebp-${WebpLib.Version}-`);

    //get webpmux path
    if (process.platform === 'darwin') {
      return binPath + `mac-10.13/bin/` + command; //return osx library path
    } else if (process.platform === 'linux') {
      return binPath + 'linux-x86-64/bin/' + command; //return linux library path
    } else if (process.platform === 'win32') {
      if (process.arch === 'x64') {
        return binPath + `windows-x64/bin/${command}.exe`; //return windows 64bit library path
      } else {
        return binPath + `windows-x86/bin/${command}.exe`;
      }
    } else {
      console.log('Unsupported platform:', process.platform, process.arch); //show unsupported platform message
    }
  };

  static Exec = (command, query) => new Promise((res, rej) => {
    exec(WebpLib.GetBinPath(command), query.split(/\s+/), (error, stdout, stderr) => {
      if (error) return rej(error)
      res(stdout);
    });
  });
}

export default WebpLib;