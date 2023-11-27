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

  groupInLine() {
    const normalized: Record<string, string> = {};
    Object.entries(this.groupByModel()).forEach(([entry, setOfMails]) => {
      normalized[entry] = Array.from(setOfMails).join(',');
    });
    return normalized;
  }

  send(
    options: Mail.Options,
    mailModel: 'grouped' | 'individualized' = 'grouped',
    template: (...arg: any[]) => MailerElement
  ) {
    //mail grouped by email, emails are not nominative
    if ((mailModel = 'grouped')) {
      Object.entries(this.groupInLine()).forEach(async ([_, mails]) => {
        //send anonymous grouped email
        options.to = mails;
        options.html = undefined; //important❗: email template HERE
        await this.apiSend(options);
      });
    }
    //mail personalized for each contact in filtered list
    if ((mailModel = 'individualized')) {
      this.filteredContacts.forEach(async (contact) => {
        //send personalized email
        options.to = contact.email ?? undefined;
        options.html = undefined; //important❗: email template HERE
        await this.apiSend(options);
      });
    }

    //mail personalized by name
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
    } catch (error) {
      console.error(error);
    }
  }
}

export default MailListGen;
