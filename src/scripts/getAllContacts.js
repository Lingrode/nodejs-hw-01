import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return JSON.parse(data);
  } catch (error) {
    console.log('Error while getting contacts: ', error.message);
  }
};

console.log(await getAllContacts());
