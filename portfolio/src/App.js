import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/home/Home';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={ <Home />} />
      </Routes>
    </div>
  );
}
