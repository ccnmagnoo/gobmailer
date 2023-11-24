import contact from './contact.json';

//base Contact structure
type ContactStruct = {
  name: string;
  position: string;
  institution: string;
  scope: string;
  territory: string;
  email: string;
  phone: number;
  movil: number;
  address: string;
  city: string;
};

//nullable values as Partial<> but for Nulls instead
export type Nullable<TYPE> = {
  [KEY in keyof TYPE]: TYPE[KEY] | null;
};

//Contact data income with json
export type ContactJson = Nullable<ContactStruct>;

//db with contacts
const data: ContactJson[] = contact;
