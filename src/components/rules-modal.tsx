import styles from './rules-modal.module.css';
import rulesImg from './game-routing/game-images/image-rules.svg';
import closeIco from './game-routing/game-images/icon-close.svg';
import { useDispatch } from 'react-redux';
import { close } from '../redux/reducers/rules-reduser';

function RulesModal() {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={styles.modalWindow}>
        <div className={styles.modalTitle}>
          <p>RULES</p>
          <img
            onClick={() => dispatch(close())}
            className={styles.modalClose}
            src={closeIco}
            alt="img"
          />
        </div>

        <div className={styles.modalRulesImage}>
          <img src={rulesImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
