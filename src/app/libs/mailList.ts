import Institution from '../db/Institution';
import Territory from '../db/Territory';
import { ContactAssembler, ContactJson, contactData } from '../db/contact';
import Scope from '../db/scope';

class MailListGen<MODEL extends keyof ContactAssembler, KEY extends ContactJson[MODEL]> {
  contacts = contactData;
  private model: MODEL;
  private assembler: KEY[];

  constructor(model: MODEL, assembler: KEY[]) {
    this.model = model;
    this.assembler = assembler;
  }
  set newAssemblerList(assembler: KEY[]) {
    this.assembler = assembler;
  }
  set addAssembler(element: KEY) {
    this.assembler.push(element);
  }
}

const list = new MailListGen('institution', ['Armada', 'Aduana', 'Carabineros de Chile']);
