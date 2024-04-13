import Dexie from "dexie";
import { indexedDB, IDBKeyRange } from "fake-indexeddb";

export const db = new Dexie("db", { indexedDB: indexedDB, IDBKeyRange: IDBKeyRange })

db.version(1).stores({
    blogs: 'id, Titre, Auteur, Date, Contenu' // Primary key and indexed props
  });
