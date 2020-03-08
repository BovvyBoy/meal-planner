class ProfileAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get token(){
        return this.baseAdapter.token
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async updatePlanner(params){
        const { id, name, duration} = params
        const url = `${this.baseURL}/api/v1/planners/${id}`
        const body = {
            planner: {name, duration}
        }
        const res = await fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async createPlanner(params){
        const url = `${this.baseURL}/api/v1/planners`
        const res = await fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getUser(){
        const res = await fetch(`${this.baseURL}/api/v1/profile`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getPlannerById(plannerId){
        const res = await fetch(`${this.baseURL}/api/v1/planners/${plannerId}`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getRecipeById(recipe){
        const res = await fetch(`${this.baseURL}/api/v1/recipes/${recipe}`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }
}