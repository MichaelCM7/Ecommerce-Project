import { Link } from 'react-router';
import './PageNotFound.css';

export function PageNotFound () {
  return (
    <>
      <title>Page Not Found</title>

      <div className='error-container'>
        <p className='error-text'>ERROR</p>
        <p className='error-code'>404</p>
        <p className='error-description'>Page Not Found</p>
        <Link to="/" className='home-button'>Back To Home Page</Link>
      </div>
    </>
  );
}