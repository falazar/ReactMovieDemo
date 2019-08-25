import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar'
import MovieList from './components/MovieList'
import Movie from './components/Movie'
import About from './components/About'


class App extends Component {
    state = {
        userId: 23 // global hard coded value until login area is created.
    };

    render() {
        return (
            <BrowserRouter>
                <div className="container">

                    <NavBar title="Flicks Movies"/>

                    <Route exact path="/"            render={() => <MovieList userId={this.state.userId} view="all" title="All Movies"/>}/>
                    <Route path="/watchlistmovies"   render={() => <MovieList userId={this.state.userId} view="watchlist" title="Watchlist Movies"/>}/>
                    <Route path="/seenmovies"        render={() => <MovieList userId={this.state.userId} view="seen" title="Seen Movies"/>}/>
                    <Route path="/intheaters"        render={() => <MovieList userId={this.state.userId} view="intheaters" title="In Theaters"/>}/>
                    <Route path="/about" component={About}/>

                    <Route path="/movie/:handle" render={(props) => <Movie handle={props.match.params.handle} userId={this.state.userId}/>}/>

                </div>
            </BrowserRouter>
        )
    }
}


export default App;
