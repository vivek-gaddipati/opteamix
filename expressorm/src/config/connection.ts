import {Sequelize} from 'sequelize';

const db = "nodews";
const username="root";
const password="Welcome123";

export const connection = new Sequelize(db, username, password, {
    dialect: "mysql",
    port:3306,
    pool: {
        min: 1,
        max: 5,
        idle: 1000
    },
    logging:true
});

// Promise
connection.authenticate()
    .then(() => console.log("mysql connected!!!"))
    .catch(err => console.log(err));