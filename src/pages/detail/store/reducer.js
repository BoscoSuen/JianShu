import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    title:'4款需要低调使用的黑科技APP，功能异常强大，请大家谨慎收藏',
    content: '<p><b>1、欧派动漫</b></p><img src="https://upload-images.jianshu.io/upload_images/12594401-b6b589e1f1247ae3.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt=""/><p>欧派动漫是一款完全免费的动漫视频播放软件，功能强大黑科技，提供的动漫资源非常丰富，种类也非常齐全。如热血、奇幻、战斗、搞笑、日常、百合、科幻等等，另外各个国家的动漫都有，视频播放的画面非常清晰稳定，并且没有烦人广告，支持在线缓存等功能。</p><p><b>2、我是开发者</b></p><img src="https://upload-images.jianshu.io/upload_images/12594401-2eb95033dccd1efa.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt=""/><p>我是开发者是一款需要低调的黑科技软件，对于喜欢学习开发的朋友来说非常出色，整个软件简洁无广告。支持Java、C语言、Android、iOS、PHP、H5以及数据库等，资源非常丰富，可以根据自己的需求来学习，值得一提的是，这款软件是完全免费提供的。</p><p><b>3、极速数据恢复</b></p><img src="https://upload-images.jianshu.io/upload_images/12594401-2a79b97a78de2391.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt=""/><p>极速数据恢复是一款非常实用的黑科技APP，功能非常出色，在日常生活中非常有帮助。它支持找回多种不下心误删的数据文件，如微信记录、短信记录、照片、视频、音频、Word文档、Excel表格等等，整个恢复操作非常简单，有需要可以在手机浏览器中搜索找到。</p><p><b>4、硬件助手</b></p><img src="https://upload-images.jianshu.io/upload_images/12594401-540ba579f9ae65bc.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt=""/><p>硬件助手是一款非常出色的黑科技APP，功能非常全面，对于电子工程方面的朋友非常有帮助。里面提供的了多种电子工程方面的知识，如电路图、数据册、拆解评测、电子课程、公式、字典等等，总之各个方面都很全面，整个软件简洁无广告，并且免费使用。</p>'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content: action.content
            })
        default:
            return state;
    }
}