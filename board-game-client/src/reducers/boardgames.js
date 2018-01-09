export default (state=[], action) => {
    debugger;
    switch(action.type){
        case 'GET_BOARD_GAMES':
            return action.boardgames;
        default:
            return state;
    }
};
