const menuList = [
  {
    title: '用户信息',
    key: '/user',
    icon: 'user'
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
    title: '个人中心',
    key: '/person',
    icon: 'user'
  },



]
export default menuList