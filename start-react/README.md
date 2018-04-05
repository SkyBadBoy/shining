#### react 项目初始化
-   项目创建 ：create-react-app app-name

-   目录结构 ：
    - src --
        - router ：存放 路由文件
        - asset ： 存放 css、 js、 image
        - containers ： 存放 页面文件
        - components ：存放 页面所需的公共组件
        - layouts ：存放 基础模板
          
-   UI库 ： Ant Design 
    - npm run eject 弹出个性配置
    - 使用安需加载 npm install babel-plugin-import --dev
    
- 路由
    - 安装react-router ：npm install --save react-router-dom

- 使用 scss
    - 配置教程 ：https://www.cnblogs.com/yangrenmu/p/7118398.html 

- 插槽 
    - react-solt ： http://npm.taobao.org/package/react-slot
    - react.children.only ：  { React.Children.only(this.props.children) }

- 装饰器
    - 安装 npm install babel-plugin-transform-decorators-legacy
    - 配置 在Package.json 加上 plugins 配置