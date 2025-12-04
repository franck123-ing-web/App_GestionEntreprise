import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EnterpriseList from "./components/EnterpriseList";
import EnterpriseForm from "./components/EnterpriseForm";
import EnterpriseDetail from "./components/EnterpriseDetail";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Gestion KBO</h1>
        <nav>
          <Link to="/">Entreprises</Link> | <Link to="/create">Créer entreprise</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EnterpriseList />} />
          <Route path="/create" element={<EnterpriseForm />} />
          <Route path="/edit/:id" element={<EnterpriseForm />} />
          <Route path="/detail/:id" element={<EnterpriseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
