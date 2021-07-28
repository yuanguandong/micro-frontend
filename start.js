var exec = require('child_process').exec;
const path = require('path')

// const execCmd = shell => {
//   return new Promise((resolve, reject) => {
//     exec(shell, {
//       encoding: 'utf8'
//     }, (error, statusbar) => {
//       if (error) {
//         console.log(error);
//         return reject(error);
//       }
//       console.log(statusbar);
//       resolve();
//     });
//   });
// };

var parentDir = path.resolve(process.cwd(), './app1');
console.log('parentDir',parentDir)

var cmdStr = 'cd app1 && umi dev';
exec(cmdStr, (err, stdout, stderr) => {
  console.log('stderr',stderr)
  if (err){
      console.log(err);
      console.warn(new Date(),' 命令执行失败');
  } else {
      console.log(stdout);
      console.warn(new Date(),' 命令执行成功');
  }
});



