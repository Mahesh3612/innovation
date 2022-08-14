
import './App.css';
import { Page1 } from './components/page1/page1';
import {Route,Routes} from "react-router-dom"
import { Page2 } from './components/page2/page2';

function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element={<Page1/>}/>
  <Route path={`/:id`} element={<Page2/>}/>
 </Routes>
    </div>
  );
}

export default App;
