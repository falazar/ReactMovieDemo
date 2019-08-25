import React, {Component} from 'react'
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            searchTitle: '',
            searchActor: '',
            searchGenre: '',
            searchGenre2: '',
            minRating: '5',
            maxRating: '10',
        };

        this.state = this.initialState
    }

    render() {
        const {searchTitle, searchActor, searchGenre, searchGenre2, minRating, maxRating} = this.state;

        return (
            <form>
                <br/>
                <br/>
                <label> Search for Movies: </label>
                <br/>
                <label>Title: </label>
                <input
                    type="text"
                    name="searchTitle"
                    defaultValue={searchTitle}
                    onChange={this.handleChange}/>
                <br/>
                <label>Actor: </label>
                <input
                    type="text"
                    name="searchActor"
                    defaultValue={searchActor}
                    onChange={this.handleChange}/>
                <br/>
                <label>Genre: </label>
                <input
                    type="text"
                    name="searchGenre"
                    defaultValue={searchGenre}
                    onChange={this.handleChange}/>
                <br/>
                <label>Genre 2: </label>
                <input
                    type="text"
                    name="searchGenre2"
                    defaultValue={searchGenre2}
                    onChange={this.handleChange}/>
                <br/>
                <label>Min Rating: </label>
                <input
                    type="text"
                    name="minRating"
                    defaultValue={minRating}
                    onChange={this.handleChange}/>
                <br/>
                <label>Max Rating: </label>
                <input
                    type="text"
                    name="maxRating"
                    defaultValue={maxRating}
                    onChange={this.handleChange}/>
                <br/>

                <input type="button" value="Search" onClick={this.submitForm}/>
            </form>
        );
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }
}

export default SearchForm;
