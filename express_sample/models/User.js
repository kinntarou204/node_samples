//Modelモジュール読み込み
const Model = require('mysql2/promise')
const db=require('../lib/db')
//Modelクラスを継承
class User extends Model {
    add=async(post)=>{
        
    }  
    auth = (email, password) => {
        
        
    }

}

//モジュール化
module.exports = User