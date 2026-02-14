import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import homeIcon from '../../assets/images/home-favicon.png';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={homeIcon} />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}