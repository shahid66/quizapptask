import { Route, Routes } from 'react-router-dom';
import './App.css';
import Questions from './Components/Questions/Questions';
import Result from './Components/Result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="result" element={<Result />} />
      </Routes>


    </div>
  );
}

export default App;
