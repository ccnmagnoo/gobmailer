import Institution from '../db/Institution';
import Territory from '../db/Territory';
import { ContactAssembler, ContactJson, contactData } from '../db/contact';
import Scope from '../db/scope';

class MailListGen<MODEL extends keyof ContactAssembler, KEY extends ContactJson[MODEL]> {
  contacts = contactData;
  private model: MODEL; //institution,territory,
  private assembler: KEY[];

  constructor(model: MODEL, assembler: KEY[]) {
    this.model = model;
    this.assembler = assembler;
  }
}

const list = new MailListGen('institution', ['Aduana', 'Aduana', 'I.M. Catemu']);
