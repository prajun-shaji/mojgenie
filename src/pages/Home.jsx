import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Process from "../components/Process";
import Product from "../components/Product";
import Services from "../components/Services";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <section
        id="/"
        className="h-[calc(100vh-96px)] bg-[#d8d4dc] bg-[url('assets/hero.jpg')] bg-no-repeat"
      >
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section id="technology" className="bg-[#f7f7f7]">
        <Technologies />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="product">
        <Product />
      </section>
      <section className="bg-[#f7f7f7]">
        <Partners />
      </section>
    </>
  );
};

export default Home;
