function getOSinfo(){

    if(type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT'){
        type = 'Windows';
    }

    var os = require('os');
    var type = os.type();
    var release = os.release();
    var cpus = os.cpus()[0].model;
    var upTime = os.uptime();
    var userInfo = os.userInfo();

    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model: ', cpus);
    console.log('Uptime ~ ', (upTime/60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
exports.print = getOSinfo;