const setBoardGames = boardgames => {
    debugger;
    return {
        type: 'GET_BOARD_GAMES',
        boardgames
    }
};

export const getBoardGames = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/board_games')
            .then(response => response.json())
            .then(boardgames => dispatch(setBoardGames(boardgames)))
            .catch(error => console.log(error))
    }
};

