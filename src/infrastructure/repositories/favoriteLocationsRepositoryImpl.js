import { FavoriteLocationsRepository } from '../../domain/repository/favoriteLocationsRepository';

export class FavoriteLocationsRepositoryImpl extends FavoriteLocationsRepository {
  constructor(dataSource) {
    super();
    this.dataSource = dataSource;
  }
  async init() {
    await this.dataSource.init();
  }

  async insertLocation(favorite) {
    return await this.dataSource.insertLocation(favorite);
  }

  async fetchFavorites() {
    return await this.dataSource.fetchFavorites();
  }
}
