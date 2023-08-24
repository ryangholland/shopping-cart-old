import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="xl:max-w-[1280px] p-6 m-auto">
      <Navbar />
      <hr className="border-black" />
      <Home />
      <hr className="border-black" />
      <Footer />
    </main>
  );
}

export default App;
