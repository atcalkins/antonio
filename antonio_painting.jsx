import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => (
  <div className="container mt-5">
    <h2>Welcome to [Company Name] Painting</h2>
    <p className="lead">Your go-to choice for quality painting services.</p>
  </div>
);

const About = () => (
  <div className="container mt-5">
    <h2>About Us</h2>
    <p className="lead">[Company Name] Painting is a dedicated team of professional painters...</p>
  </div>
);

const Contact = () => (
  <div className="container mt-5">
    <h2>Contact Us</h2>
    <p className="lead">Reach out to us for a free estimate or any inquiries:</p>
    <p>Email: info@companypainting.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>
);

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      [Company Name] Painting
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;

