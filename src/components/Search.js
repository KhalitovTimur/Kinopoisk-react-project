import React from 'react';
import './Search.css';

class Search extends React.Component{

    state = {
        search: ""
    }

    handlerKey = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }

    render() {
        return (
            <div className="search">
                <input 
                    type="search"
                    placeholder="search" 
                    value={this.state.search}
                    onChange={ (event) => this.setState({search: event.target.value}) }
                    onKeyDown={this.handlerKey}/>
                    <button 
                        className="btn"
                        onClick={() => this.props.searchMovies(this.state.search) }
                        >Search</button>
            </div>
        )
    }
}

export default Search;