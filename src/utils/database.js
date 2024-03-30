import * as SQLite from 'expo-sqlite';

export class SQLiteDatabase {
  constructor() {
    this.db = SQLite.openDatabase('favorite-locations.db');
  }
  init() {
    const promise = new Promise((resolve, reject) => {
      this._executeTransaction(
        `CREATE TABLE IF NOT EXISTS locations (
            id INTEGER PRIMARY KEY NOT NULL,
            image TEXT,
            title TEXT,
            location TEXT
        )`,
        [],
        resolve,
        reject
      );
    });

    return promise;
  }

  insertLocation(favoriteLocation) {
    const { image, location, title } = favoriteLocation;
    const promise = new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO locations (image, title, location) VALUES (?, ?, ?)',
          [image, title, location],
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

  _executeTransaction(command, params = [], resolve, reject) {
    this.db.transaction((tx) => {
      tx.executeSql(
        command,
        params,
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  }
}
