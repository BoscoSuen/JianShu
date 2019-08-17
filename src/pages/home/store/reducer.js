// 只和header有关的store
// 数据要变成immutable对象
import { fromJS} from "immutable";

const defaultState = fromJS ({
    topicList: [{
        id: 1,
        title: "Society",
        imgUrl: "http://wx2.sinaimg.cn/crop.0.27.1123.632/90eb2137ly1fyqdrwqx6pj20v70j1jvo.jpg"
    },{
        id: 2,
        title: "Movie",
        imgUrl: "http://pic21.nipic.com/20120514/2786001_184549473000_2.jpg"
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}