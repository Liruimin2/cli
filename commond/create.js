const path = require('path')
module.exports = async (projectName)=>{
  //命令运行时的目录
  const cwd = process.cwd();
  const targeDir = path.resolve(cwd, projectName || '.')
  console.log(`创建项目路径：${targeDir}`);
}