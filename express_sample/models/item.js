const fs=require('fs')
exports.filePath="../data/item.json"

exports.get=()=>{
    var json=fs.readdirSync(this.filePath)
    var values=JSON.parse(json);

    return values
}


