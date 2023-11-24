import Institution from './Institution';
import Territory from './Territory';
import contact from './contact.json';
import Scope from './scope';

//base Contact structure
type ContactStruct = {
  name: string;
  position: string;
  institution: Institution;
  scope: Scope;
  territory: Territory;
  email: string;
  phone: number;
  movil: number;
  address: string;
  city: string;
};

//nullable values as Partial<> but for Nulls instead
type Nullable<TYPE> = {
  [KEY in keyof TYPE]: TYPE[KEY] extends string | number ? TYPE[KEY] | null : TYPE[KEY];
};
/**
 * @type ContactJason = nullable ContactStruct, source Type from db contact object type
 */
//Contact data income with json
export type ContactJson = Nullable<ContactStruct>;

type Assembler<TYPE> = {
  [KEY in keyof TYPE]: TYPE[KEY] extends string | number ? never : TYPE[KEY];
};
/**
 * @type ContactAssemble , use ContactStruct params NON string or numbers,
 * that means just elements @param institution, @param scope, @param territory.
 */
export type ContactAssembler = Assembler<ContactStruct>;

/**
 * @constant contact with all assets with array of contacts
 */
//db with contacts
export const contactData = contact as ContactJson[];
