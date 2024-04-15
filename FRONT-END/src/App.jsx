import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react"; // Agrega useState y useEffect
import Userfront, {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
} from "@userfront/toolkit/react";

import "./App.css";

Userfront.init("xbpwd96n");

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
            <Link to="/reset" className="nav-link">
              Pass-forget
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<Reset />} />

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
        const response = await fetch("http://localhost:3010/data", {
          headers: {
            Authorization: `Bearer ${Userfront.accessToken()}`,
          },
        });
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

  // REDIRECCIONAR SI NO ESTA LOGEADO
  const navigate = useNavigate();

  if (!Userfront.accessToken()) {
    navigate("/login");
    return null; // o puedes retornar algo mientras se realiza la redirección
  }

  // MOSTRAR LA INFO DEL USER
  console.log(Userfront);
  const userData = JSON.parse(atob(Userfront.accessToken().split('.')[1]));

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>User Data</h3>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <pre>{JSON.stringify(privateData, null, 2)}</pre>
       <LogoutButton
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    </div>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <SignupForm
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    <LogoutButton
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    ;
  </div>
);
const Login = () => (
  <div>
    <h2>Login</h2>
    <LoginForm
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    ;
  </div>
);
const Register = () => (
  <div>
    <h2>Register</h2>
    <SignupForm
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    ;
  </div>
);

const Reset = () => (
  <div>
    <h2>Reset</h2>
    <PasswordResetForm
      theme={{
        colors: {
          light: "#ffffff",
          dark: "#5e72e4",
          accent: "#13a0ff",
          lightBackground: "#fdfdfd",
          darkBackground: "#2d2d2d",
        },
        colorScheme: "light",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
        size: "compact",
        extras: { rounded: true, hideSecuredMessage: false },
      }}
    />
    ; ;
  </div>
);

export default App;
