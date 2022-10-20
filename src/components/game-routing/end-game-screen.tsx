import GameTitle from '../game-title';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCard } from '../../redux/reducers/cards-reducer';
import paperImg from './game-images/icon-paper.svg';
import scissorsImg from './game-images/icon-scissors.svg';
import rockImg from './game-images/icon-rock.svg';
import styles from './end-game-screen.module.css';
import Rules from '../rules';
import RulesModal from '../rules-modal';
import { modalToggler } from '../../redux/reducers/rules-reduser';

function EndGameScreen() {
  function getRandomSide() {
    return Math.floor(Math.random() * 3);
    // 0 paperSide
    // 1 scissorsSide
    // 2 rockSide
  }

  function gameResult() {
    if (
      (selectedSide === 'paper' && side === 0) ||
      (selectedSide === 'scissors' && side === 1) ||
      (selectedSide === 'rock' && side === 2)
    ) {
      return 'IT`S TIE';
    } else if (
      (selectedSide === 'paper' && side === 1) ||
      (selectedSide === 'rock' && side === 0) ||
      (selectedSide === 'scissors' && side === 2)
    ) {
      return 'YOU LOSE';
    } else if (
      (selectedSide === 'paper' && side === 2) ||
      (selectedSide === 'rock' && side === 1) ||
      (selectedSide === 'scissors' && side === 0)
    ) {
      return 'YOU WIN';
    }
  }

  const selectedSide = useSelector(selectCard);

  const side = getRandomSide();
  const result = gameResult();

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
                side === 0
                  ? `${styles.paperSide}`
                  : side === 1
                  ? `${styles.scissorsSide}`
                  : side === 2
                  ? `${styles.rockSide}`
                  : ''
              }
            >
              {side === 0 ? (
                <img src={paperImg} alt="img" />
              ) : side === 1 ? (
                <img src={scissorsImg} alt="img" />
              ) : side === 2 ? (
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
