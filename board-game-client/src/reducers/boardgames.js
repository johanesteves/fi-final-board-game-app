export default (state=[], action) => {
    switch(action.type){
        case 'GET_BOARD_GAMES':
            return action.boardgames;
        case 'ADD_BOARD_GAME':
            return state.concat(action.boardgame);
        default:
            return state;
    }
};
