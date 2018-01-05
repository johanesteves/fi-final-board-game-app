import React, {Component} from 'react';
import './App.css'
import BoardGames from './BoardGames'

class App extends Component{
    render(){
        return (
            <div className="App">
                <BoardGames />
            </div>
        )
    }
}

export default App