// 执行终端命令
const { spawn } = require('child_process');

const spawnCommand = (...args) => {
  new Promise((resolve, reject) => {
    const spawnProcess = spawn(...args);
    // 打印输出
    spawnProcess.stdout.pipe(process.stdout);
    // 进程执行完成回到的函数
    spawnProcess.on('close', () => {
      console.log('----------------------');
      resolve();
    });
  });
};
module.exports = {
  spawnCommand,
};
