import styles from './score-counter.module.css';
import {scoreSelector} from "../redux/reducers/score-slice";
import {useAppSelector} from "../redux/hooks";
import {useSelector} from "react-redux";
import {selectCard} from "../redux/reducers/cards-reducer";

function ScoreCounter() {
    const { score} = useSelector(selectCard);


    return (
    <div className={styles.scoreBlock}>
      <h3>SCORE</h3>
      <p>{score}</p>
    </div>
  );
}

export default ScoreCounter;
