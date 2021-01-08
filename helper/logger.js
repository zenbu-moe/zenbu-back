let moment = require('moment');
let fs = require('fs');
const globals = require('../globals');
let logfile = `log_${moment().format('YYYYMMDD-HHmmss')}.txt`;
let path = `${globals.appRoot}/log/${logfile}`;

let folder;
try {
    folder = fs.readdirSync(`${globals.appRoot}/log`);
} catch (e) {
    console.warn('No log folder, making one.');
    fs.mkdirSync(`${globals.appRoot}/log`);
}

fs.writeFileSync(path, '');

async function logger(content, type) {
    let time = moment().format('YYYY. MMM D. HH:mm:ss');
    let text = `[${time} - ${String(type).toUpperCase()}] ${content}`;
    console.log(text);
    await fs.appendFileSync(path, `${text}\n`);
}

module.exports = logger;