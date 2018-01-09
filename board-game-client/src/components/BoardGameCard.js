import React from 'react';

const BoardGameCard = (props) => {
    return (
        <div>
            <li>Name: {props.boardgame.name}</li>
            <li>Weight: {props.boardgame.weight}</li>
            <li>Rank: {props.boardgame.rank}</li>
            <br></br>
        </div>
    )
};

export default BoardGameCard