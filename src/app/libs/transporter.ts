import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { JSXElementConstructor, ReactElement } from 'react';

export type MailerOption<MAIL> = {
  from: string;
  to: string;
  subject: string;
  html: MAIL;
};

export type MailerElement<T = any> = ReactElement<T, string | JSXElementConstructor<T>>;

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST as string,
  port: 587,
  secure: false, //https://nodemailer.com/smtp/ upgrade later with STARTTLS
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// cspell:disable
export async function gobmailer<T extends MailerElement>(option: MailerOption<T>) {
  const emailHtml = render(option.html);

  const compose: MailerOption<string> = {
    from: option.from,
    to: option.to,
    subject: option.subject,
    html: emailHtml,
  };
  try {
    await transporter.sendMail(compose);
    console.log('mail sent');
  } catch (error) {
    console.error('mail error', error);
  }
}
