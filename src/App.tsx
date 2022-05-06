import { useState } from "react";
import styles from "./App.module.css";
import powerImage from "./assets/powered.png";
import { levels, calcularImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem/index";
import leftArrow from "./assets/leftarrow.png";

const App = () => {
  const [heigthField, setheigthField] = useState<number>(0);
  const [weigthField, setweigthField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const handleCalculateButton = () => {
    if (heigthField && weigthField) {
      setToShow(calcularImc(heigthField, weigthField));
    } else {
      alert("Digite todos os campos!!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setheigthField(0);
    setweigthField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="Logo" width={250} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é uma sigla para Indice de Massa Corpórea adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heigthField > 0 ? heigthField : ""}
            onChange={(e) => setheigthField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite a sua peso. Ex: 75.5 (em kg)"
            value={weigthField > 0 ? weigthField : ""}
            onChange={(e) => setweigthField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rigthSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rigthBig}>
              <div className={styles.rigthArrow}>
                <img
                  src={leftArrow}
                  alt="leftArrow"
                  width="25"
                  onClick={handleBackButton}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
