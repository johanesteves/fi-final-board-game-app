import React, {Component} from 'react';
import './App.css'
import BoardGames from './BoardGames'
import BoardGameForm from "./BoardGameForm";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            boardgames: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/board_games')
            .then(response => response.json())
            .then(boardgames => this.setState({boardgames}))
    }

    render(){
        console.log(this.state.boardgames);
        return (
            <div className="App">
                <BoardGames/>
                <br></br>
                <BoardGameForm/>
            </div>
        )
    }
}

export default App