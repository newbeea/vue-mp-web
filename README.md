# 描述

> 利用 vue mpvue 同时生成小程序和SPA单页应用


## 主要功能

- vue开发体验
- 一份代码生成小程序+SPA两个版本
- 兼容vue路由写法
- 动态添加路由页面
- flyio统一请求库（TODO）

## 感谢

只是一些功能组合，方便快速搭建环境
感谢[vuejs](https://vuejs.org/)
感谢[mpvue](http://mpvue.com/)
感谢[F-loat](https://github.com/F-loat)

## 使用


- 利用 vue-cli 生成初始工程，按步骤选择安装mpvue vue-router，根据需求选择其他组件

``` bash
$ npm install -g vue-cli
$ vue init newbeea/vue-mp-web my-project
```

- 进入工程目录安装依赖，开始开发

``` bash
# 安装依赖
npm install

# 编译 web 版本，启动服务器，具体端口见终端输出（默认8080），热更新
npm run dev

# 构建 web 版本
npm run build

# 编译小程序版本，实时更新，支持动态添加路由无需重启，打开微信开发者工具，选择 dist 目录，查看效果
npm run dev-mp

# 构建小程序版本
npm run build-mp

```