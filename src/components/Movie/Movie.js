import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ title, poster, id }) {
  return (
    <div className="movie col mb-4">
      <div id={id} className="card">
        <Link to={`/movie/${id}`}>
          <img className="card-img" src={poster} alt={title} />
        </Link>
      </div>
    </div>
  );
}
