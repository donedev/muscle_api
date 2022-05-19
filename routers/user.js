const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("TEST2")
})

module.exports = router;

    