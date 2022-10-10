import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  console.error('putDb not implemented');

  const jate = await openDB('jate', 1);

  const apple = jate.transaction('jate', 'readwrite');

  const orange = apple.objectStore('jate');

  const kiwi = orange.put({ id: id, value: value });

  const rv = await kiwi;
  console.log('data saved', rv);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const jate = await openDB('jate', 1);

  const apple = jate.transaction('jate', 'readwrite');

  const orange = apple.objectStore('jate');

  const kiwi = orange.getAll();

  const rv = await kiwi;
  console.log('data saved', rv);
};

initdb();
