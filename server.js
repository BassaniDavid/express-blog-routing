const express = require('express')
const app = express()
const port = 2000
const postsRouter = require('./routers/posts')

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log('server in ascolto alla porta ' + port)
})