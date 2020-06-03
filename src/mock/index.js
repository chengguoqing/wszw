import Mock from 'mockjs';
let url_eer = "http://www.duxinggj_xs.com/"
export default {
    init() {
        /**
         * @api {get} api/getsxdata 山西地区数据
         * @apiName 山西地区数据
         * @apiGroup index
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Array} data  数据
         * @apiSuccess {Nubmer} data.city  城市
         * @apiSuccess {Nubmer} data.value  得分
         * @apiSuccess {Nubmer} data.type  1上 2平 3下
         */
        Mock.mock(url_eer + 'getsxdata', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                'data': [
                    {
                        name: '大同市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                    },
                    {
                        name: '朔州市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                        },
                    {
                        name: '忻州市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '太原市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '吕梁市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '阳泉市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '晋中市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '临汾市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '长治市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '晋城市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                            },
                    {
                        name: '运城市',
                        value: '@integer(1, 100)',
                        type: "@integer(1, 3)"
                        }
                    ]
            })
        })

        /**
         * @api {get} getzhibiao 指标分析
         * @apiName 指标分析
         * @apiGroup index
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Array} data  数据
         * @apiSuccess {Nubmer} data.value  数据的值
         * @apiSuccess {String} data.name  2018
         * @apiSuccess {Object} data.areaStyle  areaStyle: { opacity: 0.5}
         */
        Mock.mock(url_eer + 'getzhibiao', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: [{
                        'value|10': ['@integer(1, 100)'],
                        name: '2018',
                        areaStyle: {
                            opacity: 0.5,

                        }
                    },
                    {
                        'value|10': ['@integer(1, 100)'],
                        name: '2017',
                        areaStyle: {
                            opacity: 0.5,

                        }
                    },
                    {
                        'value|10': ['@integer(1, 100)'],
                        name: '2016',
                        areaStyle: {
                            opacity: 0.5,
                        }
                    }]
            })

        })


        /**
         * @api {get} getshujufenxi 数据分析
         * @apiName 数据分析
         * @apiGroup indexer
         * @apiParam {Number} type  1.总体排行2.权力事项3依申请事项4.公共服务事项5.进驻部门6.指南要素
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Array} data.cityList  城市名称
         * @apiSuccess {Array} data.series  
         * @apiSuccess {String} sdata.eries.name  series.name线的名称
         * @apiSuccess {Array} data.series.data  数据值[1,2,3,4,5,6]
         */
        Mock.mock(url_eer + 'getshujufenxi', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    cityList: ['太原', '大同', '朔州', '阳泉', '长治', '忻州', '吕梁', '晋中', '临汾', '运城', '晋城'],
                    series: [{
                        name: '2018年排名',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2017年排名',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2016年排名',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2015年排名',
                        'data|11': ['@integer(1, 40)']
                    }]
                }
            })

        })


        /**
         * @api {get} getztgs 总体概况
         * @apiName 总体概况
         * @apiGroup indexsan
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Nubmer} data.ztgsa  省级政务服务平台
         * @apiSuccess {Nubmer} data.ztgsab  进驻部门数量
         * @apiSuccess {Nubmer} data.ztgsac  行政权力事项
         * @apiSuccess {Nubmer} data.ztgsad  依申请事项
         * @apiSuccess {Nubmer} data.ztgsae  办理时限压缩
         * @apiSuccess {Nubmer} data.ztgsaf  证照信息
         * @apiSuccess {Nubmer} data.ztgsg  企业实名用户
         * @apiSuccess {Nubmer} data.ztgsh  个人实名用户
         */
        Mock.mock(url_eer + 'getztgs', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    ztgsa: '@integer(1, 40)',
                    ztgsb: '@integer(1, 4000)',
                    ztgsc: '@integer(1, 40000)',
                    ztgsd: '@integer(1, 40000)',
                    ztgse: "30.70%",
                    ztgsf: '8.79亿',
                    ztgsg: '3548万',
                    ztgsh: '1.45亿',
                }
            })

        })


        /**
         * @api {get} getfswbdph 服务方式完备度排行
         * @apiName 服务方式完备度排行
         * @apiGroup fwfswbd
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Array} data.sjzf  市级政府
         * @apiSuccess {Nubmer} data.sjzf.type  1上 2平 3下
         * @apiSuccess {Nubmer} data.sjzf.city  城市
         * @apiSuccess {Nubmer} data.sjzf.value  得分
         * @apiSuccess {Array} data.sjbm  市级部门
         * @apiSuccess {Nubmer} data.sjbm.type  1上 2平 3下
         * @apiSuccess {Nubmer} data.sjbm.city  部门
         * @apiSuccess {Nubmer} data.sjbm.value  得分
         * @apiSuccess {Nubmer} data.dfsgftya  地市政府
         * @apiSuccess {Nubmer} data.dfsgftyb 市直部门
         * @apiSuccess {Nubmer} data.dfsgftyc 县级政府
         * @apiSuccess {Nubmer} data.dfsgftyd 县直部门
         * @apiSuccess {Nubmer} data.dfsgftye 镇级
         * @apiSuccess {Nubmer} data.dfsgftyf 村居
         * @apiSuccess {Object} data.hjgdffa 市级政府网上政务服务能力年度对比
         * @apiSuccess {Object} data.hjgdffa.dimensions 返回 '2018', '2017', '2016'
         * @apiSuccess {Array} data.hjgdffa.source 返回 [{ product: '已经开通', '2018': 33,  '2017': 29, '2016': 25 }]
          * @apiSuccess {Object} data.hjgdffb 政务服务界面统一入口  
          
          
         * @apiSuccess {Object} data.hjgdffe 市级政府实体政务服务大厅建设情况  类似hjgdffa
         
         */
        Mock.mock(url_eer + 'getfswbdph', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    'sjzf|16': [
                        {
                            name: '@cword(2)',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                    }
                ],
                    'sjbm|16': [
                        {
                            name: '@cword(3)',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                    }
                ],
                    dfsgftya: '@integer(100, 1000)',
                    dfsgftyb: '@integer(100, 1000)',
                    dfsgftyc: '@integer(100, 1000)',
                    dfsgftyd: '@integer(100, 1000)',
                    dfsgftye: '@integer(100, 1000)',
                    dfsgftyf: '@integer(100, 1000)',
                    hjgdffa: {
                        dimensions: ['product', '2018', '2017', '2016'],
                        source: [{
                                product: '已经开通',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            },
                            {
                                product: '暂未开通',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            }
                        ]
                    },
                    hjgdffb: [{
                            value: '@integer(1, 100)',
                            name: '一级域名'
                            },
                        {
                            value: '@integer(1, 100)',
                            name: '二级域名'
                            }
                        ],
                    hjgdffc: [{
                            value: '@integer(1, 100)',
                            name: '首页栏目导航'
                            },
                        {
                            value: '@integer(1, 100)',
                            name: '二级栏目导航'
                            }
                        ],

                    hjgdffe: {
                        dimensions: ['product', '2018', '2017'],
                        source: [{
                                product: '已经建立',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)'
                            },
                            {
                                product: '准备建立',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)'
                            },
                            {
                                product: '暂未计划',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)'
                            }
                        ]
                    }
                }
            })

        })






        /**
         * @api {get} getsjzwfwpt 市级政务服务平台集约化程度
         * @apiName 市级政务服务平台集约化程度
         * @apiGroup fwfswbd
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Nubmer} data.hhgsdra  市县乡村五级服务体系
         * @apiSuccess {Nubmer} data.hhgsdrb  市县乡村四级服务体系
         * @apiSuccess {Nubmer} data.hhgsdrc  市县乡村三级服务体系
         * @apiSuccess {Nubmer} data.hhgsdrd  市县乡村二级服务体系
         * @apiSuccess {Nubmer} data.hhgsdre  本建设
         * @apiSuccess {Array} data.sjzwfwpt  市级政务服务平台集约化程度
         */
        Mock.mock(url_eer + 'getsjzwfwpt', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    hhgsdra: '@integer(1, 100)',
                    hhgsdrb: '@integer(1, 100)',
                    hhgsdrc: '@integer(1, 100)',
                    hhgsdrd: '@integer(1, 100)',
                    hhgsdre: '@integer(1, 100)',
                    sjzwfwpt: [
                        {
                            name: '大同市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                    },
                        {
                            name: '朔州市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                        },
                        {
                            name: '忻州市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '太原市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '吕梁市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '阳泉市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '晋中市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '临汾市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '长治市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '晋城市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                            },
                        {
                            name: '运城市',
                            value: '@integer(1, 100)',
                            type: "@integer(1, 3)"
                        }
                    ]
                }
            })

        })



        /**
         * @api {get} getztszjhdrt 市级政府网上政务服务能力整体排名分析
         * @apiName 市级政府网上政务服务能力整体排名分析
         * @apiGroup ztfxddr
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Array} data.cityList  城市名称
         * @apiSuccess {Array} data.series  
         * @apiSuccess {String} sdata.eries.name  series.name线的名称
         * @apiSuccess {Array} data.series.data  数据值[1,2,3,4,5,6]
         */
        Mock.mock(url_eer + 'getztszjhdrt', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    cityList: ['太原', '大同', '朔州', '阳泉', '长治', '忻州', '吕梁', '晋中', '临汾', '运城', '晋城'],
                    series: [{
                        name: '2018指数得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2017指数得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2016指数得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2018平均得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2017平均得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '2016平均得分',
                        'data|11': ['@integer(1, 40)']
                    }, {
                        name: '三年平均指数得分',
                        'data|11': ['@integer(1, 40)']
                    }],
                    hjgdffa: {
                        dimensions: ['product', '2018', '2017', '2016'],
                        source: [{
                                product: '非常高',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            },
                            {
                                product: '高',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            },
                            {
                                product: '中',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            },
                            {
                                product: '低',
                                '2018': '@integer(1, 100)',
                                '2017': '@integer(1, 100)',
                                '2016': '@integer(1, 100)'
                            }
                        ]
                    },
                    hjgdffb: {
                        dimensions: ['product', '2018年地区平均值', '2017年地区平均值', '2016年地区平均值', '2018年全国平均值', '2017年全国平均值', '2016年全国平均值'],
                        source: [{
                                product: '华北',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '东北',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '华东',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '华中',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '华南',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '西南',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            },
                            {
                                product: '西北',
                                '2018年地区平均值': '@integer(1, 100)',
                                '2017年地区平均值': '@integer(1, 100)',
                                '2016年地区平均值': '@integer(1, 100)'
                            }
                        ],
                        qgpj: [
                            {
                                name: '2018年全国平均值',
                                type: 'line'
                            }, {
                                name: '2017年全国平均值',
                                type: 'line',
                                'data|4': ['@integer(1, 100)']
                            }, {
                                name: '2016年全国平均值',
                                type: 'line',
                                'data|4': ['@integer(1, 100)']
                            },
                        ]
                    },
                }
            })

        })




        /**
         * @api {get} api/getfwsxfgd 服务事项覆盖度-办事指南发布数量
         * @apiName 服务事项覆盖度-办事指南发布数量
         * @apiGroup index
         * @apiParam {Number} type  1'行政权力事项',2 '依申请事项',3 '依职权事项', 4'公共服务事项'
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Array} data  数据
         * @apiSuccess {Object} data.bszlfbsl  数据
         * @apiSuccess {Object} data.bszlfbsl.name 城市名
         * @apiSuccess {Object} data.bszlfbsl.value 值
         */
        Mock.mock(url_eer + 'getfwsxfgd', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                'data': [
                    {
                        name: '大同',
                        value: '@integer(1000, 10000)'
                    },
                    {
                        name: '朔州',
                        value: '@integer(1000, 10000)'
                        },
                    {
                        name: '忻州',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '太原',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '吕梁',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '阳泉',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '晋中',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '临汾',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '长治',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '晋城',
                        value: '@integer(1000, 10000)'
                            },
                    {
                        name: '运城',
                        value: '@integer(1000, 10000)'
                        }
                    ]



            })
        })


        /**
         * @api {get} api/getfwsxfgdindex 服务事项覆盖度
         * @apiName 服务事项覆盖度-办事指南发布数量
         * @apiGroup getfwsxfgdindex
         * @apiParam {Number} type  1'行政权力事项',2 '依申请事项',3 '依职权事项', 4'公共服务事项'
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Object} data.hjgdffa  历年行政权力累事项指南发布数量对比
         * @apiSuccess {Object} data.hjgdffb  市级政府相关清单发布情况
         */
        Mock.mock(url_eer + 'getfwsxfgdindex', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                'data': {
                    hjgdffa: {
                        dimensions: ['product', '2018', '2017', '2016', '2015'],
                        source: [{
                                product: '总数量',
                                '2018': '@integer(10000, 100000)',
                                '2017': '@integer(10000, 100000)',
                                '2016': '@integer(10000, 100000)',
                                '2015': '@integer(10000, 100000)'
                            },
                            {
                                product: '平均数量',
                                '2018': '@integer(10000, 100000)',
                                '2017': '@integer(10000, 100000)',
                                '2016': '@integer(10000, 100000)',
                                '2015': '@integer(10000, 100000)'
                            }
                        ]
                    },
                    hjgdffb: {
                        'jhggda|3': ['@integer(1, 40)'],
                        'jhggdb|3': ['@integer(1, 100)']
                    }
                }


            })
        })



        /**
         * @api {get} api/getzhpm 综合排名
         * @apiName 综合排名
         * @apiGroup getfwsxfgdindex
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
           * @apiSuccess {Nubmer} data.type  1上 2平 3下
         */
        Mock.mock(url_eer + 'getzhpm', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                'data|14': [
                    {
                        type:"@integer(1, 3)",
                        jhhsdsda: "@cword(2)",
                        jhhsdsdb: "@integer(1, 100)",
                        jhhsdsdc: "@integer(1, 100)",
                        jhhsdsdd: "@integer(1, 100)",
                        jhhsdsde: "@integer(1, 100)",
                        jhhsdsdf: "@integer(1, 100)",
                        jhhsdsdg: "@integer(1, 100)",
                        jhhsdsdh: "@integer(1, 100)",
                        jhhsdsdi: "@integer(1, 100)",
                        jhhsdsdj: "@integer(1, 100)",
                        jhhsdsdk: "@integer(1, 100)",
                        jhhsdsdq: "@integer(1, 100)"
                    }
                ]


            })
        })



    }

}
