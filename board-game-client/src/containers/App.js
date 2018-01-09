import React, {Component} from 'react';
import './App.css'
import BoardGames from './BoardGames'
import BoardGameForm from "./BoardGameForm";

class App extends Component{
    render(){
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