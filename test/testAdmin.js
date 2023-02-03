import request from 'supertest'
import { app } from '../app.js'
import { expect } from 'chai'
import config from '../server/config/index.js'
const App = app(config)
import mongoose from 'mongoose'

describe('Admin Page endPoint', function () {
  before((done) => {
    mongoose.set('strictQuery', true)
    mongoose.connect(
      'mongodb+srv://ILia:Ilia1993@cluster0.kl8ztqh.mongodb.net/HFD?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) return done(err)
        done()
      },
    )
  })

  it('Only Admin can view the admin page ', (done) => {
    request(App)
      .post('/user/login')
      .send({ username: 'AdminHFD', password: 'AdminHFD' })
      .expect(302)
      .expect('set-cookie', /session=.+/)
      .end((err, res) => {
        if (err) return done(err)
        const cookie = res.header['set-cookie']
        expect(res.headers.location).to.equal('/user/users')
        request(App)
          .get('/user/users')
          .set('Cookie', cookie)
          .expect(200)
          .end((err, res) => {
            expect(res.text).to.include('Test1234')
            if (err) return done(err)
            done()
          })
      })
  })
  it('Not Admin cannot view the AdminPage ', (done) => {
    request(App)
      .post('/user/login')
      .send({ username: 'alialkinanni', password: 'alialkinanni@gmail.com' })
      .expect(302)
      .expect('set-cookie', /session=.+/)
      .end((err, res) => {
        if (err) return done(err)
        const cookie = res.header['set-cookie']
        request(App)
          .get('/user/users')
          .set('Cookie', cookie)
          .expect(302)
          .end((err, res) => {
            expect(res.headers.location).to.equal('/')
            expect(res.text).to.include('Found. Redirecting to /')
            if (err) return done(err)
            done()
          })
      })
  })
  it('Not Admin cannot delete the a user', (done) => {
    request(App)
      .post('/user/login')
      .send({ username: 'alialkinanni', password: 'alialkinanni@gmail.com' })
      .expect(302)
      .expect('set-cookie', /session=.+/)
      .end((err, res) => {
        if (err) return done(err)
        const cookie = res.header['set-cookie']

        request(App)
          .delete('/user/delete/Test1234')
          .set('Cookie', cookie)
          .expect(302)
          .end((err, res) => {
            expect(res.headers.location).to.equal('/')

            if (err) return done(err)
            done()
          })
      })
  })

  it('Only Admin can delete a user', (done) => {
    request(App)
      .post('/user/login')
      .send({ username: 'AdminHFD', password: 'AdminHFD' })
      .expect(302)
      .expect('set-cookie', /session=.+/)
      .end((err, res) => {
        if (err) return done(err)
        const cookie = res.header['set-cookie']
        expect(res.headers.location).to.equal('/user/users')
        expect(res.text).not.include('Login')
        request(App)
          .delete('/user/delete/Test1234')
          .set('Cookie', cookie)
          .expect(302)
          .end((err, res) => {
            expect(res.headers.location).to.equal('/user/users')

            if (err) return done(err)
            request(App)
              .get('/user/users')
              .set('Cookie', cookie)
              .expect(200)
              .end((err, res) => {
                expect(res.text).not.include('Test1234')
                if (err) return done(err)
                done()
              })
          })
      })
  })
  after((done) => {
    mongoose.disconnect((err) => {
      if (err) return done(err)
      done()
    })
  })
})
