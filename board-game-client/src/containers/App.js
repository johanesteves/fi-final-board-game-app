import React, {Component} from 'react';
import './App.css'
import BoardGames from './BoardGames'
import BoardGameForm from "./BoardGameForm";
import BoardGameList from './BoardGameList';

class App extends Component{
    render(){
        return (
            <div className="App">
                <BoardGames/>
                <br></br>
                <BoardGameForm/>
                <br></br>
                <BoardGameList/>
            </div>
        )
    }
}

export default App