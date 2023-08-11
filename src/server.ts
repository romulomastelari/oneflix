import express = require("express");

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}`)
})
