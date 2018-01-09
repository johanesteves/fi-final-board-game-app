import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBoardGame } from '../actions/boardgames'


class BoardGameForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            rating: 0.0,
            rank: 0,
            img_url: '',
            release_year: 0,
            weight: 0.00
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        const boardgame = Object.assign({}, this.state);
        this.props.createBoardGame(boardgame);
        this.props.history.push('/boardgames');
    };


    render(){
        const { name, rating, release_year, img_url, weight } = this.props.boardGameFormData;

        return(
            <div className="container">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name" className="col-md-4 control-label">Name</label>
                    <input name="name" type="text"  value={name} onChange={this.handleOnChange}/>
                    <br></br>
                    <label htmlFor="rating" className="col-md-4 control-label">Rating</label>
                    <input name="rating" type="number" value={rating} step="0.5" max="10" min="0" onChange={this.handleOnChange}/>
                    <br></br>
                    <label htmlFor="img_url" className="col-md-4 control-label">Image URL</label>
                    <input name="img_url" type="text" value={img_url} onChange={this.handleOnChange}/>
                    <br></br>
                    <label htmlFor="release_year" className="col-md-4 control-label">Release Year</label>
                    <input name="release_year" type="number" value={release_year} min="1990" max="2018" step="1" onChange={this.handleOnChange}/>
                    <br></br>
                    <label htmlFor="weight" className="col-md-4 control-label">Weight</label>
                    <input name="weight" type="number" value={weight} step="0.5" max="5" min="0" onChange={this.handleOnChange}/>
                    <br></br>
                    <input  type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        boardGameFormData: state.boardGameFormData
    })
};

export default connect(mapStateToProps, { createBoardGame })(BoardGameForm);