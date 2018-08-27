#!/usr/bin/env node

const ipfsAPI = require('ipfs-api')

const args = process.argv.slice(2);
const ipfs = ipfsAPI('my.ipfs.dnp.dappnode.eth');

function uploadDirIPFS(path) {
    return new Promise(function(resolve, reject) {
        ipfs.util.addFromFs(path, { recursive: true }).then((response) => {
            response.forEach(element => {
                console.log(element.hash + "\t" + element.path) // eslint-disable-line no-console
            });
            resolve();
        }).catch((err) => {
            console.error(err); // eslint-disable-line no-console
            reject();
        })
    });
}
//Read arguments
const path = args[0];

uploadDirIPFS(path);