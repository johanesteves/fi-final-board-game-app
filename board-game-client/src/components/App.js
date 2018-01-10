import React, {Component} from 'react';
import './App.css'
import BoardGames from '../containers/BoardGames'
import BoardGameContainer from '../containers/BoardGameContainer';
import BoardGameSearchContainer from "../containers/BoardGameSearchContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import BoardGameForm from "../containers/BoardGameForm";

class App extends Component{
    render(){
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={ BoardGames } />
                    <Route exact path="/boardgames" component={ BoardGameContainer } />
                    <Route exact path="/search" component={ BoardGameSearchContainer } />
                    <Route exact path="/boardgames/new" component={ BoardGameForm } />
                </div>
            </Router>
        )
    }
}

export default App