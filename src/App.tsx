import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Button from '../lib/components/Button';
// import { Icon } from '../lib/components/Icons';
import '../lib/styles/main.css';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button labelText="example" size="giant" variant="text" />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
