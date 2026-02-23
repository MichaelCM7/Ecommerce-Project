import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header';
import './HomePage.css';
import homeIcon from '../../assets/images/home-favicon.png';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  // console.log(searchParams);
  // console.log(search);

  async function getSearchData() {
    const response = await axios.get(`/api/products?search=${search}`);
    setProducts(response.data);
  }

  async function getHomeData () {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  }

  if (search) {
      getSearchData();
    } else {
      getHomeData();
    }

  // useEffect(() => {
  //   if (search) {
  //     getSearchData();
  //   } else {
  //     getHomeData();
  //   }
  // }, [search]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={homeIcon} />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}