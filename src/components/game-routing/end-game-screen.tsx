import GameTitle from '../game-title';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCard } from '../../redux/reducer';
import paperImg from './game-images/icon-paper.svg';
import scissorsImg from './game-images/icon-scissors.svg';
import rockImg from './game-images/icon-rock.svg';
import styles from './end-game-screen.module.css';

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
      return 'tie';
    } else if (
      (selectedSide === 'paper' && side === 1) ||
      (selectedSide === 'rock' && side === 0) ||
      (selectedSide === 'scissors' && side === 2)
    ) {
      return 'lose';
    } else if (
      (selectedSide === 'paper' && side === 2) ||
      (selectedSide === 'rock' && side === 1) ||
      (selectedSide === 'scissors' && side === 0)
    ) {
      return 'win';
    }
  }

  const selectedSide = useSelector(selectCard);

  const side = getRandomSide();
  const result = gameResult();

  return (
    <div>
      <GameTitle />
      <div>
        <div>You picked</div>
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

      <Link to="/">
        <div>
          <h2>{result}</h2> restart
        </div>
      </Link>
      <div>
        <div>Computer Side</div>
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
  );
}

export default EndGameScreen;
