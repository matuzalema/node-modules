var os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var nodeInf = process.versions.node;
    process.stdout.write('Node version: ' + nodeInf);
    var systemLanguage = process.env.LANG;
    var system = process.platform;

    switch(system)
    {
    case "macOS":
        process.stdout.write(systemLanguage);
        break;
    case "Linux":
        process.stdout.write(systemLanguage);
        break;
    }

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write(' Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write(' Wrong instruction!');
        }
    }
});