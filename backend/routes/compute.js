const express = require("express")
const router = express.Router()

const computeService = require("../services/computeService")

router.get("/", async (req,res)=>{

    const data = await computeService.listCompute()

    res.json(data)

})

module.exports = router
