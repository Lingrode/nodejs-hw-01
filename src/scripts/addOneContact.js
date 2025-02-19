import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    const newContacts = [...contacts, createFakeContact()];

    await writeContacts(JSON.stringify(newContacts));

    console.log('Contact added succefully!');
  } catch (error) {
    console.error('Error while adding contact: ', error.message);
  }
};

addOneContact();
