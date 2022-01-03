import './App.css';
import Item from './components/Item/index';
import ItemChild from './components/ItemChild/ItemChild';
import Card from './components/Card/index';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <Item texto="Item 1"/>
        <Item texto="Item 2"/>
        <Item texto="Item 3"/>
        <Item />
        <ItemChild>Item with a child rendered</ItemChild>
      </ul>
      <Card />
    </div>
  )
}

export default App;
