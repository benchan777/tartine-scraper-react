import './App.css';
import { Outlet } from 'react-router-dom';
import Title from './Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
