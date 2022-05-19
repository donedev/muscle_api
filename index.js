const express = require("express")
const app = express()
const { UserRouter } = require("./routers/")
const U = require("./routers/user")

app.use("/user", U)

app.get("/", (req, res) => {
    res.send("TEST")
})

app.listen(3000)