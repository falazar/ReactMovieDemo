import React, {Component} from 'react';
import './Movie.css';

// Movie details page, showing large image, description,
// And options to put movie in various lists.
class Movie extends Component {

    state = {
        movie: [],
        savedMessage: ""
    };

    constructor(props) {
        super(props);

        // Initial call to get display list.
        this.handleLoad({
            userId: this.props.userId,
            movieId: this.props.handle,
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    // Update our state variable on any changes.
    onChange(e) {
        const {name, value} = e.target;
        let newState = Object.assign({}, this.state);
        newState.movie[name] = value;
        this.setState(newState);
    }


    // Main render function, display our component.
    render() {
        const movie = this.state.movie;

        // dont show if we have no data.
        if (!movie || !movie.name) {
            return null;
        }

        // List out our actors array here.
        let actors = "Unknown";
        if (movie.actors && movie.actors.length > 0) actors = movie.actors.map((actor) =>
            <li key={actor.id}>{actor.name}</li>
        );

        return (
            <div className="moviedata-container">

                <table>
                    <tbody>
                    <tr valign="top">
                        <td>
                            <img src={movie.poster} alt={movie.name + ' poster image'} width='250'/>
                        </td>
                        <td>
                            <h2 align="center"> {movie.name} </h2>

                            <label> Release Date: </label> {movie.releaseDate} <br/>

                            <label> Description: </label> {movie.description} <br/>

                            <label> Genres: </label> {movie.genres} <br/>

                            <a href={"https://www.imdb.com/title/tt" + movie.imdbID} target="_blank"
                               rel="noopener noreferrer">
                                Link to IMDB</a>
                            <br/>

                            <label> Opening Weekend: </label>

                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(movie.openingWeekend)}
                            <br/>

                            <label> Actors: </label> <br/>
                            {actors}
                            <br/>

                            <label>IMDB Rating: </label> {movie.rating} <br/>
                            <br/>


                            <form onSubmit={this.handleSubmit}>
                                <label>Your Rating: </label>
                                <input name="userRating" id="userRating" value={this.state.movie.userRating}
                                       onChange={this.onChange}/> <br/>

                                <label> Your Review: </label> <br/>
                                <textarea name="userReview" id="userReview" cols="50" rows="6"
                                          value={this.state.movie.userReview}
                                          onChange={this.onChange}/>
                                <br/>

                                <label> Move to list: </label>
                                <select name="status" id="status"
                                        value={this.state.movie.status}
                                        onChange={this.onChange}>
                                    <option value="none">None</option>
                                    <option value="watchlist">Watchlist</option>
                                    <option value="seen">Seen</option>
                                </select>
                                <br/>

                                <input type="submit" value="Save"/> <br/>

                                {this.state.savedMessage}

                            </form>
                            <br/>

                        </td>
                        <td>
                            <label> Trailer: </label> <br/>
                            <iframe title="movieTrailerIframe"
                                    src={movie.urlTrailer}
                                    width='560' height='315' frameBorder='0' allowFullScreen>
                            </iframe>
                            <br/>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <div align="center">
                    <label> Full movie: </label> <br/>
                    <iframe title="fullMovieIframe"
                            src="https://vidcloud.icu/streaming.php?id=MjI1ODg1&title=First+Man&typesub=SUB&sub=L2ZpcnN0LW1hbi9maXJzdC1tYW4udnR0&cover=Y292ZXIvZmlyc3QtbWFuLWxhcmdlLnBuZw=="
                            style={{background: '#232323'}} frameBorder='0' marginWidth='0' marginHeight='0'
                            scrolling='NO'
                            allowFullScreen
                            width='1000' height='650'>
                    </iframe>
                    <br/>
                </div>

            </div>
        )
    }


    // Save the users review and details now.
    handleSubmit(event) {
        let self = this;

        event.preventDefault();

        let formData = new URLSearchParams();
        formData.append('action', 'save');
        formData.append('userId', this.props.userId);
        formData.append('movieId', this.state.movie.id);
        const data = new FormData(event.target);
        data.forEach(function (value, key) {
            formData.append(key, value);

        });

        fetch('http://falazar.com/projects/reactDemoServer/server.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // TODO check for errs.

            // On Save add a notice to user.
            self.setState({savedMessage: "The review was saved."});
        });

    }


    // Movie Initial Load Data.
    handleLoad = movie => {
        const self = this;  // alias to this.

        // On submit of the form, send a POST request with the data to the server.

        let formData = new URLSearchParams();
        formData.append('action', 'show');
        formData.append('userId', this.props.userId.toString());
        formData.append('movieId', movie.movieId);

        fetch('http://falazar.com/projects/reactDemoServer/server.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        }).then(function (response) {
            return response.json();
        }).then(function (movieData) {

            // TODO check for empty returns and errs.

            // Clear vars if unknown.
            if (!movieData.userRating) movieData.userRating = '';
            if (!movieData.userReview) movieData.userReview = '';
            if (!movieData.status) movieData.status = '';

            // Add our new movie list to our state now.
            self.setState({movie: movieData});
        });
    };

}

export default Movie;