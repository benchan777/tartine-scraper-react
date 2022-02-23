import './App.css';
// import MenuData from './MenuData/MenuData';
import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <MenuData />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
