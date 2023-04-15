import styles from './index.module.css';
import avatar from '../../assets/avatars/1.png'
import {Divider} from "../Divider";
import {useAddress} from "@thirdweb-dev/react";
export const UserProfile = () => {
  const address = useAddress();
  return (
    <div className={styles.root}>
      <section>
        <img alt='avatar' className={styles.userImg} src={avatar}/>
        <div className={styles.userInfo}>
          <span>Yagi Go</span>
          <span className={styles.walletAddress}>{address ?? 'Connect your wallet'}</span>
        </div>
        <Divider/>
      </section>
      <section className={styles.bio}>
        <span>Bio</span>
        <span className={styles.bioText}>
          Hi there, I am a Web3 developer in Tokyo!
        </span>
        <Divider/>
      </section>
      <section className={styles.links}>
        <div>https://yagigo.com</div>
      </section>
      <Divider/>
    </div>
  )
}