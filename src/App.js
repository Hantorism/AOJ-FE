import MainPage from "./components/pages/MainPage";
import ProblemsPage from "./components/pages/ProblemsPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/problems" element={<ProblemsPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
