import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import DetailedItem from "./components/DetailedItem";
import Cart from "./components/Cart"
import Footer from "./components/Footer";

function App() {
  return (
    <main className="xl:max-w-[1280px] p-6 m-auto">
      <Navbar />
      <hr className="border-black" />
      {/* <Home />
          <Store />
          <DetailedItem /> */}
      <Cart />
      <hr className="border-black" />
      <Footer />
    </main>
  );
}

export default App;
