import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('File already empty!');
      return;
    }

    await writeContacts(JSON.stringify([]));
    console.log('Contacts removed!');
  } catch (error) {
    console.error('Error while deleting contacts: ', error.message);
  }
};

removeAllContacts();
