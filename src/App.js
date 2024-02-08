import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import ProblemsPage from "./components/pages/ProblemsPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
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
