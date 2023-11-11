import Header from "./components/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
