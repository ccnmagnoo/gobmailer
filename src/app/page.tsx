'use client';
import { useState } from 'react';
import { TestMail } from './libs/test.template';
import { MailerStatus, gobmailer } from './libs/transporter';
import styles from './page.module.scss';

export default function Home() {
  const mailData = {
    from: 'ccamposn@minenergia.cl',
    to: 'ccamposn@minenergia.cl',
    subject: 'test',
    html: <TestMail />,
  };

  const [mailStatus, setMailStatus] = useState<undefined | MailerStatus>(undefined);

  async function handler() {
    const result = await gobmailer(mailData);
    setMailStatus(result);
  }

  return (
    <main className={styles.main}>
      <button onClick={() => handler()}></button> {mailStatus?.status}
    </main>
  );
}
