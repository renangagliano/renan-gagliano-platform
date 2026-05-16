import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Articles from "./pages/Articles.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Proposals from "./pages/Proposals.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/experience", element: <Experience /> },
  { path: "/projects", element: <Projects /> },
  { path: "/public-proposals", element: <Proposals /> },
  { path: "/articles", element: <Articles /> },
  { path: "/contact", element: <Contact /> },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-graphite text-porcelain antialiased transition-colors duration-300">
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
