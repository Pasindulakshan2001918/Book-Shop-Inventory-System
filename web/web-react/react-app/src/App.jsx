import { useState } from 'react'; 
import './App.css';
import Header from './Components/Layouts/HeaderContent/Header'; 




function App() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <h1>Welcome</h1>
      <Header />
      
      
      
    </div>
  );
}

export default App;


