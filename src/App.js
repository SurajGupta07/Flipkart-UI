import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { Header } from './components/Header';
import { ProductsPage } from './Pages/ProductsPage';

function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
