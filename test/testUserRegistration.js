import { expect } from 'chai'
import request from 'request'

describe('UserRegistration', function () {
  var url = 'http://localhost:3000/newUser'
  //it functions

  it('return status 200 to check if user registration page can be load ', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it('return body not null', function (done) {
    request(url, function (error, response, body) {
      expect(response.body).not.null
      done()
    })
  })
})
describe('User Registration endpoint', () => {
  //the config for our HTTP POST request

  it('if the user not able to register with empty data, return status 302 and redirect into registration page with Errors messages ', function (done) {
    request.post('http://localhost:3000/user/register', function (
      error,
      response,
      body,
    ) {
      expect(response.statusCode).to.equal(302)

      expect(response.body).to.includes(
        'The Occupied must be selected',
        'The username has to be at least 6 characters long',
        'Please enter a valid email address',
        'The password has to be at least 8 characters long',
      )
      expect(body).not.null
      done()
    })
  })
})
describe('UserRegistration,  email & password validation', () => {
  const username = 'manar1234'
  const email = 'manar1234@gamil.com'
  const password = 'mmmmmmmmmmm'
  const confirmPassword = 'mmmmmmmmmmm'
  const occupied = 'patient'
  const postData = { username, email, password, confirmPassword, occupied }
  const postConfig = {
    url: 'http://localhost:3000/user/register',
    json: true,
    body: postData,
  }
  it(' Check username and email not registered, return status 302 and redirect into registration page with Errors messages', (done) => {
    request.post(postConfig, (error, response, body) => {
      expect(response.statusCode).to.equal(302)

      expect(response.body).to.include(
        'The given the username or email address already exist!',
      )
      done()
    })
  })
})
describe('UserRegistration,email & username, password, confirmPassword and occupation in right format', () => {
  const username = 'maar1'
  const email = 'manar1234.com'
  const password = 'mmmmmm'
  const confirmPassword = 'mmmmmmmmmmm'
  const occupied = ''
  const postData = { username, email, password, confirmPassword, occupied }
  const postConfig = {
    url: 'http://localhost:3000/user/register',
    json: true,
    body: postData,
  }
  it(' Check the submitted information  in the  right format, return status 302 and redirect into registration page with Errors messages', (done) => {
    request.post(postConfig, (error, response, body) => {
      expect(response.statusCode).to.equal(302)

      expect(response.body).to.includes(
        'Please enter a valid email address.',
        'The Occupied must be selected',
        'The username has to be at least 6 characters long.',
        'The passwords not matched',
        'The password has to be at least 8 characters long.',
      )

      done()
    })
  })
})
describe('UserRegistration, occupation can be manipulated', () => {
  const username = 'Admin1234'
  const email = 'Admin@deakin.edu.au'
  const password = 'Admin1234'
  const confirmPassword = 'Admin1234'
  const occupied = 'Admin'
  const postData = { username, email, password, confirmPassword, occupied }
  const postConfig = {
    url: 'http://localhost:3000/user/register',
    json: true,
    body: postData,
  }
  it(' Check occupation can be manipulated, return status 302 and redirect into registration page with Errors messages', (done) => {
    request.post(postConfig, (error, response, body) => {
      expect(response.statusCode).to.equal(302)

      expect(response.body).to.include('The Occupied must be selected')

      done()
    })
  })
})
describe('UserRegistration, The user can register with the right format', () => {
  const username = 'Test1234'
  const email = 'test1234@deakin.edu.au'
  const password = 'test1234'
  const confirmPassword = 'test1234'
  const occupied = 'patient'
  const postData = { username, email, password, confirmPassword, occupied }
  const postConfig = {
    url: 'http://localhost:3000/user/register',
    json: true,
    body: postData,
  }
  it(' Check the user able to register, return status 302 and redirect into login page with success messages', (done) => {
    request.post(postConfig, (error, response, body) => {
      expect(response.statusCode).to.equal(302)
      expect(response.headers.location).to.equal('/')
      // expect(req.session.messages).to.include(
      //   'Your account created successfully',
      // )
      console.log(body)
      // expect(response.body).to.include('Your account created successfully')

      done()
    })
  })
})
