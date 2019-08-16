// 只和header有关的store
// 数据要变成immutable对象
import * as constants from './constants';
import { fromJS} from "immutable";

const defaultState = fromJS ({
    focused: false,
    mouseIn: false,
    list: [],   // immutable array
    page: 1,   // 当前页
    totalPage: 1  // 一共多少页
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);  // 返回一个全新的immutable对象
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                'list': action.data,
                'totalPage': action.totalPage // data也要是immutable
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}