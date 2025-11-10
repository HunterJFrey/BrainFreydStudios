import "./App.css";
import { MainLayout } from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import GamesPage from "./features/gamesPage/GamesPage";
import AboutPage from "./features/aboutPage/AboutPage";
import ContactPage from "./features/contactPage/ContactPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
