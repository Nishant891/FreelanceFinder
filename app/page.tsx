import Header from "@/app/components/Header/header";
import About from "./components/About/about";
import FAQS from "./components/FAQ/faqs";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center lg:px-5 px-2 pt-5">
        <Header />
      </section> 
      <About />
      <section className="flex flex-col justify-center items-center p-5 pt-8">
        <FAQS />
        <Footer />
      </section>
    </>
  );
}
