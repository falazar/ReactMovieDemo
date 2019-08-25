import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './MovieTable.css';


// Loop over and display each div.
const MovieDivs = props => {

    if (props.movieData.length === 0) {
        return <div> You have no movies yet in this list. Search for some to add first. </div>
    }

    const rows = props.movieData.map((row, index) => {
        return (
            <div className="movie-div" key={index}>
                <Link className="movie-link" to={"/movie/" + row.id + "/" + row.name.replace(/\s/g, '-')}>
                    <img src={row.poster} alt={row.name + ' poster image'} width="182"/>
                    {row.name}
                </Link>
            </div>
        )
    });

    return <div>{rows}</div>
};


class MovieTable extends Component {

    render() {
        const {loaded, movieData} = this.props;

        if (!loaded) {
            return <div/>
        }

        return (
            <div id="movieList">
                <MovieDivs movieData={movieData}/>
            </div>
        )
    }


}

export default MovieTable