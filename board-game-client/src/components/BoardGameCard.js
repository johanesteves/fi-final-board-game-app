import React from 'react';

const BoardGameCard = (props) => {
    return (
        <div>
            <li>{props.name}</li>
            <li>{props.weight}</li>
            <li>{props.rank}</li>
        </div>
    )
};

export default BoardGameCard