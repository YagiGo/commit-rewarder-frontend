import {ConnectWallet} from "@thirdweb-dev/react";
import styles from './index.module.css';
import logo from '../../assets/logo.webp'
export const Header = () => {
  return (
    <div className={styles.root}>
      <span className={styles.logo}>
        <img src={logo} alt='' width={64}/>
        <span className={styles.logoText}>Commit Reward</span>
      </span>
      <ConnectWallet />
    </div>
  )
}