import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [list, setList] = useState(initialItems)
  return (
    <div className="App">
      <Header/>
      <Form setList={setList}/>
      <Main list={list} setList={setList}/>
      <Footer list={list}/>
    </div>
  );
}

export default App;
