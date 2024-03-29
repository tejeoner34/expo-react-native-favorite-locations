export class Favorite {
  constructor(image, title, location) {
    this.image = image;
    this.title = title;
    this.location = location;
    this.id = generateUniqueId();
  }
}

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 15) + Math.floor(Date.now() / 1000).toString(36);
}
