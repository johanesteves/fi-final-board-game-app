import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoardGames } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";
import BoardGameForm from './BoardGameForm'
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class BoardGameContainer extends Component{

    componentDidMount() {
        this.props.getBoardGames()
    }

    render(){
        return(
            <div>
                <BoardGameForm />
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