import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/home/Home';
import { CV } from './page/CV/CV';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={ <Home />} />
        <Route path="/my-cv" element={<CV />} />
      </Routes>
    </div>
  );
}
