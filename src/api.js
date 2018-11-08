import Mock from 'mockjs';
let url_eer = "http://www.duxinggj_xs.com/"

exports.tets_s = Mock.mock(url_eer + 'msg_e', function (options) {
    return Mock.mock({
        email: '@EMAIL'
    })
});
