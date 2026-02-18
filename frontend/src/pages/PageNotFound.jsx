import { Link } from 'react-router';
import './PageNotFound.css';
import { Header } from '../components/Header';

export function PageNotFound ({ cart }) {
  return (
    <>
      <title>Page Not Found</title>

      <Header cart={cart}/>

      <div className='error-container'>
        <p className='error-text'>ERROR</p>
        <p className='error-code'>404</p>
        <p className='error-description'>Page Not Found</p>
        <Link to="/" className='home-button'>Back To Home Page</Link>
      </div>
    </>
  );
}