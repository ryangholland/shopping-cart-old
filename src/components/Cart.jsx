import StoreItem from "./StoreItem";
import CartItem from "./CartItem";

function Cart() {
  return (
    <section className="my-12 flex items-center justify-center gap-8 p-6 flex-col">
      <CartItem />
      <CartItem />
      <CartItem />
      <hr className="border-black w-full" />
      <h1 className="text-4xl">Total (X Items): $99.99</h1>
      <button className="border-2 border-black py-3 px-6 hover:bg-black hover:text-white">
        Proceed to Checkout
      </button>
    </section>
  );
}

export default Cart;
