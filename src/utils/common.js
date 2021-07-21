// 导入fs模块
const fs = require('fs-extra');
function delDir(path) {
  const list = fs.readdirSync(path);
  // 删除文件和删除目录调用的方法是不一样的
  list.forEach((item) => {
    // 拼路径
    const url = path + '/' + item; // C:\Users\星软教育\Desktop\gupao-cli\demo\1
    // 读取文件信息
    const stats = fs.statSync(url);
    if (stats.isFile()) {
      // 文件--- 删除
      fs.unlinkSync(url);
    } else {
      // 文件夹
      arguments.callee(url);
    }
  });
  // 删除文件夹
  fs.rmdirSync(path);
}
module.exports = {
  delDir,
};
