import styles from './game-title.module.css';
import ScoreCounter from './score-counter';

function GameTitle() {
  return (
    <div className={styles.titleBlock}>
      <h1 className={styles.title}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h1>
      <ScoreCounter />
    </div>
  );
}

export default GameTitle;
