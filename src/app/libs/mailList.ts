import Mail from 'nodemailer/lib/mailer';
import { ContactAssembler, ContactJson, contactData } from '../db/contact';
import { MailOptions } from 'nodemailer/lib/json-transport';
import { MailerElement } from './transporter';
import { render } from '@react-email/render';

type GroupByModel = { [key: string]: Set<string | undefined> };

class MailListGen<MODEL extends keyof ContactAssembler, KEY extends ContactJson[MODEL]> {
  private contacts = contactData;
  private model: MODEL; //institution,territory,scope
  private assembler: KEY[]; // corresponding element of institution or territory or scope
  private readonly re_email: RegExp = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );

  constructor(model: MODEL, assembler: KEY[]) {
    this.model = model;
    this.assembler = assembler;
  }

  get allContacts() {
    return this.contacts;
  }

  /**
   * @function get filteredContacts()
   * @returns list with details of each contact
   */
  private get filteredContacts(): ContactJson[] {
    const rev = this.contacts.filter((contact) => {
      return this.assembler.includes(contact[this.model] as KEY);
    });

    return rev;
  }

  /**
   * @function groupByModel, return grouped by model instance
   * @returns {'model instance':[mail,mail,mail]}
   */
  private groupByModel() {
    let grouped: GroupByModel = {};
    //init
    this.filteredContacts.forEach((contact) => {
      /**
       * grouped = {
       *  "armada" = [mail1,mail2,...mailN ]
       * }
       */
      //init each component
      grouped[contact[this.model] as string] = new Set<string>();
      //                    ^:institute
      //        ^:'Armada'
    });
    //fulfilling
    this.filteredContacts.forEach((contact) => {
      if (contact.email) {
        grouped[contact[this.model] as string].add(contact.email);
      }
    });
    return grouped;
  }
  // cspell:disable
  /**
   * @function mailDistribution sets mail list, ready por api mailer
   * @returns Record<string, string>  -> {Aduana:'mail,mail,mail...'}
   */
  mailDistribution() {
    const normalized: Record<string, string> = {};
    Object.entries(this.groupByModel()).forEach(([entry, setOfMails]) => {
      normalized[entry] = Array.from(setOfMails).join(',');
    });
    return normalized;
  }

  async send(
    options: Omit<Mail.Options, 'html' | 'text' | 'to'>,
    template: MailerElement,
    to: string
  ) {
    //mail grouped by email, emails are not nominative
    const distribution = to.match(this.re_email);

    if (!distribution?.length) {
      //if no valid distro mail
      return { status: 'destination invalid' };
    }

    const result = await this.apiSend({
      ...options,
      to: distribution.join(','),
      html: render(template),
    });

    return result;
  }

  private async apiSend(options: MailOptions) {
    const apiUrl = '/api/sendMail';
    try {
      const send = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
      });

      console.log('response', send.json());
      return { status: send.status };
    } catch (error) {
      console.error(error);
      return { status: error };
    }
  }
}

export default MailListGen;
