import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardGameCard from '../components/BoardGameCard';
import { getBoardGames } from '../actions/boardgames';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class BoardGameList extends Component{

    componentDidMount() {
        this.props.getBoardGames()
    }

    render(){
        return(
            <div>
                {this.props.boardgames.map((boardgame) => {
                    return (<BoardGameCard key={boardgame.id} boardgame={boardgame}/>)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        boardgames: state.boardgames
    })
};

export default connect(mapStateToProps, { getBoardGames })(BoardGameList);