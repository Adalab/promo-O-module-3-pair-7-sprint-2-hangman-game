import { useState } from 'react';
import '../styles/App.scss';

function App() {

  const [numberOfErrors, setnumberofErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [userLetter, setUserLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const word = "katacroker";
  //const wrong = "fqhpx"
  

  const renderSolutionLetters = () => {
    const keyword = word.split('');
   return keyword.map((letter, index) => {
     return (
     <li key={index} className="letter">{letter}</li>
     )
  });
}

const renderFailLetters = () => {
 //const keywrong = word.split('');
 return userLetter
 .filter((letter) => {
   return word.includes(letter) === false
 } )

 .map((letter, index) => {
   return (
    <li key={index} className="letter">{letter}</li>
    )
 }
 );
}

/*  if (keyWord.includes(lastLetter)) {
        <li className="letter"></li>
     } else {
     <li className="letter">{letter}</li>
     } */

  const handleLastLetter = (ev) => {
    ev.preventDefault();
    const lastInput = ev.currentTarget.value;
    if ( lastInput.match('^[a-zA-ZñÑ]?$')) {
      setlastLetter(lastInput);
      console.log('Letra metida');

      if( lastInput !== '') {
        // Array solucion. Se sube el primer valor que siempre tendra lastLetter, que es vacio ''.
        setUserLetter([...userLetter, lastInput]);
        console.log('Todas' );
        console.log(lastInput);
      } else {
        // Array fallidas. Necesitamos comparar los arrays para subir a un array o a otro. 
        setWrongLetter([...wrongLetter]);
        console.log('Falladas' + lastInput);
      }
    }
    
 }
 
 console.log(lastLetter);

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setnumberofErrors(numberOfErrors + 1);
  };



  return (
    <div className="App">
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {renderSolutionLetters()}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                {renderFailLetters()}
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">Escribe una letra:</label>
              <input
                value={lastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleLastLetter}
              />
            </form>
            <button onClick={handleClickBtn}>Incrementar</button>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
