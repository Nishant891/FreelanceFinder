import Header from "@/app/components/Header/header";
import About from "./components/About/about";
import FAQS from "./components/FAQ/faqs";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <main className="pt-5 flex flex-col justify-center items-center">
      <Header/>
      <About/>
      <FAQS/>
      <Footer/>
    </main>
  );
}
