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

    async getPlanners(){
        const res = await fetch(`${this.baseURL}/api/v1/planners`,{
            headers: this.headers
        })
        this.baseAdapter.checkStatus(res)
        return await res.json()
    }


}