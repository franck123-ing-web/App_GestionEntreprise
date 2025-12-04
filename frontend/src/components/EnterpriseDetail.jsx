import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EnterpriseDetail() {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/enterprises/${id}`)
      .then(res => setEnterprise(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!enterprise) return <div>Chargement...</div>;

  return (
    <div>
      <h2>Détails de {enterprise.EnterpriseNumber}</h2>
      <p>Status: {enterprise.Status}</p>
      <p>Type: {enterprise.TypeOfEnterprise}</p>
      <p>JuridicalForm: {enterprise.JuridicalForm}</p>

      <h3>Établissements</h3>
      {enterprise.Establishments && enterprise.Establishments.length > 0 ? (
        enterprise.Establishments.map(est => (
          <div key={est.EstablishmentNumber} style={{ marginBottom: "10px" }}>
            <b>{est.EstablishmentNumber}</b> - StartDate: {est.StartDate}<br />
            <i>Branches:</i>
            <ul>
              {est.Branches && est.Branches.map(branch => (
                <li key={branch.Id}>{branch.Id} - StartDate: {branch.StartDate}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p>Aucun établissement</p>}

      <Link to="/">Retour à la liste</Link>
    </div>
  );
}

export default EnterpriseDetail;
