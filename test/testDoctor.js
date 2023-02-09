import request from "supertest";
import { app } from "../app.js";
import { expect } from "chai";
import config from "../server/config/index.js";
import mongoose from "mongoose";
const App = app(config);

describe("Doctor registration ", function () {
  before((done) => {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) return done(err);
        done();
      }
    );
  });

  it("return status 302 to check if home page can load ", function (done) {
    request(App)
      .get("/doctor/registration")
      .expect(302)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.header.location).to.equal("/");
        done();
      });
  });
  it("doctor has profile Cannot view the registration page ", (done) => {
    request(App)
      .post("/user/login")
      .send({ username: "zuhair1234", password: "zuhair12341234" })
      .expect(302)
      .expect("set-cookie", /session=.+/)
      .end((err, res) => {
        if (err) return done(err);
        const cookie = res.header["set-cookie"];
        expect(res.headers.location).to.equal("/doctor/registration");
        request(App)
          .get("/doctor/registration")
          .set("Cookie", cookie)
          .expect(302)
          .end((err, res) => {
            expect(res.headers.location).to.equal("/doctor/profile");
            if (err) return done(err);
            done();
          });
      });
  });
  after((done) => {
    mongoose.disconnect((err) => {
      if (err) return done(err);
      done();
    });
  });
});
