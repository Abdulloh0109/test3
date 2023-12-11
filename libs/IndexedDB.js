// libs/indexedDB.js
const DB_NAME = "topicDB";
const STORE_NAME = "topics";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    // request.onerror = (event) => {
    //   reject(Error opening indexedDB: ${event.target.errorCode});
    // };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
  });
};

export const saveTopicOffline = async (topic) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    store.add(topic);

    await new Promise((resolve) => {
      tx.oncomplete = resolve;
    });
  } catch (error) {
    console.error("Error saving topic to IndexedDB:", error);
  }
};

export const getTopicsOffline = async () => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    const topics = await new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });

    return topics;
  } catch (error) {
    console.error("Error fetching topics from IndexedDB:", error);
    return [];
  }
};

export const updateTopicOffline = async ({ id, newTitle, newDescription }) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    const existingTopic = await new Promise((resolve) => {
      const request = store.get(id);
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });

    if (existingTopic) {
      existingTopic.title = newTitle;
      existingTopic.description = newDescription;
      store.put(existingTopic);
    }

    await new Promise((resolve) => {
      tx.oncomplete = resolve;
    });
  } catch (error) {
    console.error("Error updating topic in IndexedDB:", error);
  }
};

export const removeTopicOffline = async (id) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    store.delete(id);

    await new Promise((resolve) => {
      tx.oncomplete = resolve;
    });
  } catch (error) {
    console.error("Error removing topic from IndexedDB:", error);
  }
};