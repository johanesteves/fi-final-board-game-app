import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import boardgames from './reducers/boardgames'


const reducers = combineReducers({
    boardgames
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
);
