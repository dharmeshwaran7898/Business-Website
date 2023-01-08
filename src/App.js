import "./App.css";
import "./components/Home.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="companyName">Company Name</div>
        <div className="navbar">
          <div>Home</div>
          <div>About Us</div>
          <div>Products</div>
          <div>Contact Us</div>
        </div>
      </header>
      <section className="section">
        <Home />
      </section>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
