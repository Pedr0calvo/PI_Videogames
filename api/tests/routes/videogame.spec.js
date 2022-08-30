/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
// const fetch   = require('node-fetch');
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: "texto que de poco sirve",
  platforms: ["PC", "Nintendo 3DS", "Web"],
  genders: "Action, Shooter",
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  );

  describe("GET /videogames", () => {
    it("should get 200", () => {
      const response = agent
        .get("/videogames")
        .then(() => expect(response.status).to.be.equal(200));
    });
  });
  describe("GET /vide0ogames", () => {
    it("should get 404", () => {
      const response = agent
        .get("/vide0ogames")
        .then(() => expect(response.status).to.be.equal(404));
    });
  });
  describe("GET /gender", () => {
    it("should get 200", () => {
      const response = agent
        .get("/gender")
        .then(() => expect(response.status).to.be.equal(200));
    });
  });
  describe("POST /videogames", () => {
    it("should post 201", () => {
      const response = agent.post("/videogames", (req, res) =>
        Videogame.create(videogame).then(() =>
          expect(response.status).to.be.equal(201)
        )
      );
    });
  });
});
