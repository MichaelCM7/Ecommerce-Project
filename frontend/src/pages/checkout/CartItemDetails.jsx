import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
  const [ isUpdating, setIsUpdating ] = useState(false);
  const [ quantity, setQuantity ] = useState(cartItem.quantity);

  async function deleteCartItem () {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  function saveInputQuantity (event) {
    setQuantity(event.target.value);
  }

  async function updateCart () {
    await axios.put(`/api/cart-items/${cartItem.productId}`,{
      quantity: Number(quantity)
    });
    await loadCart();
  }

  function updateCartItemQuantity () {
    if (isUpdating) {
      updateCart();
      setIsUpdating(false);
    } else {
      setIsUpdating(true);
    }
  }

  return (
    <>
      <img 
        className="product-image"
        src={cartItem.product.image} 
      />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: <input 
                        type="text" 
                        className="quantity-input" 
                        value={quantity}
                        onChange={saveInputQuantity}
                        style={{display: isUpdating? "inline-block" : "none"}} 
                      />
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
          </span>
          <span className="update-quantity-link link-primary" onClick={updateCartItemQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}