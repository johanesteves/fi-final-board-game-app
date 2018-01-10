import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBoardGame } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";
import BoardGameSearchForm from "../components/BoardGameSearchForm";


class BoardGameSearchContainer extends Component{

    handleOnChange = (event) => {
        this.props.searchBoardGame(event.target.value);
    };

    render(){
        return(
            <div className="container">
                <BoardGameSearchForm handleOnChange={this.handleOnChange}/>
                <BoardGameList boardgames={this.props.searchResults}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        searchResults: state.boardgames
    })
};


export default connect(mapStateToProps, { searchBoardGame })(BoardGameSearchContainer);