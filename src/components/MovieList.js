import Movie from './Movie';
import './MovieList.css';

const MovieList = (props) => {
    const {movies = []} = props;
    return (
        <div className="movies">
            {
                movies.map( (movie) => {
                    return (
                        <Movie key={movie.imdbID} {...movie}/>
                    )
                } )
            }

        </div>
    )
}

export default MovieList;