import React from 'react';
import Movie from './Movie';
import './MovieList.css';

export default function MovieList({ movies, searchTerm }) {
  return (
    <div className="container">
      <h2 className="results-title">{`Results relating to "${searchTerm}"`}</h2>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 ">
        {movies.length > 0
          ? movies.map((movie) => {
              return (
                <Movie
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  type={movie.Type}
                  year={movie.Year}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
