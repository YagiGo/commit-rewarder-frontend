import {ConnectWallet} from "@thirdweb-dev/react";
import styles from './index.module.css';
export const Header = () => {
  return (
    <div className={styles.root}>
      <span className={styles.logo}>Logo Here</span>
      <ConnectWallet />
    </div>
  )
}