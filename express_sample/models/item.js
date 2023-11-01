//Modelモジュール読み込み
const Model = require('./Model')

//Modelクラスを継承
class Item extends Model {
    dataFile = "./data/item"
}

//モジュール化
module.exports = Item






