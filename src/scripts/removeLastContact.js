import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('File already empty!');
      return;
    }

    const removedContact = contacts.pop();

    await writeContacts(contacts);
    console.log('Removed contact:\n', removedContact);
  } catch (error) {
    console.error('Error while removing contact: ', error.message);
  }
};

removeLastContact();
