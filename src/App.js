import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
function App() {
  return (
    <div className="app-container">
       <Route exact path="/" component={CharacterList} />
       <Route path="/detail/:id" component={CharacterDetail} />
    </div>
  );
}

export default App;
