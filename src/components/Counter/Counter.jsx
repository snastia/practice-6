import { useEffect } from "react";
import "./Counter.css";

export const Counter = () => {

  const [counterA, setCounterA] = useState(0)
  const [counterB, setCounterB] = useState(0)

  state = {
    counterA: 0,
    counterB: 0
  }

   const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1) 
   }

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1)
   }

   useEffect(() => {
    console.log(`Всього клікнули ${counterA + counterA} разів`)
   }, [counterA, counterB])

    return(
      <>
      <button className="btn" type="button" onClick={handleCounterAIncrement}>Клікнули counterA {counterA}</button>

      <button className="btn" type="button" onClick={handleCounterBIncrement}>Клікнули counterA {counterB}</button>
      </>
    )
}

// коли змінюється або пропс або стейт (в яких випадках перемальовується розмітка)