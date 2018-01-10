import React from 'react';
import BoardGameCard from '../components/BoardGameCard';

const BoardGameList = (props) => {
    return (
        <div className="album text-muted">
            <div className="container">
                <div className="row">
            {props.boardgames.map((boardgame) => {
                return (<BoardGameCard key={boardgame.id} boardgame={boardgame}/>)
            })}
                </div>
            </div>
        </div>
    )
};

export default BoardGameList;