# base_vue_object

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> 移动端版本

```
# hotcss
##移动端适配解决方案
  1、在assets导入hotcss相关文件
  2、在main.js里引入hotcss.js文件
  3、px2rem.scss使用
    i、在assets里编写main.scss作为全局scss并引入pe2rem.scss
    ii、引入sass-resources-loader
    iii、修改build/utils.js 将 scss: generateLoaders('sass')修改为
      scss: generateLoaders('sass')
        .concat(
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/assets/styles/main.scss')
            }
          }
        )

# common
##样式重置
  1、在assets导入common.css
  2、在App.vue里引入common.css
  3、删除App.vue里的默认样式
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
