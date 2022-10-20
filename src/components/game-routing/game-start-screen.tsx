import GameTitle from '../game-title';
import { Link } from 'react-router-dom';
import styles from './game-start-screen.module.css';
import paperImg from './game-images/icon-paper.svg';
import scissorsImg from './game-images/icon-scissors.svg';
import rockImg from './game-images/icon-rock.svg';
import { useDispatch, useSelector } from 'react-redux';
import { paper, scissors, rock } from '../../redux/reducers/cards-reducer';
import Rules from '../rules';
import RulesModal from '../rules-modal';
import { modalToggler } from '../../redux/reducers/rules-reduser';

function GameStartScreen() {
  const dispatch = useDispatch();
  const modalOpen = useSelector(modalToggler);

  return (
    <div>
      <div className={!modalOpen ? `${styles.rulesModal}` : ''}>
        <RulesModal />
      </div>
      <div>
        <GameTitle />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.gameCards}>
          <Link to="/result">
            <div onClick={() => dispatch(paper())} className={styles.paperSide}>
              <img src={paperImg} alt="img" />
            </div>
          </Link>
          <Link to="/result">
            <div
              onClick={() => dispatch(scissors())}
              className={styles.scissorsSide}
            >
              <img src={scissorsImg} alt="img" />
            </div>
          </Link>
          <Link to="/result">
            <div onClick={() => dispatch(rock())} className={styles.rockSide}>
              <img src={rockImg} alt="img" />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.rulesBtn}>
        <Rules />
      </div>
    </div>
  );
}

export default GameStartScreen;
