class PlannersAdapter{

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

    async getPlannerById(plannerId){
        const res = await fetch(`${this.baseURL}/api/v1/planners/${plannerId}`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async createPlanner(params) {
        const res = await fetch(`${this.baseURL}/planners`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }
    


}