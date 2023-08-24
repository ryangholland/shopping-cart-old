function CartItem() {
  return (
    <div className="flex w-full max-w-[800px] justify-around items-center gap-6 border-2 border-black py-6 px-12">
      <img
        src="/loading.svg"
        alt="Loading item..."
        className="max-w-60% md:max-w-[200px]"
      />
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <h1 className="text-4xl">Item Name</h1>
        </div>
        <p>$19.99</p>
        <div className="flex items-center gap-4">
          <button className="border-2 border-black py-1 px-3 hover:bg-black hover:text-white">
            -
          </button>
          <p>Quantity: 1</p>
          <button className="border-2 border-black py-1 px-3 hover:bg-black hover:text-white">
            +
          </button>
        </div>
        <button className="border-2 border-black py-1 px-3 hover:bg-black hover:text-white">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
