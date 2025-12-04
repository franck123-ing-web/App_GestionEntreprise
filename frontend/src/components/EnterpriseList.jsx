import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EnterpriseList() {
  const [enterprises, setEnterprises] = useState([]);
  const [search, setSearch] = useState("");

  
  const loadEnterprises = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/enterprises");
      setEnterprises(res.data);
    } catch (err) {
      console.error(err);
      alert("Erreur lors du chargement des entreprises");
    }
  };

  useEffect(() => {
    loadEnterprises();
  }, []);

  
  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette entreprise ?")) {
      try {
        await axios.delete(`http://localhost:5000/api/enterprises/${id}`);
      
        loadEnterprises();
        alert("Entreprise supprimée avec succès");
      } catch (err) {
        console.error(err);
        alert("Erreur lors de la suppression");
      }
    }
  };

  
  const filteredEnterprises = enterprises.filter(ent =>
    ent.EnterpriseNumber.includes(search)
  );

  return (
    <div>
      <h2>Liste des entreprises</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Rechercher par EnterpriseNumber"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "5px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={loadEnterprises} style={{ padding: "5px 10px" }}>
          Recharger la liste
        </button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>EnterpriseNumber</th>
            <th>Status</th>
             <th>JuridicalSituation</th>
            <th>Type</th>
             <th>JuridicalForm</th>
              <th>JuridicalFormCAC</th>
               <th>StartDate</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnterprises.length > 0 ? (
            filteredEnterprises.map(ent => (
              <tr key={ent.EnterpriseNumber}>
                <td>{ent.EnterpriseNumber}</td>
                <td>{ent.Status}</td>
                <td>{ent.JuridicalSituation}</td>
                <td>{ent.TypeOfEnterprise}</td>
                  <td>{ent.JuridicalForm}</td>
                   <td>{ent.JuridicalFormCAC}</td>
                    <td>{ent.StartDate}</td>
                <td>
                  <Link to={`/detail/${ent.EnterpriseNumber}`}>Détails</Link> |{" "}
                  <Link to={`/edit/${ent.EnterpriseNumber}`}>Éditer</Link> |{" "}
                  <button onClick={() => handleDelete(ent.EnterpriseNumber)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucune entreprise trouvée</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EnterpriseList;
