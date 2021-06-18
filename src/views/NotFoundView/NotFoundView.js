import React from 'react';
import NotFoundImg from '../../images/404-error.png';

export default function NotFoundView() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you requested could not be found on this server.</p>
      <p>That's all that we know.</p>
      <img alt="Page-not-found" src={NotFoundImg}></img>
    </div>
  );
}
