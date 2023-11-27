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

  get filteredContacts(): ContactJson[] {
    const rev = this.contacts.filter((contact) => {
      return this.assembler.includes(contact[this.model] as KEY);
    });

    return rev;
  }

  groupByModel() {
    let grouped: { [key: string]: (string | undefined)[] } = {};
    //init
    this.filteredContacts.forEach((contact) => {
      /**
       * grouped = {
       *  "armada" = [mail1,mail2,...mailN ]
       * }
       */
      grouped[contact[this.model] as string] = [];
      //                    ^:institute
      //        ^:'Armada'
    });
    //fulfilling
    this.filteredContacts.forEach((contact) => {
      if (contact.email) {
        grouped[contact[this.model] as string].push(contact.email ?? undefined);
      }
    });

    return grouped;
  }
}

export default MailListGen;
