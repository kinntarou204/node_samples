const mysql=require('mysql2')
const db=require('../lib/db')

const con=mysql.createConnection(db.info)
con.connect((error)=>{
    if(error){
        console.log('DB connect error...')
    }
    else
    {
        console.log('DB connect success!!')
    }
});
con.end();