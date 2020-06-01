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
         * @apiSuccess {Nubmer} city  城市
         * @apiSuccess {Nubmer} value  得分
         * @apiSuccess {Nubmer} type  1上 2平 3下
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
         * @apiSuccess {Nubmer} value  数据的值
         * @apiSuccess {String} name  2018
         * @apiSuccess {Object} areaStyle  areaStyle: { opacity: 0.5}
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
         * @api {get} getzhibiao 数据分析
         * @apiName 指标分析
         * @apiGroup index
        * @apiParam {Number} type  1.总体排行 2.权力事项 3依申请事项 4.公共服务事项 5.进驻部门 6.指南要素
          
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Array} data>cityList  城市名称
         * @apiSuccess {Array} data>series  2018
         * @apiSuccess {String} data>series>name  线的名称
         * @apiSuccess {String} data>series>data  数据值
          
         */
        Mock.mock(url_eer + 'getshujufenxi', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    cityList:['太原', '大同', '朔州', '阳泉', '长治', '忻州', '吕梁', '晋中', '临汾', '运城', '晋城'],
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
         * @api {get} ztgs 总体概况
         * @apiName 总体概况
         * @apiGroup index
         * @apiSuccess {Nubmer} code  状态码
         * @apiSuccess {String} msg  备注
         * @apiSuccess {Object} data  数据
         * @apiSuccess {Nubmer} data>ztgsa  省级政务服务平台
         * @apiSuccess {Nubmer} data>ztgsab  进驻部门数量
        * @apiSuccess {Nubmer} data>ztgsac  行政权力事项
        * @apiSuccess {Nubmer} data>ztgsad  依申请事项
        * @apiSuccess {Nubmer} data>ztgsae  办理时限压缩
        * @apiSuccess {Nubmer} data>ztgsaf  证照信息
         */
        Mock.mock(url_eer + 'getztgs', function (options) {
            return Mock.mock({
                code: 0,
                msg: '成功',
                data: {
                    ztgsa:'@integer(1, 40)',
                    ztgsb:'@integer(1, 4000)',
                    ztgsc:'@integer(1, 40000)',
                    ztgsd:'@integer(1, 40000)',
                    ztgse:"30.70%",
                    ztgsf:'8.79亿'
                }
            })

        })


    }

}
