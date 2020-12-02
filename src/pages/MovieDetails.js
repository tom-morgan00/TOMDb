import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie, clearMovie } from '../actions';
import Loader from '../components/Loader/Loader';
import MessageBox from '../components/MessageBox/MessageBox';
import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount() {
    // this.props.setLoading();
    this.props.getMovie(this.props.movieID);
  }

  componentWillUnmount() {
    this.props.clearMovie();
  }

  render() {
    // console.log(this.props);
    const { movie, loading, errorMessage } = this.props;
    return (
      <div className="movie-details">
        {loading ? (
          <Loader />
        ) : errorMessage ? (
          <MessageBox title={errorMessage} text={`Couldn't find Movie`} />
        ) : (
          <div className="movie-details">
            <header className="movie-details__header container">
              <h1>{`${movie.title} (${movie.year})`}</h1>
            </header>

            <section className="movie-details__info container">
              <div className="movie-details__stripe">
                <div className="movie-details__rating">
                  <i className="fas fa-registered" /> {`Rated: ${movie.rated}`}
                </div>
                <div className="movie-details__released">
                  <i className="fas fa-calendar-day" />{' '}
                  {`Released: ${movie.released}`}
                </div>
                <div className="movie-details__released">
                  <i className="fas fa-clock" /> {`Runtime: ${movie.runtime}`}
                </div>
              </div>
              <div className="row">
                <div
                  className="col movie-details__image"
                  style={{ width: '100%' }}
                >
                  <img src={movie.poster} alt={movie.title} />
                </div>
                <div className="col movie-details__text">
                  <h4>Movie Info</h4>
                  <ul>
                    <li>{`Director: ${movie.director}`}</li>
                    <li>{`Writers: ${movie.writer}`}</li>
                    <li>{`Actors: ${movie.actors}`}</li>
                    <li>{`Production: ${movie.production}`}</li>
                    <li>{`Plot: ${movie.plot}`}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movie.movie,
    movieID: ownProps.match.params.id,
    errorMessage: state.movie.errorMessage,
    loading: state.movie.loading,
  };
};

export default connect(mapStateToProps, { getMovie, clearMovie })(MovieDetails);
