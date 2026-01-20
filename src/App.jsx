import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailSurah from "./pages/detailSurah";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* PAGE */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:id" element={<DetailSurah />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
