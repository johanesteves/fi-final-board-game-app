import React from 'react';
import { connect } from 'react-redux';

const  BoardGameShow = props => {
    return (
        <div className="container-fluid bg-1 text-center">
            <h3 className="margin">{props.boardGame.name}</h3>
            <img src={props.boardGame.img_url} className="img-responsive rounded-circle margin" alt={props.boardGame.name} width="350" height="350" />
            <p>
                <small>
                    <em>Release Year: </em> {props.boardGame.release_year} <br />
                    <em>Weight: </em> {props.boardGame.weight} <br />
                    <em>Rating: </em> {props.boardGame.rating}
                </small>
            </p>
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {
    const boardGame = state.boardgames.find(boardgame => boardgame.id === parseInt(ownProps.match.params.boardGameId, 10));

    if (boardGame){
        return { boardGame}
    }else{
        return {boardGame: {}}
    }
};

export default connect(mapStateToProps)(BoardGameShow);
