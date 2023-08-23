import styles from './Banner.module.css';
import myPhoto from 'assets/img/rutes-photo.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Hello World!</h1>
        <p className={styles.paragraph}>This is a text introducing me</p>
      </div>

      <div className={styles.images}>
        <img className={styles.myPhoto} src={myPhoto} alt="Uma foto da Rute feita por IA" />
      </div>
    </div>
  );
}
