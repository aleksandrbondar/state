import './App.css'
import Counter from '../Counter/Counter'
import Greeting from '../Greeting/Greeting'





const App = () => {
  return (
    <div>
      <Greeting name="John Doe" />
      <Counter />
    </div>
  );
};

export default App
