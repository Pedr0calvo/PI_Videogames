const { Videogame, Gender, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Videogame.create({ name: "Super Mario Bros" }).then(() => done());
      });
    });
    describe("description", () => {
      it("should throw an error if description is null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("Description is required")))
          .catch(() => done());
      });
      it("should work when the description is valid", () => {
        Videogame.create({ description: "Algo de texto" }).then(() => done());
      });
    });
    describe("platforms", () => {
      it("should throw an error if platforms are null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("Platforms are required")))
          .catch(() => done());
      });
      it("should work when the platforms are valid", () => {
        Videogame.create({ platforms: ["PC", "Xbox One"] }).then(() => done());
      });
    });
  });
});
