## 项目中使用

- 进入目录安装依赖，国内用户推荐使用 cnpm 进行加速

```bash
npm install taro-canvas-code --save
```

- 在代码中 import 并按照文档说明使用

```bash
import ImageCode from 'taro-canvas-code';
```
## 示例代码

```bash
<!--WXML示例代码-->
<ImageCode
          imageUrl={url}
          onReload={this.onReload}
          onClose={this.onClose}
          onMath={this.onMath}
          top={'30%'}
        />
```

更多使用方式请移步[仓库地址](https://github.com/xml123/imageCode.git)查看 demo 和使用方式.

## 属性列表

| 属性               | 类型         | 默认值     | 必填 | 说明   |
| ----------------- | ------------ | ----------  | -----| --------- |
| imageUrl          | string       |             |  是  | 背景图片的路径,要求宽325px,高217px |
| top               | string       |      0      |  否  | 组件距离顶部高度              |
| onReload          | function     |             |  否  | 重新渲染时触发的函数           |
| onMath            | function     |             |  否  | 滑动结束后进行验证的函数,接收两个参数，第一个是滑动结束的x坐标，第二个是验证失败执行的回调函数           |
| onClose           | function     |             |  否  | 点击右上角关闭按钮触发的函数     |
