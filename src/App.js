
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar';
function App() {
  return (
    <div className="App">
      <main>
        <ColorSchemesExample  />
        <ItemListContainer greeting={"BIENVENIDOS"}  />
      </main>
    </div>
  );
}

export default App;
