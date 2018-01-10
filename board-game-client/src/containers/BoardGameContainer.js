import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoardGames } from '../actions/boardgames';
import BoardGameList from "../components/BoardGameList";
import { Link } from 'react-router-dom';

class BoardGameContainer extends Component{

    componentDidMount() {
        this.props.getBoardGames()
    }

    render(){
        return(
            <div className="container">
                <div className="btn-group">
                    <br />
                    <Link  className="btn btn-outline-danger btn-block" to="/boardgames/new">Add a game</Link>
                </div>
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