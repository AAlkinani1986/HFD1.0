import express from 'express'
import { expect } from 'chai'
import request from 'request'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../app.js'
chai.should()
chai.use(chaiHttp)
describe('login', function () {
  var url = 'http://localhost:3000'
  //it functions

  it('return status 200 to check if home page can load ', function (done) {
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
describe('Login endpoint', () => {
  //the config for our HTTP POST request

  it('if the user not able to login return status 302 and redirect into login page again ', function (done) {
    request.post('http://localhost:3000/user/login', function (
      error,
      response,
      body,
    ) {
      expect(response.statusCode).to.equal(302)
      expect(response.headers.location).to.equal('/')
      expect(body).not.null
      done()
    })
  })
})
describe('Admin Login', () => {
  const username = 'AdminHFD'
  const password = 'AdminHFD'
  const postData = { username, password }

  const postConfig = {
    url: 'http://localhost:3000/user/login',
    json: true,
    body: postData,
  }
  it('return status 302 if the Admin able to login with redirect to Admin Page ', function (done) {
    request.post(postConfig, function (error, response, body) {
      expect(response.statusCode).to.equal(302)
      expect(response.headers).to.have.property('location')
      expect(response.headers.location).to.equal('/user/users')

      done()
    })
  })
})
describe('patient login', function () {
  const username = 'alialkinanni'
  const password = 'alialkinanni@gmail.com'
  const postData = { username, password }
  const postConfig = {
    url: 'http://localhost:3000/user/login',
    json: true,
    body: postData,
  }
  it('return status 302 if the patient able to login with redirect to patientRegistration page ', function (done) {
    request.post(postConfig, function (error, response, body) {
      expect(response.statusCode).to.equal(302)
      expect(response.headers).to.have.property('location')
      expect(response.headers.location).to.equal('/patient/registration')

      done()
    })
  })
})
describe('Doctor login', function () {
  const username = 'adnan1234'
  const password = 'adnan1234'
  const postData = { username, password }
  const postConfig = {
    url: 'http://localhost:3000/user/login',
    json: true,
    body: postData,
  }
  it('return status 302 if the Doctor able to login with redirect to DoctorRegistration page ', function (done) {
    request.post(postConfig, function (error, response, body) {
      expect(response.statusCode).to.equal(302)
      expect(response.headers).to.have.property('location')
      expect(response.headers.location).to.equal('/doctor/registration')

      done()
    })
  })
})
describe('Clinic login', function () {
  const username = 'manar1234'
  const password = 'manar1234'
  const postData = { username, password }
  const postConfig = {
    url: 'http://localhost:3000/user/login',
    json: true,
    body: postData,
  }
  it('return status 302 if the clinic able to login with redirect to ClinicRegistration page ', function (done) {
    request.post(postConfig, function (error, response, body) {
      expect(response.statusCode).to.equal(302)
      expect(response.headers).to.have.property('location')
      expect(response.headers.location).to.equal('/clinic/registration')

      done()
    })
  })
})
