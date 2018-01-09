import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBoardGame } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";


class BoardGameSearchContainer extends Component{
    constructor(){
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }
    }

    handleOnChange = (event) => {
        this.setState({
            searchText: event.target.value
        })


    };

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="searchText" className="col-md-4 control-label">Search: </label>
                    <input name="searchText" type="text" onChange={this.handleOnChange} />
                </form>
                <BoardGameList boardgames={this.state.searchResults}/>
            </div>
        )
    }
}

export default BoardGameSearchContainer;