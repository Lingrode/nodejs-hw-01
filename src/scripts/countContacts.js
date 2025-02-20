import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    return `Total contacts: ${contacts.length}`;
  } catch (error) {
    console.log('Error while counting contacts: ', error.message);
  }
};

console.log(await countContacts());
