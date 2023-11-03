import GameTitle from '../game-title';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectCard } from '../../redux/reducers/cards-reducer';
import paperImg from './game-images/icon-paper.svg';
import scissorsImg from './game-images/icon-scissors.svg';
import rockImg from './game-images/icon-rock.svg';
import styles from './end-game-screen.module.css';

function EndGameScreen() {
    const {result, name: selectedSide, compSide } = useSelector(selectCard);

  return (
    <div>
      <div>
        <GameTitle />
        <div className={styles.wrapper}>
          <div>
            <div className={styles.picked}>
              <p>YOU PICKED</p>
            </div>
            <div
              className={
                selectedSide === 'paper'
                  ? `${styles.paperSide}`
                  : selectedSide === 'scissors'
                  ? `${styles.scissorsSide}`
                  : selectedSide === 'rock'
                  ? `${styles.rockSide}`
                  : ''
              }
            >
              {selectedSide === 'paper' ? (
                <img src={paperImg} alt="img" />
              ) : selectedSide === 'scissors' ? (
                <img src={scissorsImg} alt="img" />
              ) : selectedSide === 'rock' ? (
                <img src={rockImg} alt="img" />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={styles.resultBlock}>
            <div>
              <h2>{result}</h2>
            </div>
            <Link to="/">
              <div>
                <p className={styles.playAgain}>PLAY AGAIN</p>
              </div>
            </Link>
          </div>

          <div>
            <div className={styles.picked}>
              <p>COMPUTER PICKED</p>
            </div>
            <div
              className={
                compSide === 0
                  ? `${styles.paperSide}`
                  : compSide === 1
                  ? `${styles.scissorsSide}`
                  : compSide === 2
                  ? `${styles.rockSide}`
                  : ''
              }
            >
              {compSide === 0 ? (
                <img src={paperImg} alt="img" />
              ) : compSide === 1 ? (
                <img src={scissorsImg} alt="img" />
              ) : compSide === 2 ? (
                <img src={rockImg} alt="img" />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndGameScreen;
