import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/home/Home';
import { CV } from './page/CV/CV';
import { Navbar } from './component/Navbar';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={ <Home />} />
        <Route path="/my-cv" element={<CV />} />
      </Routes>
    </div>
  );
}
