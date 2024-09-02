import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
      <Services/>
      <Body />
      <Footer />
    </div>
  );
}
