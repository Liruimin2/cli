// 本块代码仅用于测试
const ConfigTransform = require('./ConfigTransform')

const vueConfig = new ConfigTransform({
  js: ['vue.config.js']
})

console.log(vueConfig.transform({
  text: '这是一个测试',
}));