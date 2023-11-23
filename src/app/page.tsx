import { useState } from 'react';
import { TestMail } from './libs/test.template';
import { MailerStatus } from './libs/transporter';
import styles from './page.module.scss';

export default function Home() {
  const mailData = {
    from: 'ccamposn@minenergia.cl',
    to: 'ccamposn@minenergia.cl',
    subject: 'test',
    html: <TestMail />,
  };

  async function handler() {}

  return (
    <main className={styles.main}>
      <button onClick={undefined}></button> test
    </main>
  );
}
