function DetailedItem() {
  return (
    <section className="my-12 flex justify-center gap-8 p-6">
      <img
        src="/loading.svg"
        alt="Loading item..."
        className="max-w-60% md:max-w-[500px]"
      />
      <div className="flex flex-col gap-4 justify-center">
        <div>
            <h3>Category</h3>
            <h1 className="text-6xl">Item Name</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          quisquam harum excepturi numquam. Rerum culpa deserunt repudiandae,
          veritatis minima adipisci, similique eaque consectetur, numquam ea
          sapiente in eligendi dicta aliquam.
        </p>
        <p>Rating: <span className="font-bold">3.9</span></p>
        <p>Price: <span className="font-bold">$19.99</span></p>
        <button className="border-2 border-black py-2 px-4 hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default DetailedItem;
