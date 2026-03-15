class AgentManager {

    constructor(){
        this.agents = []
    }

    createAgent(name){

        const agent = {
            id: Date.now(),
            name:name,
            status:"running"
        }

        this.agents.push(agent)

        return agent
    }

    listAgents(){

        return this.agents

    }

}

module.exports = new AgentManager()
