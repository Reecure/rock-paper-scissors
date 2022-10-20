import styles from './score-counter.module.css';
import { useSelector } from 'react-redux';

function ScoreCounter() {
  return (
    <div className={styles.scoreBlock}>
      <h3>SCORE</h3>
      <p>12</p>
    </div>
  );
}

export default ScoreCounter;
