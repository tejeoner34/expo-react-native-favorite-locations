import * as SQLite from 'expo-sqlite';

export class SQLiteDatabase {
  constructor() {
    this.db = SQLite.openDatabase('favorite-locations.db');
  }
  init() {
    const promise = new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS locations (
            id INTEGER PRIMARY KEY NOT NULL,
            image TEXT,
            title TEXT,
            location TEXT
        )`,
          [],
          () => {
            resolve();
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });

    return promise;
  }
}
