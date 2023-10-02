// import { exec } from 'node:child_process';
// import { stdout } from 'node:process';

const {exec} = require('child_process');
exec('ls -a', (exec, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})