import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import GeneralPage from './pages/HomePage/GeneralPage';
import MapPage from './pages/MapPage/MapPage';
import ProfileElem from './pages/ProfilePage/ProfileElem';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralPage />} />
      <Route path="/map" element={<div><MapPage /></div>} />
      <Route path='/profile' element={<div><ProfileElem /></div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
