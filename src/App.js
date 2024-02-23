import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import ProblemsPage from "./components/pages/ProblemsPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Context from './components/contexts/Context';
import React, {useState} from 'react';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div className="App">
      <Context.Provider value={{isSignedIn, setIsSignedIn, userInfo}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/problems" element={<ProblemsPage/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;