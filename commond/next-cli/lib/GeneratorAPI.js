const path = require('path')
const { getPluginLink, toShortPluginId } = require('@vue/cli-shared-utils')
const { extractCallDir } = require('./util/util')

render (source, additionalData = {}) {
  const baseDir = extractCallDir()
  
  if (typeof source === 'string') {
    // 获得模板路径
    source = path.resolve(baseDir, source)

    // 暂存
    this._injectFileMiddleware(async (files) => {
      
      const data = this._resolveData(additionalData)
      // 读取 source 目录下所有文件
      const globby = require('globby')
      const _files = await globby(['**/*'], { cwd: source, dot: true })
      
      for (const rawPath of _files) {
        // 生成文件时，_ 换成 .   __直接删掉
        const targetPath = rawPath.split('/').map(filename => {
          if (filename.charAt(0) === '_' && filename.charAt(1) !== '_') {
            return `.${filename.slice(1)}`
          }
          if (filename.charAt(0) === '_' && filename.charAt(1) === '_') {
            return `${filename.slice(1)}`
          }
          return filename
        }).join('/')

        // 源文件路径
        const sourcePath = path.resolve(source, rawPath)
        // 读取文件内容
        const content = this.renderFile(sourcePath, data)
        // files 记录文件及文件内容
        if (Buffer.isBuffer(content) || /[^\s]/.test(content)) {
          files[targetPath] = content
        }
      }
    })
  }
}

// 合并 option
_resolveData (additionalData) {
  return Object.assign({
    options: this.options,
    rootOptions: this.rootOptions,
    plugins: this.pluginsData
  }, additionalData)
}