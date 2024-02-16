// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Write your code here to retrieve all art pieces
    return ArtPiece.db.length ? ArtPiece.db : "";
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    const artFound = ArtPiece.db.find((art) => {
      if (art.id == id) {
        return art;
      } else return null;
    });

    return artFound ? artFound : null;
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const artFound = ArtPiece.findOne(id);

    if (prodInd) {
      Object.assign(artFound, data);
    }

    return artFound;
  }

  static delete(id) {
    // Write your code here to delete a specific art piece
    const artInd = ArtPiece.db.findIndex((art) => {
      art.id == id;
    });

    if (artInd !== -1) {
      ArtPiece.db.splice(artInd, 1);
    }
  }
}
