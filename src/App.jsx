import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";

const Layout = () => {
  return (
    <main className="font-inter">
      <header className="sticky top-0 z-50 h-24 w-full bg-white px-8 py-5 shadow-sm lg:px-28">
        <Navbar />
      </header>
      <Outlet />
      <section className="h-[650px] bg-[url('assets\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\newsletter.jpg')] bg-no-repeat">
        <Newsletter />
      </section>
      <footer className="bg-[#242424] p-5">
        <Footer />
      </footer>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/career",
        element: <CareerPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
