import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="xl:max-w-[1280px] p-6 m-auto">
      <Navbar />
      <hr className="border-black" />
      {/* <Home /> */}
      <Store />
      <hr className="border-black" />
      <Footer />
    </main>
  );
}

export default App;
