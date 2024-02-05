import './App.css';
import { Login } from './pages/login/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Login />   {/* Login page */}
      <Toaster /> {/* Toast component to display success and error toasts */}
    </div>
  );
}

export default App;
