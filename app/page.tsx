import Header from "@/app/components/Header/header";
import About from "./components/About/about";
import FAQS from "./components/FAQ/faqs";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <>
      <section className="px-5 pt-5 flex flex-col justify-center items-center">
        <Header />
      </section> 
      <About />
      <section className="p-5 pt-8 flex flex-col justify-center items-center">
        <FAQS />
        <Footer />
      </section>
    </>
  );
}
