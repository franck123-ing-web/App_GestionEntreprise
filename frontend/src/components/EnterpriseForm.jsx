import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EnterpriseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enterprise, setEnterprise] = useState({
    EnterpriseNumber: "",
    Status: "",
    TypeOfEnterprise: "",
    JuridicalSituation: "",
    JuridicalForm: "",
    JuridicalFormCAC: "",
    StartDate: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/enterprises/${id}`)
        .then(res => setEnterprise(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setEnterprise({ ...enterprise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/api/enterprises/${id}`, enterprise)
        .then(() => navigate("/"))
        .catch(err => console.error(err));
    } else {
      axios.post("http://localhost:5000/api/enterprises", enterprise)
        .then(() => navigate("/"))
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h2>{id ? "Éditer entreprise" : "Créer entreprise"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="EnterpriseNumber" placeholder="EnterpriseNumber" value={enterprise.EnterpriseNumber} onChange={handleChange} required={!id} disabled={!!id} /><br />
        <input name="Status" placeholder="Status" value={enterprise.Status} onChange={handleChange} /><br />
        <input name="TypeOfEnterprise" placeholder="TypeOfEnterprise" value={enterprise.TypeOfEnterprise} onChange={handleChange} /><br />
        <input name="JuridicalSituation" placeholder="JuridicalSituation" value={enterprise.JuridicalSituation} onChange={handleChange} /><br />
        <input name="JuridicalForm" placeholder="JuridicalForm" value={enterprise.JuridicalForm} onChange={handleChange} /><br />
        <input name="JuridicalFormCAC" placeholder="JuridicalFormCAC" value={enterprise.JuridicalFormCAC} onChange={handleChange} /><br />
        <input name="StartDate" type="date" placeholder="StartDate" value={enterprise.StartDate ? enterprise.StartDate.split("T")[0] : ""} onChange={handleChange} /><br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default EnterpriseForm;
