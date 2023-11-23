render;
import { render } from '@react-email/render';
import { MailerElement, MailerOption, MailerStatus, transporter } from './transporter';

// cspell:disable
export async function gobmailer<T>(option: MailerOption<T>): Promise<MailerStatus> {
  let emailHtml: string | undefined = undefined;

  if (typeof option.html === 'string') {
    emailHtml = option.html;
  } else {
    emailHtml = render(option.html as MailerElement); //alert!: im cheating here.
  }

  const compose: MailerOption<string> = {
    from: option.from,
    to: option.to,
    subject: option.subject,
    html: emailHtml,
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
