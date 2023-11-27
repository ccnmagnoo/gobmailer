import { ContactAssembler, ContactJson, contactData } from '../db/contact';

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

  get mailList() {
    const rev = this.contacts.filter((contact) => {
      return this.assembler.includes(contact[this.model] as KEY);
    });

    return rev;
  }

  groupByMails() {
    this.mailList.forEach(() => {});
  }
}

export default MailListGen;
