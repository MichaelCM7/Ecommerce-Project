import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import './Header.css';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import logo from '../../public/images/lumen-full.png';
import logoMobile from '../../public/images/lumen.png';

export function Header({ cart }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const [search, setSearch] = useState(searchText || '');

  function searchNavigation () {
    navigate(`/?search=${search}`)
  }

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  })

  function saveSearchText(event) {
    setSearch(event.target.value)
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={logo} />
          <img className="mobile-logo"
            src={logoMobile} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" onChange={saveSearchText} />

        <button className="search-button" onClick={searchNavigation}>
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}