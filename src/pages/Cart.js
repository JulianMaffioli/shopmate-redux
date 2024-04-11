import { useSelector } from "react-redux"; //Hook to use the variables inside cartSlice (cartList and Total)
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");

  const products = useSelector(state => state.cartState.cartList); //Using the specific slice for cart on store.js
  const total = useSelector(state => state.cartState.total); //Using the specific slice for cart on store.js

  return (
    <main>
      <section className='cart'>
        <h1>Cart Items: {products.length} / Total: ${total}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
