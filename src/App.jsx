import { useEffect, useState } from 'react'
import './App.css'
import {Clicker} from './clicker/Clicker';
import {ShopSection} from './shopsection/ShopSection';
import {Count} from './clicker/Count';
import { Background } from './background/Background';

function safeBigInt(s) {
  // Utiliser une expression régulière pour vérifier si la chaîne est un nombre valide
  const isValidNumber = /^-?\d+$/.test(s);

  if (isValidNumber) {
      return BigInt(s);
  } else {
      return BigInt("1000");
  }
}

function App() {
  const [count, setCount] = useState(BigInt("1000"))
  
  useEffect(() => {
    window.clickCount = safeBigInt(localStorage.getItem('count')|| '1000');
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
        <ShopSection count={count} setCount={effectiveSetCount}/>
      </main>
    </>
  )
}

export default App
