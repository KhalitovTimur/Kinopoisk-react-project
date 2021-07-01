import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component{

    state = {
        movies: []
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=d3f86cad&s=matrix`)
            .then( (response) => response.json())
            .then( (data) => this.setState({movies: data.Search}) )
            
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=d3f86cad&s=${str}`)
            .then( (response) => response.json())
            .then( (data) => this.setState({movies: data.Search}) )
    }

    render() {
        const {movies} = this.state;
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovies={this.searchMovies}/>
                    {
                        movies.length ? <MovieList  movies={this.state.movies} /> : <Preloader/>
                    }
        

                </div>
            </div>
        )
    }
}

export default Main;
