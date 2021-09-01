import fs from 'fs';
import path from 'path';
async function createEmptyDir(dir) {
    let loc = path.join(path.dirname(__dirname), dir);
    let dirData = new Promise((resolve, reject) => {
        fs.mkdir(loc, err => { err ? reject(err) : resolve(loc); })
    })
    return await dirData;
}

function deleteFile(name) {
    fs.unlink(name, err => { if (err) { console.log('Unable to delete ' + name) } })
    // console.log(name + ' deleted')
}

async function scanDir(dir) {
    let fileData = new Promise((resolve, reject) => {
        let loc = path.join(path.dirname(__dirname), dir);
        fs.readdir(loc, (err, files) => { err ? reject(err) : resolve(files); })
    })
    return await fileData;
}

function srcDir(dir) {
    return 'src' + dir.split('dist')[1];
}


export { createEmptyDir, deleteFile, scanDir, srcDir }