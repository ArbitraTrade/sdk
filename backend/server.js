const express = require("express")
const cors = require("cors")

const computeRoutes = require("./routes/compute")
const agentRoutes = require("./routes/agents")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/compute", computeRoutes)
app.use("/agents", agentRoutes)

app.listen(3000, () => {
  console.log("Arbitra API running on port 3000")
})
