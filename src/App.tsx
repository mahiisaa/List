import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
