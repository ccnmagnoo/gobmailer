render;
import { render } from '@react-email/render';
import { MailerStatus, transporter } from './transporter';
import Mail from 'nodemailer/lib/mailer';

// cspell:disable
export async function gobmailer(option: Mail.Options): Promise<MailerStatus> {
  try {
    await transporter.sendMail(option);
    console.log('mail sent');
    return { status: 'OK', details: `sent mail to ${option.to}` };
  } catch (error) {
    console.error('mail error', error);
    return {
      status: 'ERROR',
      details: error,
    };
  }
}
