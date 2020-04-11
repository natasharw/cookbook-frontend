import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './reducers/common';
import home from './reducers/home';

export default combineReducers({
    common,
    home,
    router: routerReducer
});