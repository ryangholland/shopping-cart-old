function App() {
  return (
    <main className="md:w-[760px] lg:w-[1000px] xl:w-[1280px] p-6">
      <nav className="flex items-center justify-between px-6 py-4 gap-12 flex-col md:flex-row">
        <h1 className="text-4xl font-bold">ShopMart</h1>
        <ul className="flex gap-8 text-md flex-col sm:flex-row">
          <li><a href="#" className="underline-offset-4 hover:underline">All</a></li>
          <li><a href="#" className="underline-offset-4 hover:underline">Women's</a></li>
          <li><a href="#" className="underline-offset-4 hover:underline">Men's</a></li>
          <li><a href="#" className="underline-offset-4 hover:underline">Jewelry</a></li>
          <li><a href="#" className="underline-offset-4 hover:underline">Electronics</a></li>
        </ul>
        <a href="#"><img src="/cart.svg" alt="Cart" className="border-2 border-white max-w-[50px] hover:border-black" /></a>
      </nav>
      <hr className="border-black" />
      <section className="my-12 flex justify-center gap-16 items-center mx-4">
        <img
          src="/store.svg"
          alt="Storefront"
          className="max-w-[60%] md:max-w-[500px]"
        />
        <button className="border-2 border-black py-6 px-10 hover:bg-black hover:text-white">
          Shop All Items
        </button>
      </section>
      <hr className="border-black" />
      <footer className="flex py-4 gap-2 items-center justify-center ">
        <div className="self-end">Created by Ryan Holland </div>
        <img src="/github.svg" alt="Github" className="max-h-[25px]" />
      </footer>
    </main>
  );
}

export default App;
