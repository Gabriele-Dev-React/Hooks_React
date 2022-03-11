import "./App.css";
import React, { useState, useEffect } from "react";

export function App() {
  // ESEMPIO useState
  const [contatore, setContatore] = useState(0);
  const [frase, setfrase] = useState("");
  // Simile a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Aggiorna il titolo del documento usando le API del browser
    document.title = `Hai cliccato ${contatore} volte`;
  });

  useEffect(() => {
    if (contatore === 10) {
      setfrase("complimenti useEffect funziona");
    } else {
      setfrase("al 10 useEffect funzionerà");
    }
  }, [contatore]);

  return (
    <div>
      <p>Hai cliccato {contatore} volte</p>
      <button onClick={() => setContatore(contatore + 1)}>Cliccami</button>
      <button onClick={() => setContatore(contatore - 1)}>Elimina Volte</button>
      {/*       <button onClick={() => setContatore((contatore = 0))}>Reset Volte</button> */}
      <h2>{frase}</h2>
    </div>
  );
  // ESEMPIO useState + useEffect
}

export default App;
