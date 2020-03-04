class RecipesAdapter{

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

    async getRecipes(){
        const res = await fetch(`${this.baseURL}/api/v1/recipes`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getPlanners(){
        const res = await fetch(`${this.baseURL}/api/v1/planners`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

}