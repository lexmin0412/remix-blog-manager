---
title: webpack 中使用 dotenv
---

webpack 中使用 dotenv

安装
```
yarn add dotenv
```

修改 webpack 配置
```js
const dotenv = require('dotenv')
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
}
```