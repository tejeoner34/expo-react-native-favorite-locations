import * as SQLite from 'expo-sqlite';
import { FavoriteLocationsDataSource } from '../../domain/datasource/favoriteLocationsDatasource';
import { Favorite } from '../../../models/favorite';

export class SQLiteFavoriteLocationsDS extends FavoriteLocationsDataSource {
  constructor() {
    super();
    this.db = SQLite.openDatabase('locations.db');
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
          (_, result) => {
            console.log('init success ', result);
            resolve(result);
          },
          (_, err) => {
            console.log('init error', err);
            reject(err);
          }
        );
      });
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
          (_, result) => {
            console.log(result);
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  }

  fetchFavorites() {
    const promise = new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM locations',
          [],
          (_, result) => {
            console.log(result);
            const locations = result.rows._array.map(
              (location) =>
                new Favorite(location.image, location.title, JSON.parse(location.location))
            );
            console.log(locations);
            resolve(locations);
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
