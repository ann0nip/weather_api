const should = require("should")
const request = require("supertest")
const app = require("./app")

describe("Test Endpoints", () => {
  describe('Check base URL ', () => {
    it('Endpoint: "/api/v1/" ', (done) => {
      request(app)
        .get('/api/v1/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res);
          should(res.body).have.property.message
          done();
        });
    })
  });
  describe("Check /location", () => {
    it("Should return the city & countryCode ", (done) => {
      request(app)
        .get('/api/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res);
          should(res.body).have.property.city
          should(res.body).have.property.countryCode
          done();
        });
    })
  })

  describe("Check /current & /current/:city", () => {
    it("Should return city, weather & more props", (done) => {
      request(app)
        .get('/api/v1/current', { timeout: 5000 })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res);
          should(res.body).have.property.city
          should(res.body).have.property.weather
          should(res.body).have.property.more
          done();
        });
    })

    it("Should return city, weather & more props", (done) => {
      request(app)
        .get('/api/v1/current/cordoba', { timeout: 5000 })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res);
          should(res.body).have.property.city
          should(res.body).have.property.weather
          should(res.body).have.property.more
          done();
        });
    })
  })
})