import styles from './index.module.css';

export const Divider = ({...props}) => {
  return (
    <div className={styles.divider} {...props} />
  )
}