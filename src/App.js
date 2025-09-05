import logo from './logo.svg';
import FancyButton from './components/FancyButton';
import './App.css';

function App() {
  return (
    <div className="App-bg">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Cypress React Demo</h1>
        <p className="App-desc">
          Practice end-to-end testing with a beautiful React app.
        </p>
      </header>
      <main className="App-main">
        <div className="App-card">
          <h2>Test the Fancy Button!</h2>
          <FancyButton />
        </div>
      </main>
      <footer className="App-footer">
        <span>Made with <span role="img" aria-label="love">💖</span> & Cypress</span>
      </footer>
    </div>
  );
}

export default App;
