import nodemailer from 'nodemailer';
import { JSXElementConstructor, ReactElement } from 'react';

export type MailerOption<MAIL> = {
  from: string;
  to: string;
  subject: string;
  html: MAIL;
};

export type MailerStatus = {
  status: 'OK' | 'ERROR';
  details?: unknown;
};

export type MailerElement<T = any> = ReactElement<T, string | JSXElementConstructor<T>>;

export const transporter = nodemailer.createTransport({
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
