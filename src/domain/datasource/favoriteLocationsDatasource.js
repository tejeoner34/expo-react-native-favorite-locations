export class FavoriteLocationsDataSource {
  constructor() {
    if (new.target === FavoriteLocationsDataSource) {
      throw new TypeError('Cannot construct AbstractClass instances directly');
    }
  }

  async cinit() {
    throw new Error('Method must be implemented in a subclass');
  }

  async insertLocation() {
    throw new Error('Method must be implemented in a subclass');
  }

  async fetchFavorites() {
    throw new Error('Method must be implemented in a subclass');
  }
}
