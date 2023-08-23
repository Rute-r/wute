import styles from './AboutMe.module.css';
import aboutMePhoto from 'assets/img/aboutme-photo.jpg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function AboutMe() {
  return (
    <article className={styles.aboutMeContainer}>
      <div className={styles.postContentContainer}>
        <h3 className={styles.subtitle}>Olá, eu me chamo Rute!</h3>
        <img className={styles.aboutMePhoto} src={aboutMePhoto} alt="Foto de Rute sorrindo" />
        <p className={styles.paragraph}>
          Tudo começou durante a pandemia, no ano de 2022. Quando decidi fazer trasição de carreira e buscar
          algo novo. Eu era recepcionista bilingue e na epoca me preparava pra iniciar a faculdade de
          arquitetura e urbanismo.
        </p>
        <p className={styles.paragraph}>
          Foi então que a pandemia aconteceu e não pude seguir em frente com meus planos. No ano de 2022
          decidi começar a buscar algo novo e que eu pudesse estudar sem faculdade. No final do ano decidi
          começar a estudar programação e então me encontrei em Front-End
        </p>
        <p className={styles.paragraph}>
          No momento estou aprendendo React, e esse site foi feito por mim enquanto aprendo.
        </p>
        <p className={styles.paragraph}>
          Aqui está meu{' '}
          <a href="https://www.linkedin.com/in/rute-rodrigues-57b35b197/" target="_blank">
            <AiFillLinkedin />
            Linkedin
          </a>{' '}
          e meu{' '}
          <a href="https://github.com/Rute-r" target="_blank">
            <AiFillGithub /> GitHub.
          </a>
        </p>
      </div>
    </article>
  );
}
