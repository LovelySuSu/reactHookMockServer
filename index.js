const express = require('express')

const app = new express()

app.get('/',(req,res) => {
    res.status(200)
    res.send('hello express')
    res.end()
})
app.get('/rest',(req,res) => {
    res.json({
        result: 1,
        msg: 'hello dingding'
    })
})
app.listen('1314',() => {
    console.log('server is listening on port 1314')
})
