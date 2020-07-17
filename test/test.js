var expect = require("chai").expect;
var request = require("request");

it("Main page ", function (done) {
  request("http://localhost:5001", function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it("Signin page ", function (done) {
  request("http://localhost:5001/Signin", function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it("Signup page ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});
