import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="app-container">
      <NavBar/>

      {/* Main content area */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
