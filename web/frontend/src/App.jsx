import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';





function App() {
  return (
    <div className="app-container">
      <NavBar/>

      {/* Main content area */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;

