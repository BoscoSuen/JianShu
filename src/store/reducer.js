import {combineReducers} from "redux-immutable";  // reducer 拆分
import { reducer as headReducer } from '../common/header/store';

const reducer = combineReducers({
    header: headReducer
});

export default reducer;