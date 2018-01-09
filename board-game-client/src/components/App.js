import React, {Component} from 'react';
import './App.css'
import BoardGames from '../containers/BoardGames'
import BoardGameForm from "../containers/BoardGameForm";
import BoardGameContainer from '../containers/BoardGameContainer';

class App extends Component{
    render(){
        return (
            <div className="App">
                <BoardGames/>
                <br></br>
                <BoardGameContainer/>
            </div>
        )
    }
}

export default App