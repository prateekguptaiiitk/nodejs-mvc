const express = require('express')

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    console.log('Success')
    return res.send('success')
})

app.listen(PORT, () => console.log(`server running at port: ${PORT}`))

