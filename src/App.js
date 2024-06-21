import { useRoutes } from 'react-router-dom';
import { ROUTE } from './Route/index'; 
// import './assets/fonts/fonts.css';
// import './global.css';
import './App.css';

function App() {
  return useRoutes([ROUTE]);
}

export default App;
