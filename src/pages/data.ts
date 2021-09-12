const data = {
  name: '王金龙',
  motto: 'Work Hard ,Play Hard!',
  introduce: {
    name: '王金龙',
    age: 25,
    phone: 18256786101,
    email: 'wjl1591531775@163.com',
    school: '中国矿业⼤学徐海学院',
    work_period: 1.5,
    address: '杭州市西湖区',
    status: '在职',
  },
  experiences: [
    {
      start: '2020.03',
      end: '2020.08',
      company: '南京轩恩软件开发有限公司',
      post: 'Java后端开发',
    },
    {
      start: '2020.09',
      end: '至今',
      company: '杭州智诚惠通科技有限公司',
      post: 'Java后端开发',
    },
  ],
  technical: [
    {
      num: 1,
      text: '熟悉 JavaSE、IO、多线程等Java基础知识；',
    },
    {
      num: 2,
      text: '熟悉Spring、SpringMVC、Mybatis、SpringBoot等技术框架；',
    },
    {
      num: 3,
      text: '熟悉MySQL数据库及相关SQL语句；',
    },
    {
      num: 4,
      text: '熟悉 Linux常用指令；',
    },
    {
      num: 5,
      text: '熟悉Tomcat应用服务器使用；',
    },
    {
      num: 6,
      text: '熟悉IDEA、Eclipse、XShell、Postman、Chrome等开发调试工具的使用；',
    },
    {
      num: 7,
      text: '了解ElasticSearch搜索引擎、redis缓存数据库；',
    },
  ],
  projects: [
    {
      start: '2020.3',
      end: '2020.8',
      name: 'Baas 后台管理系统 ',
      desc: '包括新闻、通讯录、待办和公告及其他子模块的综合后台管理系统；',
      effect:
        '基于公司人员组织架构设计公司人员权限，实现通讯录模块、任务管理模块、新闻的编辑发布和新闻数据统计模块，及公告发布等模块的开发维护；',
      technical: 'Spring、SpringMVC、Mybatis、Maven、MySQL等等；',
      summary: '',
      harvest: [
        {
          num: 1,
          text: '使用递归方式获取公司部门及其子部门信息的树形数据结构；',
        },
        {
          num: 2,
          text: '解决了权限管理相关设计中的横向越权及纵向越权问题；',
        },
        {
          num: 3,
          text: '对SSM框架环境部署、各层之间的业务联系有了更为深刻的认识；',
        },
      ],
    },
    {
      start: '2020.09',
      end: '至今',
      name: '浙江省综合治超管理平台',
      desc: '浙江省综合治超平台总体以四个体系进行架设，分别为基础设施体系、数据资源体系、应用支撑体系、业务应用体系，整个项目，实现将“非现场治超”、“高速治超”、“信用治超”、“路警联合治超等所有治超管理的信息化应用；',
      effect: '统计分析、执法管理、信用管理等模块需求分析及设计实现；',
      technical:
        'SpringBoot、Mybatis-Plus、redis、ElasticSearch、Nginx、MySQL、个推等；',
      summary: '',
      harvest: [
        {
          num: 1,
          text: '对于一些SQL语句进行了优化和重新编写，减少了数据检索时间；',
        },
        {
          num: 2,
          text: '使用ElasticSearch和redis，提高了接口响应速度，优化了用户体验；',
        },
        {
          num: 3,
          text: '对敏感数据进行加密传输，提高了数据安全性；',
        },
      ],
    },
  ],
  summary:
    '热爱编程，做事认真，勤于思考，乐于与同事沟通交流，能够积极排查解决完项目开发过程中出现的问题，总结工作中技术实际应用的新的技术及经验；',
};

export default data;
