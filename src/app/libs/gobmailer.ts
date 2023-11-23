render;
import { render } from '@react-email/render';
import { MailerElement, MailerOption, MailerStatus, transporter } from './transporter';
import Mail from 'nodemailer/lib/mailer';

// cspell:disable
export async function gobmailer(option: Mail.Options): Promise<MailerStatus> {
  const compose: Mail.Options = {
    from: option.from,
    to: option.to,
    cc: option.cc,
    subject: option.subject,
    html: option.html,
  };
  try {
    await transporter.sendMail(compose);
    console.log('mail sent');
    return { status: 'OK', details: `sent mail to ${compose.to}` };
  } catch (error) {
    console.error('mail error', error);
    return {
      status: 'ERROR',
      details: error,
    };
  }
}
