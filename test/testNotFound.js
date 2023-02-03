import { expect } from 'chai'
import request from 'request'
import { describe } from 'mocha'

describe('notFound', function () {
  var url = 'http://localhost:3000'

  it('notFound', (done) => {
    request('http://localhost:3000/notFound', function (error, response, body) {
      expect(response.statusCode).to.equal(404)
      done()
    })
  })
})
