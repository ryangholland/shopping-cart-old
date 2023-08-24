function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 gap-12 flex-col md:flex-row">
      <h1 className="text-4xl font-bold">ShopMart</h1>
      <ul className="flex gap-8 text-md flex-col sm:flex-row">
        <li>
          <a href="#" className="underline-offset-4 hover:underline">
            All
          </a>
        </li>
        <li>
          <a href="#" className="underline-offset-4 hover:underline">
            Women's
          </a>
        </li>
        <li>
          <a href="#" className="underline-offset-4 hover:underline">
            Men's
          </a>
        </li>
        <li>
          <a href="#" className="underline-offset-4 hover:underline">
            Jewelry
          </a>
        </li>
        <li>
          <a href="#" className="underline-offset-4 hover:underline">
            Electronics
          </a>
        </li>
      </ul>
      <a href="#">
        <img
          src="/cart.svg"
          alt="Cart"
          className="border-2 border-white max-w-[50px] hover:border-black"
        />
      </a>
    </nav>
  );
}

export default Navbar;
