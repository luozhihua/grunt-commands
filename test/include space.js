var fs = require('fs');
var tmp = 'tmp';

if (!fs.existsSync(tmp))  {
    fs.mkdirSync(tmp);
}

fs.writeFileSync(tmp+'/nodejs2.log', new Date().toUTCString());