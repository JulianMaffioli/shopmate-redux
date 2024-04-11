import { useDispatch, useSelector } from "react-redux"; //Hook to perfom actions included on cartSlice
import { add, remove } from "../store/cartSlice"; //Using the Add and remove functions from the slice
import "./ProductCard.css";
import { useState, useEffect } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);

  const cartList = useSelector((state) => state.cartState.cartList);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id);
    productInCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, id]);

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>${price}</p>
        { isInCart ? (<button className='remove' onClick={() => dispatch(remove(product))}>Remove</button>): (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}

        
      </div>
    </div>
  );
};
