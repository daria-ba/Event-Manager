import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import GeneralPage from './pages/HomePage/GeneralPage';
import MapPage from './pages/MapPage/MapPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralPage />} />
      <Route path="/map" element={<div><MapPage /></div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
