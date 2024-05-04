import Navbar from "@/app/components/Navbar";
import Intro from "./components/Intro";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="pt-5 flex flex-col justify-center items-center">
      <Navbar/>
      <Intro/>
      <FAQS/>
      <Footer/>
    </main>
  );
}
