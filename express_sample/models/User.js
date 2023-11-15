//Modelモジュール読み込み
const Model = require('mysql2/promise')
const db=require('../lib/db')
//Modelクラスを継承 
class User extends Model {
    add=async(post)=>{
        var sql=`INESRT INTO users SET ?;`
        try{
            const con= await mysql.createConnection(db.info);
            var reult;
            reult=con.query(sql,post);
        }
        catch(error){

        }
        finally{
            con.end();
        }
        return reult;
    }  
    auth = (email, password) => {
        
        
    }
}

//モジュール化
module.exports = User