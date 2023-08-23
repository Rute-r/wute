import { BsEmojiWink } from 'react-icons/bs';
import styles from './Banner.module.css';
import myPhoto from 'assets/img/rutes-photo.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Hello World!</h1>
        <p className={styles.paragraph}>
          Eu sou a Rute, estou estudando Front-End, e este site é onde eu compartilho o que ando aprendendo e
          coisas que acho divertidas, espero que goste <BsEmojiWink />
        </p>
      </div>

      <div className={styles.images}>
        <img className={styles.myPhoto} src={myPhoto} alt="Uma foto da Rute feita por IA" />
      </div>
    </div>
  );
}
