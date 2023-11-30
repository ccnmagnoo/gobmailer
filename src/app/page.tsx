import MailListGen from './libs/MailList';
import styles from './page.module.scss';
import { Basic } from './template/basic.template';

export default function Home() {
  const mail = new MailListGen('institution', ['test', 'Aduana', 'Bomberos de Chile']);
  const grouped = mail.mailDistribution();
  console.log('result📨', grouped);

  return (
    <main className={styles.main}>
      <header>
        <h1>gobMailer 1.0</h1>
        <h2>contacting dumb people🤡 since 2023</h2>
      </header>
      {/* <Basic content={{ title: 'i´m a title' }} options={{}} /> */}
      <button disabled={false}>send mail</button>
    </main>
  );
}
