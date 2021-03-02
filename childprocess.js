const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const folder = os.userInfo().homedir;
const system = os.type();

switch (system){
    case 'Windows_NT':
        dir();
        break;
    case 'Linux':
        ls();
        break;
    case 'Darwin':
        ls();
        break;
    default:
        console.log('Lo lamentamos, pero no se reconoce el sistema.');
}

async function ls() {
    const { stdout, stderr } = await exec('ls');
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
  }

  async function dir() {
    const { stdout, stderr } = await exec('dir');
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
  }