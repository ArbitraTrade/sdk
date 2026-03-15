const express = require("express")
const router = express.Router()

const agentManager = require("../../agents/agentManager")

router.get("/", (req,res)=>{

    res.json(agentManager.listAgents())

})

router.post("/", (req,res)=>{

    const agent = agentManager.createAgent(req.body.name)

    res.json(agent)

})

module.exports = router
