export class FavoriteLocationsRepository {
  constructor() {
    if (new.target === FavoriteLocationsRepository) {
      throw new TypeError('Cannot construct AbstractClass instances directly');
    }
  }

  async init() {
    throw new Error('Method must be implemented in a subclass');
  }

  async insertLocation() {
    throw new Error('Method must be implemented in a subclass');
  }

  async fetchFavorites() {
    throw new Error('Method must be implemented in a subclass');
  }
}
