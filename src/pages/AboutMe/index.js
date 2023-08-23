import styles from './AboutMe.module.css';
import aboutMePhoto from 'assets/img/aboutme-photo.jpg';

export default function AboutMe() {
  return (
    <article className={styles.aboutMeContainer}>
      <div className={styles.postContentContainer}>
        <h3 className={styles.subtitle}>Hello, my name is Rute!</h3>
        <img className={styles.aboutMePhoto} src={aboutMePhoto} alt="Foto de Rute sorrindo" />
        <p className={styles.paragraph}>Hi, hrurefjnl, skwdjebf dhbwrjdn </p>
      </div>
    </article>
  );
}
