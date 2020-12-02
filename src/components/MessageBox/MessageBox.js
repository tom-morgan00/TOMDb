import React from 'react';
import './MessageBox.css';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function MessageBox({ loading, title, text }) {
  return (
    <div className="messagebox">
      {loading ? (
        <Loader />
      ) : (
        <div className="jumbotron bg-dark">
          <h1 className="display-4 text-light">{title}</h1>
          <p className="lead text-light">{text}</p>
        </div>
      )}
    </div>
  );
}

export function MessageBoxButtons({ title, text, goBack }) {
  return (
    <div className="messagebox">
      <div className="jumbotron bg-dark">
        <h1 className="display-4 text-light">{title}</h1>
        <p className="lead text-light">{text}</p>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => goBack()}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Go Back
          </button>

          <Link to="/">
            <button type="button" className="btn btn-secondary btn-lg">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
