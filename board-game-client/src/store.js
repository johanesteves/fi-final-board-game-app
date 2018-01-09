import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const boardGameReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_BOARD_GAME':
            return action.boardgames;
        default:
            return state;
    }
};

const reducers = combineReducers({
    boardgames: boardGameReducer
});

const middleware = [thunk];


export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
);
