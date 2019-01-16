import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TopMenu from './components/TopMenu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu />
                <Home />
            </div>
        );
    }
}

export default App;
