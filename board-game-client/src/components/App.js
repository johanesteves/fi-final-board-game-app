import React, {Component} from 'react';
import './App.css'
import BoardGames from '../containers/BoardGames'
import BoardGameContainer from '../containers/BoardGameContainer';
import BoardGameSearchContainer from "../containers/BoardGameSearchContainer";

class App extends Component{
    render(){
        return (
            <div className="App">
                <BoardGames/>
                <br></br>
                <BoardGameContainer/>
                <BoardGameSearchContainer/>
            </div>
        )
    }
}

export default App