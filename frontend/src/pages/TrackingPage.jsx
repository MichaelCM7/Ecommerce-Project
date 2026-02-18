import './TrackingPage.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Link, useParams } from 'react-router';
import trackingIcon from '../assets/images/tracking-favicon.png';

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }

    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const selectedProduct = order.products.find((product) => {
    return productId === product.productId
  });

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={trackingIcon} />
      <title>Tracking</title>

      <Header cart={cart} />

      <div class="tracking-page">
        <div class="order-tracking">
          <Link class="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div class="delivery-date">
            Arriving on {dayjs(selectedProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div class="product-info">
            {selectedProduct.product.name}
          </div>

          <div class="product-info">
            Quantity: {selectedProduct.quantity}
          </div>

          <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

          <div class="progress-labels-container">
            <div class="progress-label">
              Preparing
            </div>
            <div class="progress-label current-status">
              Shipped
            </div>
            <div class="progress-label">
              Delivered
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}