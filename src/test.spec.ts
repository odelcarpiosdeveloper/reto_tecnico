import cnn from './config/db.config';
import axios from "axios"
const mysqlConn = require('serverless-mysql')({
    config: {
      host     : cnn.HOST,
      database : cnn.DB,
      user     : cnn.USER,
      password : cnn.PASSWORD
    }
  })

describe('AXIOS GET - Root', () => {
    test('Probando el servicio Root', async () => {
        const config = {
            method: 'get',
            url: 'https://swapi.py4e.com/api/'
        }

        const res =  await axios(config);

        expect(res.status).toEqual(200)
    })
})

describe('AXIOS GET - Planetas', () => {
    test('Probando el servicio Root', async () => {
        const config = {
            method: 'get',
            url: 'https://swapi.py4e.com/api/planets/1'
        }

        const res =  await axios(config);

        expect(res.status).toEqual(200)
    })
})