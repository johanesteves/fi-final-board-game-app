import React, {Component} from 'react';
import './App.css'
import HomePage from './HomePage'
import BoardGameContainer from '../containers/BoardGameContainer';
import BoardGameSearchContainer from "../containers/BoardGameSearchContainer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import BoardGameForm from "../containers/BoardGameForm";
import BoardGameShow from "../containers/BoardGameShow";

class App extends Component{
    render(){
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/boardgames" component={ BoardGameContainer } />
                    <Route exact path="/search" component={ BoardGameSearchContainer } />
                    <Switch>
                        <Route path={`/boardgames/new`} component={ BoardGameForm } />
                        <Route path={`/boardgames/:boardGameId`} component={ BoardGameShow }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App