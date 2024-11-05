import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let balance = 0;
  let interest = 0;
  let adress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

  // document.getElementById("adress").innerText = adress;
  // Fonction pour gérer le dépôt d'argent
  function handleDeposit() {
    const depositAmount = parseFloat(
      document.getElementById("depositAmount").value
    );
    if (!isNaN(depositAmount) && depositAmount > 0) {
      balance += depositAmount;
      document.getElementById("balance").innerText = balance.toFixed(2);
      document.getElementById("depositAmount").value = ""; // Réinitialiser le champ
    } else {
      alert("Veuillez entrer un montant valide.");
    }
  }

  // Fonction pour calculer les intérêts (par exemple 0,5% toutes les 5 secondes)
  function calculateInterest() {
    interest += balance * 0.005;
    document.getElementById("interest").innerText = interest.toFixed(2);
  }

  // // Mettre à jour les intérêts toutes les 5 secondes
  // setInterval(calculateInterest, 5000);

  return (
    <div>
      <nav>
        <h1>Coffre-Fort d'Épargne</h1>
      </nav>
      <div className="wrapper">
        <h1 className="solde">
          Solde: <span id="balance">0</span>{" "}
          <span className="cuurency">ETH</span>
        </h1>
        <input type="text" placeholder="taux d'interets" id="interest" />
        <div className="main">
          <div className="card">
            <h2>Depôt</h2>
            <input
              type="number"
              id="depositAmount"
              placeholder="Montant du dépôt"
            />
            <button onClick="handleDeposit()">Déposer</button>
          </div>
          <div className="card">
            <h2>retirer</h2>
            <input
              type="number"
              id="depositAmount"
              placeholder="Montant du dépôt"
            />
            <button onClick="handleDeposit()">Déposer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
