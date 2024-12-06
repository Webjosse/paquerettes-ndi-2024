import { useEffect, useState } from 'react'
import './App.css'
import {Clicker} from './clicker/Clicker';
import {ShopSection} from './shopsection/ShopSection';
import {Count} from './clicker/Count';
import { Background } from './background/Background';
import { InfoModal } from './infoModal/InfoModal';

// No zoom on double click for smartphones
document.addEventListener('dblclick', function(event) {
  event.preventDefault();
});

document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});


function safeBigInt(s) {
  // Utiliser une expression régulière pour vérifier si la chaîne est un nombre valide
  const isValidNumber = /^-?\d+$/.test(s);

  if (isValidNumber) {
      return BigInt(s);
  } else {
      return BigInt("0");
  }
}

function App() {
  const [count, setCount] = useState(BigInt("0"))

  const [el, setEl] = useState(null)


  useEffect(() => {
    if (localStorage.getItem('count') === null){
      setEl({title: 'Présentation du jeu', desc:`Essayez d\'ajouter du CO2 en cliquant sur l'icone et regardez l\'océan se dégrader. Le pronostic vital sera vite engagé.
        
**Essayez de monter jusqu'à 100 pour débloquer le 1e effet indésirable**`})
    }
    window.clickCount = safeBigInt(localStorage.getItem('count')|| '0');
    setCount(window.clickCount)
  }, [])

  function addClick(){
    window.clickCount += 1n;
    setCount(window.clickCount);
  }

  function effectiveSetCount(cnt){
    window.clickCount = cnt;
    setCount(window.clickCount);
  }


  return (
    <>
      <Background/>
      <main>
        <section className='clickSection' >
        <Count count={count} />
        <Clicker onClick={addClick}/>
        </section>
        <ShopSection count={count} setCount={effectiveSetCount} showPopup={(el) => setEl(el)}/>
      </main>
      <InfoModal el={el} onClose={() => setEl(null)} />
    </>
  )
}

export default App
