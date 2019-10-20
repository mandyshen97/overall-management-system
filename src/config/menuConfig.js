const menuList = [
  {
    title: "首页", // 菜单标题
    key: '/home', // 对应的path路径
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '数据采集模块',
    key: '/collection',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '采集模块简介',
        key: '/collection/introduction',
        icon: 'bars'
      },
      {
        title: '数据采集',
        key: '/collection/data-collection',
        icon: 'tool'
      },
      {
        title: '标注数据列表',
        key: '/collection/label-data-list',
        icon: 'tool'
      },
    ]
  },
  {
    title: '智能诊断辅助',
    key: '/assist',
    icon: 'user',
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'windows',
  },
]
export default menuList