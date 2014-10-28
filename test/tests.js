var fs = require('fs');
var tmp = 'tmp';

if (!fs.existsSync(tmp))  {
    fs.mkdirSync(tmp);
}

fs.writeFileSync(tmp+'/nodejs.log', new Date().toUTCString());