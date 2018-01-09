import React from 'react';
import BoardGameCard from '../components/BoardGameCard';

const BoardGameList = (props) => {
    return (
        <div>
            {props.boardgames.map((boardgame) => {
                return (<BoardGameCard key={boardgame.id} boardgame={boardgame}/>)
            })}
        </div>
    )
};

export default BoardGameList;