import React, { Component } from 'react';
import MovieList from '../Movie/MovieList';
import SearchBar from '../SearchBar/SearchBar';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import './Results.css';
import MessageBox from '../MessageBox/MessageBox';

class Results extends Component {
  onSearch = (query) => {
    // console.log(query);
    // this.props.setLoading();
    this.props.getMovies(query);
  };

  render() {
    const { movies, searchTerm, loading, errorMessage } = this.props;
    return (
      <div className="results">
        <SearchBar onSearch={this.onSearch} />
        {movies.length ? (
          <MovieList movies={movies} searchTerm={searchTerm} />
        ) : (
          <MessageBox
            loading={loading}
            title={errorMessage ? errorMessage : 'No Results Yet'}
            text={
              errorMessage
                ? `No Results found for "${searchTerm}"`
                : 'Search for Movies and TV Shows'
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.home.movies,
    loading: state.home.loading,
    searchTerm: state.home.searchTerm,
    errorMessage: state.home.errorMessage,
  };
};

export default connect(mapStateToProps, { getMovies })(Results);
