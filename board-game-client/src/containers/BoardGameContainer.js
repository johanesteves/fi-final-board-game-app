import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoardGames } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";
import { Link } from 'react-router-dom';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class BoardGameContainer extends Component{

    componentDidMount() {
        this.props.getBoardGames()
    }

    render(){
        return(
            <div>
                <Link to="/new">Add a game</Link>
                <BoardGameList boardgames={this.props.boardgames}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        boardgames: state.boardgames
    })
};

export default connect(mapStateToProps, { getBoardGames })(BoardGameContainer);