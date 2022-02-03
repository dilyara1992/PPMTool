import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import AddProject from './components/Project/AddProject';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addProject" element={<AddProject />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
