import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';

const App = () => {
  const [heigthField, setheigthField] = useState<number>(0);
  const [weigthField, setweigthField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heigthField && weigthField) {

    } else {
      alert("Digite todos os campos!!")
    }
  }

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
          <p>IMC é uma sigla para Indice de Massa Corpórea adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em métros)'
            value={heigthField > 0 ? heigthField : ''}
            onChange={e => setheigthField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder='Digite a sua peso. Ex: 75.5 (em kg)'
            value={weigthField > 0 ? weigthField : ''}
            onChange={e => setweigthField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rigthSide}>...</div>
      </div>
    </div>
  );
}

export default App