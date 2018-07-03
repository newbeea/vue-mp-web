# {{ name }}

> {{ description }}

## Build Setup

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

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
