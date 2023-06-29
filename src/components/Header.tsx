import rocketLogo from '../assets/rocket-logo.svg';
import todoLogo from '../assets/todo-logo.svg';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={rocketLogo} />
        <img src={todoLogo} />
      </div>
    </header>
  );
}
