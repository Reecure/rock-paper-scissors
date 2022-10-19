import './App.css';
import GameStartScreen from './components/game-routing/game-start-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameTitle from './components/game-title';
import EndGameScreen from './components/game-routing/end-game-screen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<GameStartScreen />} />
            <Route path="result" element={<EndGameScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
