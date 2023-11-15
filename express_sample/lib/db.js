const dotenv=require('dotenv')
dotenv.config()

exports.info={
    database:process.env.DB_NAME,
    database:process.env.DB_HOST,
    database:process.env.DB_PORT,
    database:process.env.DB_USER,
    database:process.env.DB_PASSWORD,
}