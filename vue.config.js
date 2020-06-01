module.exports = {
    baseUrl: './',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: { //跨域 
        open: true, //配置自动启动浏览器
        proxy: {
            '/api/': { //将www.exaple.com印射为/adminconsole
                target: 'http://47.107.107.93:8066', // 接口域名
                changeOrigin: true //是否跨域
            }
        }
    }

}
