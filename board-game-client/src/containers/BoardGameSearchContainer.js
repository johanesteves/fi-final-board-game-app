import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBoardGame } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";


class BoardGameSearchContainer extends Component{
    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            searchText: event.target.value
        });

        this.props.searchBoardGame(event.target.value);

    };

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="searchText" className="col-md-4 control-label">Search: </label>
                    <input name="searchText" type="text" onChange={this.handleOnChange} />
                </form>
                <div><h3>Results:</h3></div>
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