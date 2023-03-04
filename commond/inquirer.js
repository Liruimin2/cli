const inquirer = require('inquirer')

const arr = [
  {
    type: 'input',
    name: 'projectName',
    message: '项目名称',
    default: 'vue-demo',
  },
  {
    type: 'list',
    name: 'projectType',
    message: '项目类型',
    default: 'vue2',
    choices: [
      { name: 'vue2', value: 'vue2' },
      { name: 'vue3', value: 'vue3' },
      { name: 'react', value: 'react' }
    ]        
  },
  {
    type: 'checkbox',
    name: 'plugins',
    message: '插件选择',
    choices: [
      { name: 'babel', value: 'babel' },
      { name: 'eslint', value: 'eslint' },
      { name: 'vue-router', value: 'vue-router' },
      {name:'typeScript',value: 'typeScript'}
    ]
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'confirm',
  }
];

inquirer.prompt(arr).then(answers => {
  console.log('==============');
  console.log(answers);
}).catch(error => {
  console.log('--------------')
  console.log(error)
})