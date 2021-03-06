import React, { useEffect, useState } from 'react';
import './App.scss';
import logo from './db.png'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { auth } from './network';

import SideNav from './SideNav';
import Game from './Game';

function App() {
  const [user, setUser] = useState(null);
  const [game, setGame] = useState(null);

  useEffect(()=>{
    auth().onAuthStateChanged((newUser) => {
      if (!newUser) return;
      setUser(newUser);
    })
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="Daniel" className="header__logo"></img>
      <SideNav user={user} onSelectGame={setGame}/>
      <DndProvider backend={HTML5Backend}>
        <Game remoteGame={game} user={user}/>
      </DndProvider>
    </div>
  );
}

export default App;
