import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { ProductsPage } from './Pages/ProductsPage';

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
