import { useEffect, useRef, useState } from 'react';
import styles from './Clock.module.css';

export function Clock(){

const [time, setTime] = useState(new Date())

let intervalId = useRef(null)

const stop = () => {
    clearInterval(intervalId.current);
  }

useEffect(() => {
    intervalId = setInterval(() => {
        console.log('Це інтервал кожні 1000ms' + Date.now());
        setTime(new Date());
    }, 1000);

    return() => {
        stop()
    }
}, [time])

// componentDidMount() {
//   this.intervalId = setInterval(() => {
//     console.log('Це інтервал кожні 1000ms' + Date.now());
//     this.setState({ time: new Date() });
//   }, 1000);
// }

// componentWillUnmount() {
//   console.log('Цей метод викликається перед кожним розмонтуванням компоненту');
//   this.stop();
// }

return (
 <div className={styles.container}>
  <p className={styles.clockface}>
    Поточний час:
<br />
  {time.toLocaleTimeString()}
</p>
<br />
  <button type="button" onClick={stop}>
     Зупинити
  </button>
 </div>
)}
