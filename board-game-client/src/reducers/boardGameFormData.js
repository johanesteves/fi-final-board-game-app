export default (state=[], action) => {
    switch(action.type){
        case 'UPDATE_FORM':
            return action.boardGameFormData;
        default:
            return state;
    }
}
