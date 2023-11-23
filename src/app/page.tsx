import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>gobMailer 1.0</h1>
        <h2>contacting dumb people🤡 since 2023</h2>
      </header>
      <button disabled={false}>send mail</button>
    </main>
  );
}
