import React, {Component} from 'react';
import MovieTable from './MovieTable'
import SearchForm from './SearchForm'
import './MovieList.css';


class MovieList extends Component {

    state = {
        movies: [],
        loaded: false,
    };

    constructor(props) {
        super(props);

        // Initial call to get display list.
        this.handleSubmit({
            view: this.props.view,
            searchTitle: "",
            searchActor: "",
            searchGenre: "",
            searchGenre2: "",
            minRating: "5",
            maxRating: "10",
        });
    }

    render() {
        return (
            <div className="movielist-container">
                <SearchForm handleSubmit={this.handleSubmit}/>
                <h2 align="center"> {this.props.title} </h2>
                <MovieTable userId={this.props.userId} loaded={this.state.loaded} movieData={this.state.movies}/>
            </div>
        )
    }

    // Search Form Submit
    handleSubmit = searchParams => {
        const self = this;  // alias to this.

        // On submit of the form, send a POST request with the data to the server.
        let formData = new URLSearchParams();
        formData.append('action', 'search');
        formData.append('userId', this.props.userId.toString());
        formData.append('view', this.props.view);
        formData.append('searchTitle', searchParams.searchTitle);
        formData.append('searchActor', searchParams.searchActor);
        formData.append('searchGenre', searchParams.searchGenre);
        formData.append('searchGenre2', searchParams.searchGenre2);
        formData.append('minRating', searchParams.minRating);
        formData.append('maxRating', searchParams.maxRating);

        fetch('http://falazar.com/projects/reactDemoServer/server.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        }).then(function (response) {
            return response.json();
        }).then(function (movieList) {

            // TODO check for empty returns and errs.

            // Add our new movie list to our state now.
            self.setState({loaded: true, movies: movieList});

        });
    };


}


export default MovieList;
