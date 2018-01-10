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
                <h2>Add Board Game</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input name="name" type="text" placeholder="Name" className="form-control col-md-4" value={name} onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rating" className="col-sm-2 col-form-label">Rating</label>
                        <div className="col-sm-10">
                            <input name="rating" type="number" placeholder="0.0" className="form-control col-md-4" value={rating} step="0.5" max="10" min="0" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="img_url" className="col-sm-2 col-form-label">Image URL</label>
                        <div className="col-sm-10">
                            <input name="img_url" type="text" placeholder="www.example.com" className="form-control col-md-4" value={img_url} onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="release_year" className="col-sm-2 col-form-label">Release Year</label>
                        <div className="col-sm-10">
                            <input name="release_year" type="number" placeholder="2017" className="form-control col-md-4" value={release_year} min="1990" max="2018" step="1" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="weight" className="col-sm-2 col-form-label">Weight</label>
                        <div className="col-sm-10">
                            <input name="weight" type="number" placeholder="2.50" className="form-control col-md-4" value={weight} step="0.05" max="5" min="0" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <input  type="submit" className="btn btn-primary"/>
                        </div>
                    </div>
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