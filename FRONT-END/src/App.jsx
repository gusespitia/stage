import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react"; // Agrega useState y useEffect
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav justify-content-center">
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/pass-forget" className="nav-link">
              Pass-forget
            </Link>
          </li>
          <li>
            <Link to="/public" className="nav-link">
              Public
            </Link>
          </li>
          <li>
            <Link to="/protected" className="nav-link">
              Protected
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/public" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Dashboard = () => {
  const [privateData, setPrivateData] = useState(null); // Inicializa privateData como null
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3010/data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setPrivateData(result.someSecretData); // Extrae la data secreta del resultado
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Private Data</h3>
      {privateData !== null ? ( // Muestra privateData solo si no es null
        <pre>{JSON.stringify(privateData)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);
const Register = () => (
  <div>
    <h2>Register</h2>
  </div>
);
const Public = () => (
  <div>
    <h2>Public</h2>
  </div>
);
const Protected = () => (
  <div>
    <h2>Protected</h2>
  </div>
);
const Reset = () => (
  <div>
    <h2>Reset</h2>
  </div>
);

export default App;
