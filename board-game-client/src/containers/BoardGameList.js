import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardGameCard from '../components/BoardGameCard';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class BoardGameList extends Component{
    render(){
        return(
            <div>
                <BoardGameCard/>
            </div>
        )
    }
}

export default BoardGameList