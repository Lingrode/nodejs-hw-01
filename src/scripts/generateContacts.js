import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(JSON.stringify(updatedContacts));

    console.log('Contacts successfully generated!');
  } catch (error) {
    console.error('Error while generating contacts: ', error.message);
  }
};

generateContacts(5);
