const express=require('express')
const dotenv=require('dotenv')

dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

const app=express()
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('Hello!!!!!!!')
})

app.get('/profil',(req,res)=>{
    res.send('profile')
})

app.post('/auth',(req,res)=>{
    console.log(req.body)
    //var loginName=req.body.loginName
    //var password=req.body.password
    res.send('認証完了')
})

app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})