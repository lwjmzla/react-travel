const menuList = [
    {
        title:'首页',
        key:'/admin/home',
        icon: 'home'
    },
    {
        title:'UI',
        key:'/admin/ui',
        icon: 'inbox',
        children:[
            {
                title:'按钮',
                key:'/admin/ui/buttons',
            },
            {
                title:'弹框',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
            },
            {
                title:'通知提醒',
                key:'/admin/ui/notification',
            },
            {
                title:'全局Message',
                key:'/admin/ui/messages',
            },
            {
                title:'Tab页签',
                key:'/admin/ui/tabs',
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery',
            },
            {
                title:'轮播图',
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        title:'表单',
        key:'/form',
        icon: 'form',
        children:[
            {
                title:'登录',
                key:'/form/login',
            },
            {
                title:'注册',
                key:'/form/reg',
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        icon: 'table',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
            },
            {
                title:'高级表格',
                key:'/table/high',
            }
        ]
    },
    {
        title:'富文本',
        key:'/rich',
        icon: 'file-text'
    },
    {
        title:'城市管理',
        key:'/city',
        icon: 'solution'
    },
    {
        title:'订单管理',
        key:'/order',
        icon: 'money-collect',
        children:[
            {
                title:'订单详情',
                key:'detail'
            },
            {
                title:'结束订单',
                key:'finish'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/user',
        icon: 'robot'
    },
    {
        title:'车辆地图',
        key:'/bikeMap',
        icon: 'fund'
    },
    {
        title:'图标',
        key:'/charts',
        icon: 'pie-chart',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar'
            },
            {
                title:'饼图',
                key:'/charts/pie'
            },
            {
                title:'折线图',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/permission',
        icon: 'user-add'
    },
];
export default menuList;