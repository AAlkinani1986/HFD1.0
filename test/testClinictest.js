import { expect } from 'chai'
import request from 'request'

describe('ClinicProfile', function () {
  var url = 'http://localhost:3000/clinic/profile'
  //it functions

  it("return status 200 to check works", function(done){
    request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done()
    });
    done()
  })
})
