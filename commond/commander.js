// const program = require('commander');
// program
// .version =('li-cli')
// .usage('<command> [options]')
// program.command('create ,<app-name>').discripetion('create anew project').action((appName)=> {
//   console.log(appName);
// })
// program.parse(process.argv)
const { program } = require('commander');

// 名称，描述，版本号，用法提示。
program
  .name('cli')
  .command('create ,<app-name>')
  .description('这是一个神奇的脚手架')
  .version('0.0.1')
  .usage('<command> [options]')
  .action((appName)=> {
    console.log(appName);
  })

program.parse();
