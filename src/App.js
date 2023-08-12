import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import Card from "./Card"
function App() {
  function thirdExample() {
    console.log('third example');
  };
  const fourthExample = () => console.log('fourth example');
  return (
    <div className="App">
    <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3"/>
      <button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
<button onClick={thirdExample}>
    An inline anonymous ES6 function event handler
</button>
<button onClick={fourthExample}>
    An inline anonymous ES6 function event handler
</button>
    </div>
  );
}

export default App;
