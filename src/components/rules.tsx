import styles from './rules.module.css';
import { useDispatch } from 'react-redux';
import { open } from '../redux/reducers/rules-reduser';

function Rules() {
  const dispatch = useDispatch();
  return (
    <div className={styles.rulesBtn}>
      <button onClick={() => dispatch(open())}>RULES</button>
    </div>
  );
}

export default Rules;
