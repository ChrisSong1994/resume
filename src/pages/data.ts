const data = {
  name: '宋军',
  motto: 'Work Hard ,Play Hard!',
  introduce: {
    name: '宋军',
    age: 27,
    phone: 18557511748,
    email: '18557511748@163.com',
    school: '石家庄铁道大学',
    work_period: 4,
    address: '杭州市良渚镇',
    status: '在职',
  },
  experiences: [
    {
      start: '2017.07',
      end: '2018.08',
      company: '杭州凡闻科技有限公司',
      post: '研发部前端开发工程师',
    },
    {
      start: '2018.08',
      end: '2020.08',
      company: '杭州优云科技有限公司',
      post: '数据中台组前端主要负责人',
    },
    {
      start: '2020.08',
      end: '至今',
      company: '浙江讯盟科技有限公司',
      post: 'Baas组前端开发组长',
    },
  ],
  technical: [
    {
      num: 1,
      text: '熟悉 Javascript、Css、Html、ES6等基本前端技术；',
    },
    {
      num: 2,
      text: '熟悉 Http 协议、Ajax 、Websocket等前后端数据交互技术；',
    },
    {
      num: 3,
      text: '熟悉 React、React-Router、Redux相关技术栈，对其基本原理有一定的理解；',
    },
    {
      num: 4,
      text: '熟悉 Webpack、Rollup、Babel、Eslint等工具的使用，具有前端脚手架工具的开发经验；',
    },
    {
      num: 5,
      text: '熟悉前端基本的数据结构和算法',
    },
    {
      num: 6,
      text: '了解Nodejs、Koa、Electron、Mongodb等技术，有一定的实践经验；',
    },
    {
      num: 7,
      text: '了解浏览器的运行机制以及缓存机制；',
    },
    {
      num: 8,
      text: '具有良好的英语阅读水平（CET6）;',
    },
  ],
  projects: [
    {
      start: '2018.8',
      end: '2020.3',
      name: 'Show 可视化大屏编辑平台',
      desc: '一个可以通过快速拖拽图表组件的方式搭建可视化大屏的编辑平台，内置多种图表组件以及丰富的配置项；可视数据主要来源于运维服务；',
      effect:
        '主要参与负责编辑平台配置面板、组件数据填充、图表组件、撤销恢复以及数据管理平台等功能的开发维护工作；',
      technical:
        'React、Redux、Immutablejs、Webscoket、Canvas、Antd、Echarts等',
      summary: '',
      harvest: [
        {
          num: 1,
          text: '利用 Webscoket 和发布订阅模式替换老的数据轮询方案，实现图表数据展示的实时更新，大幅提升页面性能表现；',
        },
        {
          num: 2,
          text: '利用Immutablejs和Redux实现的撤销恢复方案替换老的深拷贝方案，明显提升页面操作的流畅性；',
        },
        {
          num: 3,
          text: '基于Antd的Form表单，实现多种复杂自定义表单组件和一套动态表单加载方案，使表单的联动性更灵活；',
        },
        {
          num: 4,
          text: '在数据管理平台数据源层面上增加过滤算子操作，使对于接入的基础数据操作更灵活；',
        },
      ],
    },
    {
      start: '2020.9',
      end: '2021.5',
      name: 'Baas 后台管理系统',
      desc: '基于自研微服务架构实现的管理后台系统，承载公司通讯录、权限管理、应用管理、系统管理等多个基础业务服务；',
      effect:
        '提出并实践自研微服务架构，对于老Baas平台进行整合拆分和重构；对选人树、应用选择器、请求库等公共组件的开发维护；',
      technical: 'React、Redux、Emotion、Rematch等；',
      summary: '',
      harvest: [
        {
          num: 1,
          text: '利用基于React框架实现的自研微服务架构对老的Baas管理系统进行升级，使各个子模块应用可以单独抽离部署，结合权限系统实现更灵活轻量的系统结构；',
        },
        {
          num: 2,
          text: '对于通用组件进行拆分重构，打包发布到内部NPM服务，减少协作人员的沟通和代码维护成本；',
        },
        {
          num: 3,
          text: '对于Iframe内嵌的子应用和主应用之间的通信，基于PostMessage技术实现一套类Http通信协议；',
        },
      ],
    },
    {
      start: '2018.8',
      end: '2019.8',
      name: 'Simo Cli 脚手架工具',
      desc: '基于Baas平台业务开发的可以快速创建业务开发模板，统一代码规范，开发构建配置的脚手架工具；',
      effect:
        '推动项目的立项，独立完成脚手架的初期调研、开发测试、文档编写、发布及维护工作；推广并带动其他项目组使用；',
      technical: 'Webpack5、webpack-chain、Babel、Eslint、Nodejs、Yargs等；',
      summary: '',
      harvest: [
        {
          num: 1,
          text: '在多个大型项目中使用，统一了开发环境和代码规范，使项目在初始化和工程化方面的节省了大量时间；',
        },
        {
          num: 2,
          text: '基于webpack-chain实现的灵活配置可实现复杂项目、多页面和单页面的深度自定义配置；',
        },
        {
          num: 2,
          text: '基于Webpack5的本地缓存、多进程编译打包以及react-refresh组件热更新等功能使开发体验得到了很大的提升；',
        },
      ],
    },
  ],
  opensource: [
    {
      name: 'Simo Cli',
      repo: 'https://github.com/ChrisSong1994/simo-cli',
      desc: '开箱即用的 react 脚手架工具；',
    },
    {
      name: 'MultiPartUpload',
      repo: 'https://github.com/ChrisSong1994/multi-part-upload',
      desc: '分片上传模块，支持并行和串行上传；',
    },
    {
      name: 'AsyncFiles',
      repo: 'https://github.com/ChrisSong1994/AsyncFiles',
      desc: '实时同步两个文件/夹内容；',
    },
    {
      name: 'FrameMessage',
      repo: 'https://github.com/ChrisSong1994/FrameMessage',
      desc: '基于 promise 和 postMessage 通信封装的接口调用式通信方式；',
    },
  ],
  summary:
    '独立负责前端项目架构搭建和开发工作;善于协调前端上下游的需求沟通和整理工作,有一定管理经验；善于总结工作中的技术经验并推广；',
};

export default data;
