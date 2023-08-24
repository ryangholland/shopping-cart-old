function Home() {
  return (
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
  );
}

export default Home;
