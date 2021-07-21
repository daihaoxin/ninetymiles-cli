const path = require('path');
const fsextra = require('fs-extra');
const Inquirer = require('inquirer');
const { delDir } = require('../utils/common');
const { gitLabAddress } = require('../config');
const downloadGitRepo = require('download-git-repo');
const { spawnCommand } = require('../utils/exec');
const createAction = async function () {
  const projectName = process.argv[3]; // demo
  const cwd = process.cwd(); // 拿到当前执行命令的工作目录
  const targetDir = path.join(cwd, projectName);
  if (fsextra.existsSync(targetDir)) {
    //
    const { action } = await Inquirer.prompt([
      {
        name: "action",
        type: 'list',
        message: '当前项目已经存在，是否覆盖：',
        choices: [
          {
            name: '确认', value: true,
          },
          {
            name: '取消', value: false,
          },
        ],
      },
    ]);
    console.log(action);
    if (action) {
      // 删除当前目录
      console.log('\r\n正在删除目录....');
      delDir(targetDir);
      console.log('删除成功');
      create(projectName); // demo
      // 创建项目
    } else {
      // 取消
      return;
    }
  } else {
    // 不存在相同的文件夹
    create(projectName);
  }
};

const create = async (projectName) => {
  console.log(`开始创建项目： ${ projectName }`);
  // 执行模板克隆
  await downloadGitRepo(gitLabAddress, projectName, { clone: true });
  // 执行命令 npm install 下载依赖， 进入到 projectName 目录结构下面才能下载依赖
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  // await spawnCommand('ls', ['-lh'])  // npm install   npm run build
  await spawnCommand(npm, ['install'], { cwd: `.\/${ projectName }` });  // npm install   npm run build
  // await spawnCommand(npm, ['run', 'build'])  // npm install   npm run build
};
module.exports = createAction;
