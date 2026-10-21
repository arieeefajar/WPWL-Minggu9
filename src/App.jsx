import "./App.css";
import ProductList from "./components/ProductLIst.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🛍 Simple Product Store</h1>
        <p>Data dari Backend Node.js menggunakan useEffect</p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
