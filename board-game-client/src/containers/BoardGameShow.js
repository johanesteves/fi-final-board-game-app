import React from 'react';
import { connect } from 'react-redux';
import { getBoardGames } from '../actions/boardgames';


class  BoardGameShow extends React.Component{

    componentDidMount() {
        this.props.getBoardGames()
    }

    render(){
    return (
        <div className="container-fluid bg-1 text-center">
            <h3 className="margin">{this.props.boardGame.name}</h3>
            <img src={this.props.boardGame.img_url} className="img-responsive rounded-circle margin" alt={this.props.boardGame.name} width="350" height="350" />
            <p>
                <small>
                    <em>Release Year: </em> {this.props.boardGame.release_year} <br />
                    <em>Weight: </em> {this.props.boardGame.weight} <br />
                    <em>Rating: </em> {this.props.boardGame.rating}
                </small>
            </p>
        </div>
    )}
}


const mapStateToProps = (state, ownProps) => {
    const boardGame = state.boardgames.find(boardgame => boardgame.id === parseInt(ownProps.match.params.boardGameId, 10));

    if (boardGame){
        return { boardGame}
    }else{
        return {boardGame: {}}
    }
};

export default connect(mapStateToProps, {getBoardGames})(BoardGameShow);
