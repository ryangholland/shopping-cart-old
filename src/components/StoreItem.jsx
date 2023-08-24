function StoreItem() {
  return (
    <div className="border-2 border-black p-6 min-w-[280px] max-w-[280px] grid gap-2 justify-center text-center">
      <h2 className="text-2xl max-w-[180px]">Long Item Title</h2>
      <img
        src="/loading.svg"
        alt="Loading item..."
        className="max-w-[180px] my-4"
      />
      <p>
        Rating: <span className="font-bold">3.9</span>
      </p>
      <p>
        Price: <span className="font-bold">$19.99</span>
      </p>
      <button className="border-2 border-black py-2 px-4 hover:bg-black hover:text-white">
        Add to Cart
      </button>
    </div>
  );
}

export default StoreItem;
