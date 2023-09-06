import cnn from './config/db.config';

const axios = require('axios');	
const mysqlConn = require('serverless-mysql')({
    config: {
      host     : cnn.HOST,
      database : cnn.DB,
      user     : cnn.USER,
      password : cnn.PASSWORD
    }
  })

export const getUsers = async () => {
    let results = await mysqlConn.query('SELECT * from Users')
    await mysqlConn.end()
    return {
        statusCode: 200,
        body: JSON.stringify(results)
    }
}

export const createUser = async (event) => {
    let datos = JSON.parse(event.body);
    let dni: string = datos['DNI']
    let nombre: string = datos['Nombre']
    let aPaterno: string = datos['APaterno']
    let aMaterno: string = datos['AMaterno']               
    let strQuery = "INSERT INTO Users (DNI,Nombre,APaterno,AMaterno) values (" 
    + "'" + `${dni}` + "'" + "," +"'" + `${nombre}` + "'" + "," +"'" + `${aPaterno}` + "'" + "," +"'" + `${aMaterno}` + "'" + ")"
    let results = await mysqlConn.query(strQuery)
    return {
        statusCode: 200,
        body: JSON.stringify(results)
    }
}

export const root = async () => {

    const config = {
        method: 'get',
        url: 'https://swapi.py4e.com/api/'
    }

    let res = await axios(config);

    return {
        statusCode: res.status,
        body: JSON.stringify(res.data)
    }
}

export const planetas = async (event) => {

    let Id = event.pathParameters;
    let urlValue = `https://swapi.py4e.com/api/planets/${Id['id']}`;

    let config = {
        method: 'get',
        url: urlValue
    }

    let res = await axios(config);

    return {
        statusCode: res.status,
        body: JSON.stringify(res.data)
    }
}