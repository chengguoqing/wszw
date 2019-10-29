module.exports = {
    baseUrl: './',
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                     require('autoprefixer'),
                    require('postcss-pxtorem')({
                        rootValue: 16,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    devServer: { //跨域 
        open: true, //配置自动启动浏览器
        proxy: {
            '': { //将www.exaple.com印射为/adminconsole
                target: 'http://192.168.1.102:8360', // 接口域名
                changeOrigin: true //是否跨域
            }
        }
    }

}
