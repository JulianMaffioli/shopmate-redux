import { useDispatch } from "react-redux"; //Hook to perfom actions included on cartSlice
import { remove } from "../store/cartSlice"; //using the remove function from the slice

import "./CartCard.css";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();
  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=> dispatch(remove(product))}>Remove</button>
      </div>
  )
}
