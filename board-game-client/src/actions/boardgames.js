const setBoardGames = boardgames => {
    return {
        type: 'GET_BOARD_GAMES',
        boardgames
    }
};

const addBoardGame = boardgame => {
    return {
        type: 'ADD_BOARD_GAME',
        boardgame
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

export const createBoardGame = boardgame => {
    return dispatch => {
        return fetch('http://localhost:3001/api/board_games', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({board_game: boardgame})
        })
            .then(response => response.json())
            .then(boardgame => dispatch(addBoardGame(boardgame)))
    }
};

